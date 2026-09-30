# The Typecast Index

A standalone static page at [`always-playing-themselves.html`](../../always-playing-themselves.html), separate from the guide registry and homepage. GitHub Pages hosts the page and photos; Cloud Firestore stores the shared map and discussion. There is no website build step.

## Connection status

The page is connected to live Firebase project [`typecast-index-cydrysdale`](https://console.firebase.google.com/project/typecast-index-cydrysdale/overview), owned by the owner's personal Google account. Its default Firestore Standard database is in `us-west1`, with rules, the comments index, and eight starter actors deployed. Billing was verified disabled with no billing account linked on September 30, 2026. Website files are ready for GitHub Pages but have not been pushed by this setup.

`assets/js/typecast-config.js` contains only the public Web app configuration. Setting its export to `null` switches the page to an explicitly labeled **local preview**. Preview contributions are never automatically uploaded.

## Preview

Run `python3 -m http.server 8000` from the repository root and open `http://localhost:8000/always-playing-themselves.html`. With the checked-in configuration, this local page uses the real shared database.

- Enter a display name on the first contribution. Only that name is remembered in browser storage; there is no visitor account, password, email, or sign-in screen.
- Two approvals accept a placement. Votes are deliberately not checked for unique people. The same browser can approve twice, including its own proposal.
- Alternative positions start at zero approvals. The accepted point stays put until another proposal passes. Accepting a proposal advances the actor's version so older competing proposals cannot later overwrite it.
- An IMDb person ID identifies each actor and prevents duplicate records for the same ID.
- Comments and placements update in other open browsers when connected to Firestore. The selected actor's latest 100 comments are shown, while older comments remain stored.
- The eight initial positions are labeled as starter opinions. New actors use initials until a credited photo is added to the local catalog.
- The reset button is available only in local preview and cannot erase the shared database.

## Firebase owner setup

Use a **personal Google account**, the free **Spark plan**, and a **Cloud Firestore Standard** database. Google may require the account owner to accept its first-use terms in the Firebase/Google Cloud console. No billing account, Cloud Functions, Firebase Hosting, Firebase Authentication, Analytics, or Cloud Storage is needed.

Development tools are isolated from the static site:

```sh
npm --prefix tools/typecast install
tools/typecast/node_modules/.bin/firebase login --interactive
```

Use `--account OWNER_EMAIL` on all provisioning commands so the CLI does not accidentally use a work account. Replace the uppercase placeholders below before running them:

For this installation, reuse the existing `typecast-index-cydrysdale` project rather than creating another one. Firebase activation and the terms step are already complete. The full sequence below is for a fresh installation.

```sh
tools/typecast/node_modules/.bin/firebase projects:create PROJECT_ID --display-name 'The Typecast Index' --account OWNER_EMAIL
tools/typecast/node_modules/.bin/firebase apps:create WEB 'The Typecast Index' --project PROJECT_ID --account OWNER_EMAIL
tools/typecast/node_modules/.bin/firebase firestore:databases:create '(default)' --location us-west1 --edition standard --project PROJECT_ID --account OWNER_EMAIL
tools/typecast/node_modules/.bin/firebase deploy --only firestore --project PROJECT_ID --account OWNER_EMAIL
tools/typecast/node_modules/.bin/firebase apps:sdkconfig WEB --project PROJECT_ID --account OWNER_EMAIL
node tools/typecast/seed.mjs PROJECT_ID OWNER_EMAIL
```

Copy only the public Web app configuration into the `firebaseConfig` export in `assets/js/typecast-config.js`. No credentials or service-account JSON belong in the site or repository. The seed script uses the CLI's signed-in owner, adds only missing starter actors, and leaves existing actors untouched. It uses the pinned Firebase CLI library for authenticated REST calls without exporting credentials.

For a fresh project, a 403 during Firebase activation can require accepting the [Firebase terms](https://console.firebase.google.com/?forceCheckTos=true) in the console. If database creation reports that the Firestore API is disabled, enable the [Cloud Firestore API](https://console.cloud.google.com/apis/library/firestore.googleapis.com) for that project before retrying. These steps do not require linking billing.

GitHub Pages is configured to publish the root of this repository's `main` branch. After the page and assets are committed and pushed there, the page URL will be `https://cydrysdale.github.io/now-in-production/always-playing-themselves.html`. The Firestore deployment above publishes database rules and indexes only; it does not publish the website. Wait for the comment query index to finish building before the final shared-browser check.

## Data and permissions

- `typecastActors`: IMDb ID, name, initial/accepted proposal IDs, version, creation time.
- `typecastProposals`: actor ID, coordinates, explanation, display name, base version, approval count, status, creation time.
- `typecastComments`: actor ID, display name, text, creation time.

Public reads and contributions are intentional for this informal project. Names are unverified labels. Rules enforce field sizes, coordinate bounds, append-only comments, immutable proposals, and one-step approval increments. The second approval and accepted-position change must happen atomically; simultaneous competing approvals cannot both win. Visitors cannot delete records or access unrelated collections. The owner can manage records in the Firebase console.

The Firestore adapter loads only Firebase App and Firestore from Google's version-pinned CDN. Photos remain local and include source/license attribution in `assets/js/typecast-actors.json` and the Photo credits dialog.

## Validation

Rules tests require Java 21 or newer and the tools above:

```sh
npm --prefix tools/typecast run test:rules
```

Tests cover public creation, invalid content rejection, prevention of direct coordinate edits/deletions, two-approval transactions, competing votes, stale proposals, bounded comments, and denied access to unrelated collections. Expected permission-denied messages appear during negative tests.

Browser checks use two independent sessions against the emulator to verify shared comments, remembered names, literal HTML display, draft preservation during updates, new actors, repeat approvals, accepted moves, and layouts at 320/375/768/1440 pixels. Existing homepage cards remain separate from this experiment.

The live Firebase smoke check passed on September 30, 2026: two independent browsers loaded all eight actors and the indexed comments query, a public comment appeared in the other browser, and the display name survived a reload. The temporary verification comment was removed using the owner account. Desktop and mobile previews below use the live database; neither layout reported page errors or horizontal overflow.

- [Desktop preview](preview-desktop.png)
- [Mobile preview](preview-mobile.png)

References: [Firestore setup](https://firebase.google.com/docs/firestore/quickstart), [Firebase CLI](https://firebase.google.com/docs/cli), [Spark plan](https://firebase.google.com/docs/projects/billing/firebase-pricing-plans).
