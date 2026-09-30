// Owner-only setup. Uses the Firebase CLI's existing login; credentials never enter site files.
// Usage: node tools/typecast/seed.mjs PROJECT_ID OWNER_EMAIL
import { createRequire } from 'node:module';
import { readFile } from 'node:fs/promises';
import { createSeedData } from '../../assets/js/typecast-model.js';

const require = createRequire(import.meta.url);
const { command } = require('firebase-tools/lib/commands/apps-list.js');
const { Client } = require('firebase-tools/lib/apiv2.js');
const [project, account] = process.argv.slice(2);
if (!project || !/^[a-z][a-z0-9-]{4,28}[a-z0-9]$/.test(project) || !account?.includes('@')) {
  throw new Error('Specify the Firebase project ID and the signed-in owner email.');
}
const options = { project, account, nonInteractive: true };
await command.runner()('WEB', options);
if (options.user?.email !== account) throw new Error('The signed-in account does not match the requested owner.');

const api = new Client({ urlPrefix: 'https://firestore.googleapis.com', apiVersion: 'v1' });
const path = `projects/${project}/databases/(default)/documents`;
const catalog = JSON.parse(await readFile(new URL('../../assets/js/typecast-actors.json', import.meta.url), 'utf8'));
const seed = createSeedData(catalog);
function fields(data) {
  return Object.fromEntries(Object.entries(data).filter(([key]) => key !== 'id').map(([key, value]) => [key,
    key === 'createdAt' ? { timestampValue: new Date().toISOString() }
      : typeof value === 'boolean' ? { booleanValue: value }
        : typeof value === 'number' ? { integerValue: String(value) }
          : { stringValue: value }
  ]));
}
for (const actor of seed.actors) {
  const existing = await api.get(`${path}/typecastActors/${actor.id}`, { resolveOnHTTPError: true });
  if (existing.status === 200) { console.log(`Keeping existing actor: ${actor.name}`); continue; }
  if (existing.status !== 404) throw new Error(`Could not check ${actor.name}: HTTP ${existing.status}`);
  const proposal = seed.proposals.find((entry) => entry.id === actor.initialProposalId);
  await api.post(`${path}:commit`, { writes: [
    { update: { name: `${path}/typecastActors/${actor.id}`, fields: fields(actor) }, currentDocument: { exists: false } },
    { update: { name: `${path}/typecastProposals/${proposal.id}`, fields: fields(proposal) }, currentDocument: { exists: false } }
  ] });
  console.log(`Added starter placement: ${actor.name}`);
}
