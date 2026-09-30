import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js';
import { getFirestore, collection, doc, onSnapshot, query, where, orderBy, limit, addDoc, runTransaction, serverTimestamp, connectFirestoreEmulator } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js';
import { assembleActors } from './typecast-model.js';

export function createFirestoreStore(config, onChange, onError) {
  const db = getFirestore(initializeApp(config));
  // Tests use a demo project and localhost only. A production project never uses this override.
  if (config.projectId.startsWith('demo-') && ['localhost', '127.0.0.1'].includes(location.hostname)) connectFirestoreEmulator(db, '127.0.0.1', 8080);
  const actorsRef = collection(db, 'typecastActors');
  const proposalsRef = collection(db, 'typecastProposals');
  const commentsRef = collection(db, 'typecastComments');
  const data = { actors: [], proposals: [] };
  const ready = new Set();
  let stopComments = () => {};

  function listen(ref, key) {
    onSnapshot(ref, (snapshot) => {
      if (snapshot.metadata.hasPendingWrites) return;
      data[key] = snapshot.docs.map((entry) => ({ ...entry.data(), id: entry.id }));
      ready.add(key);
      const consistent = data.actors.every((actor) => data.proposals.some((p) => p.id === (actor.acceptedId || actor.initialProposalId) && p.status === (actor.acceptedId ? 'approved' : 'pending')));
      if (ready.size === 2 && consistent) onChange(assembleActors(data));
    }, onError);
  }

  return {
    shared: true,
    start() { listen(actorsRef, 'actors'); listen(proposalsRef, 'proposals'); },
    watchComments(actorId, callback) {
      stopComments();
      callback(null);
      const latest = query(commentsRef, where('actorId', '==', actorId), orderBy('createdAt', 'desc'), limit(100));
      stopComments = onSnapshot(latest, (snapshot) => {
        if (snapshot.metadata.hasPendingWrites) return;
        callback(snapshot.docs.map((entry) => ({ ...entry.data(), id: entry.id, time: entry.data().createdAt?.toMillis() || Date.now() })).reverse());
      }, onError);
    },
    async propose(input) {
      const actorRef = doc(actorsRef, input.actorId);
      const proposalRef = doc(proposalsRef);
      await runTransaction(db, async (transaction) => {
        const existing = await transaction.get(actorRef);
        if (input.isNew && existing.exists()) throw new Error('This actor is already on the map. Select their point to suggest a move.');
        if (!input.isNew && !existing.exists()) throw new Error('This actor is no longer on the map. Reload and try again.');
        const version = existing.exists() ? existing.data().version : 0;
        if (!existing.exists()) transaction.set(actorRef, { imdb: input.actorId, name: input.name, initialProposalId: proposalRef.id, acceptedId: '', version: 0, createdAt: serverTimestamp() });
        transaction.set(proposalRef, { actorId: input.actorId, x: input.x, y: input.y, reason: input.reason, author: input.author, baseVersion: version, approvals: 0, status: 'pending', starter: false, createdAt: serverTimestamp() });
      });
      return { actorId: input.actorId, saved: true };
    },
    async approve(actorId, proposalId) {
      const actorRef = doc(actorsRef, actorId);
      const proposalRef = doc(proposalsRef, proposalId);
      const accepted = await runTransaction(db, async (transaction) => {
        const actor = await transaction.get(actorRef);
        const proposal = await transaction.get(proposalRef);
        if (!actor.exists() || !proposal.exists()) throw new Error('That proposal is no longer available.');
        const position = proposal.data();
        if (position.actorId !== actorId || position.status !== 'pending' || position.baseVersion !== actor.data().version) throw new Error('That proposal has already been resolved.');
        const approvals = position.approvals + 1;
        transaction.update(proposalRef, { approvals, status: approvals === 2 ? 'approved' : 'pending' });
        if (approvals === 2) transaction.update(actorRef, { acceptedId: proposalId, version: actor.data().version + 1 });
        return approvals === 2;
      });
      return { accepted, saved: true };
    },
    async comment(actorId, text, author) {
      await addDoc(commentsRef, { actorId, text, author, createdAt: serverTimestamp() });
      return { saved: true };
    }
  };
}
