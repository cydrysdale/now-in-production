// Shared by the browser preview, Firebase adapter, and initial-data setup script.
export const seedPositions = {
  zendaya: [14, 81, 'An understated screen presence: the personality doesn’t need to fill the whole frame.'],
  'nicolas-cage': [88, 80, 'The far end of the personality dial. The performance rating is very much up for debate.'],
  'keanu-reeves': [22, 54, 'A low-key, recognizable presence. How much does his restraint work for you?'],
  'owen-wilson': [65, 58, 'That instantly recognizable delivery brings a lot of personality along for the ride.'],
  'adam-sandler': [82, 37, 'A deliberately debatable starter placement. Which performance would move him up the map?'],
  'jeff-goldblum': [61, 88, 'An unmistakable rhythm and plenty of personality. Make the case for where the talent lands.'],
  'aubrey-plaza': [34, 74, 'Deadpan delivery, a distinct persona. Low-key doesn’t have to mean forgettable.'],
  'dwayne-johnson': [65, 18, 'A larger-than-life screen persona. Give this proposed placement two approvals to put it on the map.']
};

export function createSeedData(catalog) {
  const actors = [];
  const proposals = [];
  for (const entry of catalog) {
    const [x, y, reason] = seedPositions[entry.id];
    const isPending = entry.id === 'dwayne-johnson';
    const id = `starter-${entry.imdb}`;
    actors.push({ id: entry.imdb, name: entry.name, imdb: entry.imdb, initialProposalId: id, acceptedId: isPending ? '' : id, version: isPending ? 0 : 1, createdAt: 0 });
    proposals.push({ id, actorId: entry.imdb, x, y, reason, author: 'Starter map', baseVersion: 0, approvals: isPending ? 0 : 2, status: isPending ? 'pending' : 'approved', starter: true, createdAt: 0 });
  }
  return { version: 2, actors, proposals, comments: [] };
}

export function assembleActors(data) {
  return data.actors.map((actor) => {
    const proposals = data.proposals.filter((p) => p.actorId === actor.id).map((p) => ({ ...p, status: p.status === 'pending' && p.baseVersion < actor.version ? 'superseded' : p.status }));
    return { ...actor, accepted: proposals.find((p) => p.id === actor.acceptedId) || null, proposals, comments: [] };
  }).filter((actor) => actor.accepted || actor.proposals.some((p) => p.status === 'pending'));
}
