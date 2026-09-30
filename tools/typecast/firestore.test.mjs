import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { initializeTestEnvironment, assertFails, assertSucceeds } from '@firebase/rules-unit-testing';
import { doc, getDoc, setDoc, updateDoc, deleteDoc, deleteField, writeBatch, runTransaction, serverTimestamp } from 'firebase/firestore';

const projectId = 'demo-typecast';
const environment = await initializeTestEnvironment({ projectId, firestore: { host: '127.0.0.1', port: 8080, rules: await readFile(new URL('../../firestore.rules', import.meta.url), 'utf8') } });
const db = environment.unauthenticatedContext().firestore();
const actorId = 'nm99999991';
const actor = doc(db, 'typecastActors', actorId);
const proposal = (id, version = 0) => ({ actorId, x: 65, y: 70, reason: 'A memorable screen presence.', author: 'Chris', baseVersion: version, approvals: 0, status: 'pending', starter: false, createdAt: serverTimestamp() });
const proposalRef = (id) => doc(db, 'typecastProposals', id);

async function vote(id) {
  return runTransaction(db, async (transaction) => {
    const current = await transaction.get(actor);
    const position = await transaction.get(proposalRef(id));
    const p = position.data();
    if (p.status !== 'pending' || p.baseVersion !== current.data().version) throw new Error('Resolved proposal');
    const count = p.approvals + 1;
    transaction.update(proposalRef(id), { approvals: count, status: count === 2 ? 'approved' : 'pending' });
    if (count === 2) transaction.update(actor, { acceptedId: id, version: current.data().version + 1 });
  });
}

try {
  await environment.clearFirestore();
  await assertFails(setDoc(actor, { imdb: actorId, name: 'Test Actor', initialProposalId: 'first', acceptedId: '', version: 0, createdAt: serverTimestamp() }));
  const first = writeBatch(db);
  first.set(actor, { imdb: actorId, name: 'Test Actor', initialProposalId: 'first', acceptedId: '', version: 0, createdAt: serverTimestamp() });
  first.set(proposalRef('first'), proposal('first'));
  await assertSucceeds(first.commit());
  await assertSucceeds(getDoc(actor));
  await assertFails(setDoc(proposalRef('invalid-coordinate'), { ...proposal('invalid-coordinate'), x: 101 }));
  await assertFails(setDoc(proposalRef('invalid-text'), { ...proposal('invalid-text'), reason: 'a'.repeat(601) }));
  await assertFails(setDoc(proposalRef('preapproved'), { ...proposal('preapproved'), approvals: 2, status: 'approved' }));
  await assertFails(updateDoc(proposalRef('first'), { x: 12 }));
  await assertFails(updateDoc(actor, { name: 'Replacement name' }));
  await assertFails(updateDoc(actor, { acceptedId: 'first', version: 1 }));
  await assertFails(deleteDoc(actor));
  await assertSucceeds(vote('first'));
  assert.equal((await getDoc(actor)).data().acceptedId, '');
  await assertFails(updateDoc(proposalRef('first'), { approvals: 2, status: 'approved' }));
  await assertSucceeds(vote('first'));
  assert.equal((await getDoc(actor)).data().acceptedId, 'first');
  assert.equal((await getDoc(actor)).data().version, 1);
  await assertFails(updateDoc(proposalRef('first'), { approvals: 3 }));
  console.log('PASS: public proposals, field validation, content immutability, and atomic two-approval acceptance.');

  const photo = { url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Actor.jpg/330px-Actor.jpg', source: 'https://commons.wikimedia.org/wiki/File:Actor.jpg', credit: 'A photographer', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', entityId: 'Q123' };
  async function actorWithPhoto(id, image) {
    const batch = writeBatch(db);
    batch.set(doc(db, 'typecastActors', id), { imdb: id, name: 'Photo Actor', initialProposalId: id, acceptedId: '', version: 0, createdAt: serverTimestamp(), photo: image });
    batch.set(proposalRef(id), { ...proposal(id), actorId: id });
    return batch.commit();
  }
  await assertSucceeds(actorWithPhoto('nm88888000', photo));
  await assertFails(updateDoc(doc(db, 'typecastActors', 'nm88888000'), { photo: { ...photo, credit: 'Someone else' } }));
  await assertFails(updateDoc(doc(db, 'typecastActors', 'nm88888000'), { photo: deleteField() }));
  const invalidPhotos = [null, {}, { ...photo, url: 'https://evil.example/image.jpg' }, { ...photo, url: 'https://upload.wikimedia.org.evil.example/wikipedia/commons/image.jpg' }, { ...photo, url: 'http://upload.wikimedia.org/wikipedia/commons/image.jpg' }, { ...photo, url: photo.url + 'a'.repeat(2048) }, { ...photo, credit: '' }, { ...photo, credit: 'a'.repeat(501) }, { ...photo, licenseUrl: 'javascript:alert(1)' }, { ...photo, source: 'https://evil.example/credits' }, { ...photo, entityId: 'Not an entity' }, { ...photo, extra: true }];
  for (const [index, image] of invalidPhotos.entries()) await assertFails(actorWithPhoto(`nm88888${String(index + 1).padStart(3, '0')}`, image));
  const { licenseUrl, ...missingLicense } = photo;
  await assertFails(actorWithPhoto('nm88888999', missingLicense));
  console.log('PASS: optional photos require bounded Commons URLs and complete credits; photos cannot be replaced or removed by visitors.');

  await assertSucceeds(setDoc(proposalRef('move-a'), { ...proposal('move-a', 1), x: 25 }));
  await assertSucceeds(setDoc(proposalRef('move-b'), { ...proposal('move-b', 1), x: 90 }));
  await assertSucceeds(vote('move-a'));
  await assertSucceeds(vote('move-b'));
  const results = await Promise.allSettled([vote('move-a'), vote('move-b')]);
  assert.equal(results.filter((result) => result.status === 'fulfilled').length, 1);
  assert.equal((await getDoc(actor)).data().version, 2);
  assert.ok(['move-a', 'move-b'].includes((await getDoc(actor)).data().acceptedId));
  await assertFails(setDoc(proposalRef('stale'), proposal('stale', 1)));
  console.log('PASS: competing approvals cannot overwrite each other or revive an obsolete proposal.');

  const comment = doc(db, 'typecastComments', 'test-comment');
  await assertSucceeds(setDoc(comment, { actorId, author: 'A friend', text: 'A performance worth discussing.', createdAt: serverTimestamp() }));
  await assertFails(updateDoc(comment, { text: 'Rewritten by another visitor' }));
  await assertFails(deleteDoc(comment));
  await assertFails(setDoc(doc(db, 'typecastComments', 'long'), { actorId, author: 'A friend', text: 'a'.repeat(1001), createdAt: serverTimestamp() }));
  await assertFails(setDoc(doc(db, 'typecastComments', 'missing-actor'), { actorId: 'nm11111111', author: 'A friend', text: 'Hello', createdAt: serverTimestamp() }));
  await assertFails(setDoc(doc(db, 'unrelated', 'document'), { anything: true }));
  console.log('PASS: comments are append-only, bounded, attached to an actor, and unrelated collections are closed.');
} finally {
  await environment.cleanup();
}
