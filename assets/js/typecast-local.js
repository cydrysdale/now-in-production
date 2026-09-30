import { createSeedData, assembleActors } from './typecast-model.js';

// Preview data has its own key and is never uploaded into the shared database.
export function createLocalStore(catalog, onChange, onError) {
  const key = 'typecast-preview-v2';
  let data = createSeedData(catalog);
  let commentsActorId = '';
  let commentsListener = () => {};
  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(key));
      if (saved?.version === 2 && Array.isArray(saved.actors) && Array.isArray(saved.proposals) && Array.isArray(saved.comments)) data = saved;
    } catch (_) { /* Unavailable or invalid storage leaves the preview usable. */ }
  }
  function emit() {
    onChange(assembleActors(data));
    commentsListener(data.comments.filter((c) => c.actorId === commentsActorId).slice(-100));
  }
  function save() {
    let saved = true;
    try { localStorage.setItem(key, JSON.stringify(data)); } catch (_) { saved = false; }
    emit();
    return saved;
  }
  load();
  window.addEventListener('storage', (event) => { if (event.key === key) { load(); emit(); } });
  return {
    shared: false,
    start: emit,
    watchComments(actorId, callback) {
      commentsActorId = actorId;
      commentsListener = callback;
      callback(data.comments.filter((c) => c.actorId === actorId).slice(-100));
    },
    async propose(input) {
      load();
      let actor = data.actors.find((a) => a.id === input.actorId);
      const id = crypto.randomUUID();
      if (input.isNew && actor) throw new Error('This actor is already on the map. Select their point to suggest a move.');
      if (!actor) {
        if (!input.isNew) throw new Error('This actor is no longer on the map. Reload and try again.');
        actor = { id: input.actorId, imdb: input.actorId, name: input.name, initialProposalId: id, acceptedId: '', version: 0, createdAt: Date.now() };
        data.actors.push(actor);
      }
      data.proposals.push({ id, actorId: actor.id, x: input.x, y: input.y, reason: input.reason, author: input.author, baseVersion: actor.version, approvals: 0, status: 'pending', starter: false, createdAt: Date.now() });
      const saved = save();
      return { actorId: actor.id, saved };
    },
    async approve(actorId, proposalId) {
      load();
      const actor = data.actors.find((a) => a.id === actorId);
      const proposal = data.proposals.find((p) => p.id === proposalId);
      if (!actor || !proposal || proposal.status !== 'pending' || proposal.baseVersion !== actor.version) throw new Error('That proposal has already been resolved.');
      proposal.approvals += 1;
      if (proposal.approvals === 2) {
        proposal.status = 'approved';
        actor.acceptedId = proposal.id;
        actor.version += 1;
      }
      return { accepted: proposal.approvals === 2, saved: save() };
    },
    async comment(actorId, text, author) {
      load();
      if (!data.actors.some((a) => a.id === actorId)) throw new Error('This actor is no longer on the map.');
      data.comments.push({ id: crypto.randomUUID(), actorId, text, author, time: Date.now() });
      return { saved: save() };
    },
    reset() { data = createSeedData(catalog); save(); }
  };
}
