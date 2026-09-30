// Match an IMDb person ID through Wikidata, then fetch a Commons thumbnail and credit.
// Lookups happen only while adding an actor; saved photos require no repeat API lookup.
const cache = new Map();
const licensePattern = /^https:\/\/creativecommons\.org\/(?:licenses\/by(?:-sa)?\/(?:1\.0|2\.0|2\.5|3\.0|4\.0)|publicdomain\/(?:zero|mark)\/1\.0)\/$/;

export function isActorPhoto(photo) {
  return photo && typeof photo === 'object'
    && typeof photo.url === 'string' && photo.url.length <= 2048 && /^https:\/\/(?:upload|thumb)\.wikimedia\.org\/wikipedia\/commons\/.+/.test(photo.url)
    && typeof photo.source === 'string' && photo.source.length <= 1200 && /^https:\/\/commons\.wikimedia\.org\/wiki\/File:.+/.test(photo.source)
    && typeof photo.credit === 'string' && photo.credit.length > 0 && photo.credit.length <= 500
    && typeof photo.license === 'string' && photo.license.length > 0 && photo.license.length <= 80
    && typeof photo.licenseUrl === 'string' && licensePattern.test(photo.licenseUrl)
    && typeof photo.entityId === 'string' && /^Q[0-9]{1,20}$/.test(photo.entityId);
}

function plainText(html = '') {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.textContent.replace(/\s+/g, ' ').trim();
}

async function getJSON(url, signal) {
  const response = await fetch(url, { signal, credentials: 'omit', headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error('Photo service unavailable.');
  const data = await response.json();
  if (data.error) throw new Error('Photo service unavailable.');
  return data;
}

export async function lookupActorPhoto(imdb, { signal, refresh = false } = {}) {
  if (!/^nm[0-9]{5,12}$/.test(imdb)) return null;
  if (refresh) cache.delete(imdb);
  if (cache.has(imdb)) return cache.get(imdb);
  const query = new URL('https://query.wikidata.org/sparql');
  query.search = new URLSearchParams({ format: 'json', query: `SELECT ?actor ?image ?name WHERE {
    ?actor wdt:P345 "${imdb}"; wdt:P18 ?image.
    OPTIONAL { ?actor rdfs:label ?name. FILTER(LANG(?name) = "en") }
  } LIMIT 1` });
  const match = (await getJSON(query, signal)).results?.bindings?.[0];
  if (!match) { cache.set(imdb, null); return null; }
  const entityId = match.actor?.value?.match(/^https?:\/\/www\.wikidata\.org\/entity\/(Q[0-9]+)$/)?.[1];
  const filePath = match.image?.value?.match(/^https?:\/\/commons\.wikimedia\.org\/wiki\/Special:FilePath\/(.+)$/)?.[1];
  if (!entityId || !filePath) return null;
  const filename = decodeURIComponent(filePath);
  const commons = new URL('https://commons.wikimedia.org/w/api.php');
  commons.search = new URLSearchParams({ action: 'query', format: 'json', formatversion: '2', origin: '*',
    prop: 'imageinfo', titles: `File:${filename}`, iiprop: 'url|extmetadata|mime', iiurlwidth: '320',
    iiextmetadatafilter: 'Artist|Attribution|LicenseShortName|LicenseUrl' });
  const info = (await getJSON(commons, signal)).query?.pages?.[0]?.imageinfo?.[0];
  if (!info || !['image/jpeg', 'image/png', 'image/webp'].includes(info.mime)) return null;
  const metadata = info.extmetadata || {};
  const licenseUrl = (metadata.LicenseUrl?.value || '').replace(/^http:/, 'https:').replace('://www.creativecommons.org/', '://creativecommons.org/').replace(/\/?$/, '/');
  const photo = {
    url: info.thumburl,
    source: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename.replace(/ /g, '_'))}`,
    credit: plainText(metadata.Attribution?.value || metadata.Artist?.value),
    license: plainText(metadata.LicenseShortName?.value), licenseUrl, entityId
  };
  const result = isActorPhoto(photo) ? { name: match.name?.value || '', photo } : null;
  cache.set(imdb, result);
  return result;
}
