/* Shared map with public participation. Names are remembered locally; no accounts. */
import { firebaseConfig } from './typecast-config.js';
import { createLocalStore } from './typecast-local.js';

(() => {
  'use strict';
  if (!document.getElementById('actor-plot')) return;
  const $ = (id) => document.getElementById(id);
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const NAME_KEY = 'typecast-display-name';
  const coordinates = (x, y) => ({ x: Math.max(0, Math.min(100, Math.round(Number(x) || 0))), y: Math.max(0, Math.min(100, Math.round(Number(y) || 0))) });
  let catalog = [];
  let state = { actors: [] };
  let store;
  let selectedId = 'nm0000206';
  let preferredActorId = '';
  let visitor = '';
  let filter = 'all';
  let view = 'map';
  let proposalActorId = null;
  let toastTimer;
  let ready = false;
  let busy = false;
  let resolveName;
  let watchedActor = '';
  let panelActorId = '';
  let comments = null;
  const drafts = new Map();
  try { visitor = (localStorage.getItem(NAME_KEY) || '').trim().slice(0, 40); } catch (_) { /* Remember for this visit only. */ }

  function notify(message) {
    clearTimeout(toastTimer);
    $('toast').textContent = message;
    $('toast').classList.add('visible');
    toastTimer = setTimeout(() => $('toast').classList.remove('visible'), 6000);
  }
  function pending(actor) { return actor.proposals.filter((p) => p.status === 'pending'); }
  function shownPlacement(actor) { return actor.accepted || pending(actor)[0]; }
  function currentActor() { return state.actors.find((actor) => actor.id === selectedId); }
  function updateBusy() {
    document.querySelectorAll('#suggest-actor, #suggest-move, [data-approve], #proposal-form button[type="submit"], #comment-form button[type="submit"]').forEach((button) => { button.disabled = busy || !ready; });
  }
  function showName() {
    $('visitor-name').value = visitor;
    $('name-dialog').showModal();
    $('visitor-name').focus();
  }
  async function requireName() {
    if (visitor) return true;
    showName();
    return new Promise((resolve) => { resolveName = resolve; });
  }
  function updateNameButton() { $('change-name').textContent = visitor ? `Your name: ${visitor}` : 'Set your name'; }
  function connectionError(error) {
    const code = error?.code || '';
    const message = code.includes('permission-denied') ? 'The shared map is not accepting changes yet. Its database rules need to be deployed.' : code.includes('resource-exhausted') ? 'The shared map has reached its free usage limit. Please try again later.' : 'The shared map could not connect. Check your connection and reload to try again.';
    $('connection-copy').textContent = message;
    notify(message);
  }
  function actionError(error) {
    if (error?.code) connectionError(error);
    else notify(error.message || 'That change could not be saved. Please try again.');
  }

  function avatar(actor) {
    const photo = catalog.find((entry) => entry.imdb === actor.imdb)?.photo;
    const initials = actor.name.split(/\s+/).map((part) => part[0]).slice(0, 2).join('');
    return `<span class="avatar" aria-hidden="true">${photo ? `<img src="${esc(photo)}" alt="" loading="lazy">` : esc(initials)}</span>`;
  }

  function filteredActors() {
    const search = $('actor-search').value.trim().toLocaleLowerCase();
    return state.actors.filter((actor) => actor.name.toLocaleLowerCase().includes(search) && (filter !== 'pending' || pending(actor).length));
  }

  function renderMap() {
    const actors = filteredActors();
    $('actor-count').textContent = state.actors.length;
    $('pending-count').textContent = state.actors.filter((actor) => pending(actor).length).length;
    $('actor-points').innerHTML = actors.map((actor) => {
      const position = shownPlacement(actor);
      // A visual inset keeps end-point portraits and labels inside the chart at 0 and 100.
      const left = 10 + position.x * .8;
      const top = 90 - position.y * .8;
      return `<button class="actor-point${actor.id === selectedId ? ' selected' : ''}${!actor.accepted ? ' pending' : ''}" type="button" data-actor="${esc(actor.id)}" style="left:${left}%;top:${top}%" aria-label="${esc(actor.name)}, personality ${position.x} out of 100, acting ${position.y} out of 100${!actor.accepted ? ', proposed' : ''}" aria-pressed="${actor.id === selectedId}">${avatar(actor)}<span class="point-name">${esc(actor.name)}</span></button>`;
    }).join('');
    $('map-empty').hidden = actors.length > 0;
    $('actor-list').innerHTML = actors.length ? actors.map((actor) => {
      const position = shownPlacement(actor);
      return `<button type="button" data-actor="${esc(actor.id)}" class="${actor.id === selectedId ? 'selected' : ''}" aria-pressed="${actor.id === selectedId}">${avatar(actor)}<span class="list-name"><strong>${esc(actor.name)}</strong><small>${pending(actor).length ? 'Needs votes' : 'Placed'}</small></span><span class="list-stats"><small>Personality ${position.x}/100<br>Acting ${position.y}/100</small></span></button>`;
    }).join('') : '<p class="muted">No actors match. Try another name or filter.</p>';
    $('chart-view').hidden = view !== 'map';
    $('actor-list').hidden = view !== 'list';
  }


  function proposalHTML(proposal) {
    return `<article class="proposal-card"><div class="vote-count">${proposal.approvals} / 2 approvals · Proposed position</div><p class="proposal-meta">Personality ${proposal.x}/100 · Acting ${proposal.y}/100<br>By ${esc(proposal.author)}</p><p>${esc(proposal.reason)}</p><button class="button secondary full-width" type="button" data-approve="${esc(proposal.id)}">Approve this position +1</button></article>`;
  }

  function renderPanel() {
    if ($('comment-text') && panelActorId) drafts.set(panelActorId, $('comment-text').value);
    const actor = currentActor();
    if (!actor) {
      $('actor-panel').innerHTML = '<p class="loading">The map is ready for its first actor. Choose “Suggest an actor” to get started.</p>';
      panelActorId = '';
      return;
    }
    panelActorId = actor.id;
    const position = shownPlacement(actor);
    const proposals = pending(actor);
    const commentHTML = (comments || []).map((comment) => `<article class="comment"><div class="comment-meta"><span class="comment-avatar" aria-hidden="true">${esc(comment.author.slice(0, 1).toUpperCase())}</span><strong>${esc(comment.author)}</strong><time datetime="${new Date(comment.time).toISOString()}">${new Date(comment.time).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</time></div><p>${esc(comment.text)}</p></article>`).join('');
    const commentStatus = comments === null ? 'Loading the conversation…' : 'No takes yet. Which performance makes the case for this placement?';
    $('actor-panel').innerHTML = `
      <div class="panel-heading"><p class="eyebrow">UNDER DISCUSSION</p><button class="text-button" id="back-to-map" type="button">Back to map ↑</button></div>
      <div class="actor-profile">${avatar(actor)}<div><p class="eyebrow">${actor.accepted ? actor.accepted.starter ? 'STARTER PLACEMENT' : 'APPROVED PLACEMENT' : 'AWAITING APPROVAL'}</p><h2>${esc(actor.name)}</h2><a href="https://www.imdb.com/name/${esc(actor.imdb)}/" target="_blank" rel="noopener noreferrer">View on IMDb ↗</a></div></div>
      <div class="panel-body"><div class="position-stats"><span><strong>${position.x}</strong> / 100 personality</span><span><strong>${position.y}</strong> / 100 acting</span></div><p class="placement-reason">${esc(position.reason)}</p><p class="placement-credit">${actor.accepted ? `Placed by ${esc(position.author)}` : 'Proposed position · awaiting two approvals'}</p><button class="button secondary full-width" id="suggest-move" type="button">Suggest ${actor.accepted ? 'a move' : 'another position'} <span aria-hidden="true">↗</span></button>
      ${proposals.length ? `<section class="proposals" aria-label="Positions awaiting approval"><h3 class="small-heading">On the table (${proposals.length})</h3>${proposals.map(proposalHTML).join('')}</section>` : ''}
      <section class="comments" aria-label="Discussion"><h3>The conversation <span>${comments?.length || 0}${comments?.length === 100 ? ' latest' : ''}</span></h3>${commentHTML || `<p class="empty-comments">${commentStatus}</p>`}<form class="comment-form" id="comment-form"><label for="comment-text">${visitor ? `Comment as ${esc(visitor)}` : 'Add your take — just a name, no account.'}</label><textarea id="comment-text" rows="3" maxlength="1000" required placeholder="Bring a scene. Make an argument."></textarea><div class="comment-actions"><span>${store.shared ? 'Shared with everyone.' : 'Local preview · this browser only.'}</span><button class="button primary" type="submit">Post comment ↗</button></div></form></section></div>`;
    $('comment-text').value = drafts.get(actor.id) || '';
    $('suggest-move').addEventListener('click', () => openProposal(actor.id));
    $('back-to-map').addEventListener('click', () => {
      $('map-section').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
      const point = [...document.querySelectorAll('[data-actor]')].find((element) => element.dataset.actor === selectedId && element.offsetParent !== null);
      (point || $('actor-search')).focus({ preventScroll: true });
    });
    $('comment-form').addEventListener('submit', postComment);
    updateBusy();
  }

  function render() {
    if (!currentActor()) selectedId = state.actors[0]?.id || '';
    renderMap();
    if (selectedId !== watchedActor) {
      watchedActor = selectedId;
      comments = null;
      renderPanel();
      if (selectedId) {
        const actorId = selectedId;
        store.watchComments(actorId, (items) => {
          if (actorId !== selectedId) return;
          comments = items;
          renderPanel();
        });
      }
    } else renderPanel();
    updateBusy();
  }

  function selectActor(id, moveFocus = false) {
    if (!state.actors.some((actor) => actor.id === id)) return;
    selectedId = id;
    history.replaceState(null, '', `#actor=${encodeURIComponent(id)}`);
    render();
    if (moveFocus) {
      $('actor-panel').focus({ preventScroll: true });
      if (matchMedia('(max-width: 850px)').matches) $('actor-panel').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    }
  }

  function syncOutputs() {
    $('personality-output').textContent = `${$('personality').value} / 100`;
    $('ability-output').textContent = `${$('ability').value} / 100`;
  }

  function openProposal(actorId = null) {
    proposalActorId = actorId;
    $('proposal-form').reset();
    $('proposal-error').textContent = '';
    const actor = state.actors.find((entry) => entry.id === actorId);
    $('actor-fields').hidden = !!actor;
    $('actor-name').required = !actor;
    $('actor-imdb').required = !actor;
    $('proposal-title').textContent = actor ? `Move ${actor.name}` : 'Who’s missing?';
    $('proposal-description').textContent = actor ? 'Suggest a new position. Every alternative starts with zero votes.' : 'Place an actor, then tell us why they belong there.';
    if (actor) {
      const position = shownPlacement(actor);
      $('personality').value = position.x;
      $('ability').value = position.y;
    }
    syncOutputs();
    $('proposal-dialog').showModal();
    (actor ? $('personality') : $('actor-name')).focus();
  }

  function parseIMDb(value) {
    try {
      const url = new URL(value);
      if (url.protocol !== 'https:' || !['www.imdb.com', 'imdb.com', 'm.imdb.com'].includes(url.hostname) || url.username || url.password || url.port) return null;
      return url.pathname.match(/^\/name\/(nm\d{5,12})\/?$/)?.[1] || null;
    } catch (_) { return null; }
  }


  async function submitProposal(event) {
    event.preventDefault();
    if (busy || !ready) return;
    const reason = $('proposal-reason').value.trim();
    const position = coordinates($('personality').value, $('ability').value);
    const fail = (message) => { $('proposal-error').textContent = message; };
    if (!reason) return fail('Add a short explanation for this placement.');
    const actor = state.actors.find((entry) => entry.id === proposalActorId);
    const name = actor?.name || $('actor-name').value.trim().replace(/\s+/g, ' ');
    const imdb = actor?.imdb || parseIMDb($('actor-imdb').value.trim());
    if (!name) return fail('Add the actor’s name.');
    if (!imdb) return fail('Use an HTTPS IMDb person profile, like https://www.imdb.com/name/nm0000206/.');
    if (!actor) {
      const duplicate = state.actors.find((entry) => entry.imdb === imdb || entry.name.toLocaleLowerCase() === name.toLocaleLowerCase());
      if (duplicate) return fail(`${duplicate.name} is already on the map. Select their point to suggest a move.`);
    } else {
      if (actor.accepted?.x === position.x && actor.accepted?.y === position.y) return fail('Choose a different position to propose a move.');
      if (pending(actor).some((p) => p.x === position.x && p.y === position.y)) return fail('That position is already proposed. You can approve it in the actor panel.');
    }
    if (!await requireName()) return;
    busy = true;
    updateBusy();
    try {
      const result = await store.propose({ actorId: imdb, name, ...position, reason, author: visitor, isNew: !actor });
      $('proposal-dialog').close();
      filter = 'all';
      $('actor-search').value = '';
      updateFilters();
      if (state.actors.some((entry) => entry.id === result.actorId)) selectActor(result.actorId, true);
      else preferredActorId = result.actorId;
      notify(result.saved ? 'Placement proposed. Two approvals will put it on the map.' : 'Placement added for this visit only; browser storage is unavailable.');
    } catch (error) { fail(error.code ? 'The placement could not be saved. Please check your connection and try again.' : error.message); }
    finally { busy = false; updateBusy(); }
  }

  async function approve(proposalId) {
    if (busy || !ready) return;
    const actorId = selectedId;
    if (!await requireName()) return;
    busy = true;
    updateBusy();
    try {
      const result = await store.approve(actorId, proposalId);
      notify(!result.saved ? 'Approval counted for this visit only; browser storage is unavailable.' : result.accepted ? 'Two approvals! The new position is accepted.' : 'Approval counted. One more puts it on the map.');
    } catch (error) { actionError(error); }
    finally { busy = false; updateBusy(); }
  }

  async function postComment(event) {
    event.preventDefault();
    if (busy || !ready) return;
    const text = $('comment-text').value.trim();
    if (!text) { $('comment-text').setCustomValidity('Write a comment before posting.'); $('comment-text').reportValidity(); return; }
    const actorId = selectedId;
    if (!await requireName()) return;
    busy = true;
    updateBusy();
    try {
      const result = await store.comment(actorId, text, visitor);
      drafts.delete(actorId);
      if (selectedId === actorId && $('comment-text')) $('comment-text').value = '';
      renderPanel();
      notify(result.saved ? store.shared ? 'Comment posted.' : 'Comment saved in this browser’s preview.' : 'Comment added for this visit only; browser storage is unavailable.');
    } catch (error) { actionError(error); }
    finally { busy = false; updateBusy(); }
  }

  function updateFilters() {
    document.querySelectorAll('[data-filter]').forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function renderCredits() {
    $('credits-list').innerHTML = catalog.map((actor) => `<article class="credit"><strong>${esc(actor.name)}</strong><p>${esc(actor.credit)}</p><a href="${esc(actor.source)}" target="_blank" rel="noopener noreferrer">Original photograph ↗</a><a href="${esc(actor.licenseUrl)}" target="_blank" rel="noopener noreferrer">${esc(actor.license)}</a></article>`).join('');
  }


  async function init() {
    try {
      const response = await fetch('assets/js/typecast-actors.json');
      if (!response.ok) throw new Error('Actor catalog could not be loaded.');
      catalog = await response.json();
      if (location.hash.startsWith('#actor=')) {
        const id = location.hash.slice(7);
        selectedId = catalog.find((entry) => entry.id === id)?.imdb || id;
      }
      const onChange = (actors) => {
        state = { actors };
        if (preferredActorId && actors.some((actor) => actor.id === preferredActorId)) {
          selectedId = preferredActorId;
          preferredActorId = '';
          history.replaceState(null, '', `#actor=${selectedId}`);
        }
        ready = true;
        $('connection-copy').textContent = store.shared ? 'The shared map. Just pick a name and join in.' : 'Local preview. Contributions stay in this browser until Firebase is connected.';
        render();
      };
      if (firebaseConfig) {
        $('connection-label').textContent = 'CONNECTING';
        const { createFirestoreStore } = await import('./typecast-firestore.js');
        store = createFirestoreStore(firebaseConfig, (actors) => { $('connection-label').textContent = 'THE SHARED MAP'; onChange(actors); }, connectionError);
      } else {
        $('connection-label').textContent = 'LOCAL PREVIEW';
        store = createLocalStore(catalog, onChange, connectionError);
      }
      $('reset-demo').hidden = store.shared;
      updateNameButton();
      renderCredits();
      $('suggest-actor').addEventListener('click', () => openProposal());
      $('proposal-form').addEventListener('submit', submitProposal);
      ['personality', 'ability'].forEach((id) => $(id).addEventListener('input', syncOutputs));
      $('actor-search').addEventListener('input', renderMap);
      document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => { filter = button.dataset.filter; updateFilters(); renderMap(); }));
      ['map', 'list'].forEach((mode) => $(`${mode}-view`).addEventListener('click', () => {
        view = mode;
        $('map-view').setAttribute('aria-pressed', String(mode === 'map'));
        $('list-view').setAttribute('aria-pressed', String(mode === 'list'));
        renderMap();
      }));
      document.addEventListener('click', (event) => {
        const actor = event.target.closest('[data-actor]');
        if (actor) selectActor(actor.dataset.actor, true);
        const vote = event.target.closest('[data-approve]');
        if (vote) approve(vote.dataset.approve);
        const close = event.target.closest('[data-close]');
        if (close) $(close.dataset.close).close();
      });
      document.addEventListener('input', (event) => { if (event.target.id === 'comment-text') event.target.setCustomValidity(''); });
      $('change-name').addEventListener('click', showName);
      $('name-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const name = $('visitor-name').value.trim().replace(/\s+/g, ' ');
        if (!name) { $('visitor-name').setCustomValidity('Enter a name to join the conversation.'); $('visitor-name').reportValidity(); return; }
        visitor = name.slice(0, 40);
        try { localStorage.setItem(NAME_KEY, visitor); } catch (_) { /* This visit still remembers the name. */ }
        updateNameButton();
        $('name-dialog').close('saved');
        renderPanel();
      });
      $('visitor-name').addEventListener('input', () => $('visitor-name').setCustomValidity(''));
      $('name-dialog').addEventListener('close', () => { resolveName?.(!!visitor); resolveName = null; });
      $('reset-demo').addEventListener('click', () => $('reset-dialog').showModal());
      $('confirm-reset').addEventListener('click', () => {
        if (store.shared) return;
        drafts.clear();
        if ($('comment-text')) $('comment-text').value = '';
        filter = 'all';
        $('actor-search').value = '';
        selectedId = 'nm0000206';
        store.reset();
        $('reset-dialog').close();
        updateFilters();
        notify('Local preview reset.');
      });
      $('photo-credits').addEventListener('click', () => $('credits-dialog').showModal());
      window.addEventListener('hashchange', () => {
        if (location.hash.startsWith('#actor=')) selectActor(location.hash.slice(7));
      });
      store.start();
    } catch (error) {
      $('connection-label').textContent = 'UNAVAILABLE';
      $('connection-copy').textContent = 'The map could not load. Please reload to try again.';
      $('actor-panel').innerHTML = '<p class="load-error">The actor map couldn’t load. Check your connection and reload this page.</p>';
      $('suggest-actor').disabled = true;
    }
  }
  init();
})();
