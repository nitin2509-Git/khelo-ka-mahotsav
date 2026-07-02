# Khelo OS Sprint 1

Sprint 1 ships a lightweight tournament command center for grassroots sports organizers. The MVP is intentionally static so it can be opened locally, hosted on any static site platform, and iterated quickly by operations teams.

## What is included

- A responsive landing and command-center page in `index.html`.
- Sprint 1 operating modules for team registration, fixture building, venue readiness, and ops alerts.
- Seed data and dashboard rendering logic in `src/app.js`.
- Visual system and responsive layout styles in `src/styles.css`.
- Node test coverage for dashboard metric calculations and status tone classification.

## Run locally

Open `index.html` in a browser or serve the repository with any static file server.

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Checks

```bash
npm test
npm run check
```
