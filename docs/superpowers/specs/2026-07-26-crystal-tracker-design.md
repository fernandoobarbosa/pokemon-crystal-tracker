# Pokémon Crystal Legacy: Timeless — Progress Tracker Site

## Purpose

A personal site to log Fernando's playthrough of *Pokémon Crystal Legacy: Timeless Version* on real Game Boy hardware: gym badges earned, trainer card snapshots per badge, current team, and notable events (evolutions, important catches) that happen between gyms. Dual purpose: a quick personal log to update after each play session, and a page presentable enough to share with friends.

## Tech Stack

- **Astro** (static site generator, no client-side UI framework needed).
- Deployed on **Vercel**, connected to a Git repository. Push to the repo's main branch triggers an automatic build + deploy — no manual deploy steps.
- Content is authored as Markdown files with frontmatter (Astro content collections) plus a couple of small JSON files — no database, no CMS, no admin UI. Updating the site is a matter of adding/editing files and committing.

## Content Model

Three content sources under `src/content/`:

### `badges/` (collection, one file per gym badge earned)

One Markdown file per conquered gym, e.g. `01-falkner.md`. Frontmatter:

- `gym` — gym/city name (e.g. "Violet City")
- `leader` — gym leader name (e.g. "Falkner")
- `trainer_card` — filename of the trainer-card PNG generated for that moment (e.g. via pokecharms.com), stored under `public/trainer-cards/`
- Body (optional): free-text notes about the fight

Badges are ordered by file prefix (`01-`, `02-`, ...) and rendered as a grid; each badge is clickable to view its trainer card and notes. The trainer card is **only** ever shown attached to a badge — there is no separate "general" trainer card.

### `timeline/` (collection, one file per notable event between gyms)

One Markdown file per event — a Pokémon evolution or a notable capture. Frontmatter:

- `pokemon` — species name of the Pokémon involved (must match the ROM hack's internal Pokémon folder name, e.g. `totodile`, `croconaw`)
- `evolved_from` — species name, present only for evolution events (omitted for captures)
- `location` — where it happened (e.g. "Route 32")
- `after_badge` — which badge slug this event falls after, used to group the timeline into "between X and Y" sections

No day counter or in-game date is tracked (the "Timeless" fork removes automatic day tracking, so an in-game day count wouldn't be meaningful). No real-world date field either — location is the only context shown per event.

Sprites are **not** manually attached. Given a species name, the site resolves both the front sprite and, for evolutions, the "before" sprite automatically from the ROM hack's own GitHub repository (`gfx/pokemon/<species>/front.png` on `github.com/erick-tmr/Pokemon_Crystal_Legacy_Timeless`), referenced via `raw.githubusercontent.com` URLs. Evolution events render as "before → after"; capture events render just the caught Pokémon's sprite.

### `team.json` (single file, not a collection)

The **current** team only — no history. An array of entries: species name, nickname (optional), level. Sprites resolved the same way as above, by species name.

## Pages

- **Home (`index.astro`)** — journey title, nav, the trainer card from the most recently earned badge, badge progress (N/8 filled slots), and the current team.
- **Badges (`badges.astro`)** — grid of all badges; earned ones show leader/gym name, unearned ones render as empty/dashed placeholder slots. Clicking an earned badge shows its trainer card and notes.
- **Timeline (`timeline.astro`)** — all events, grouped into sections by the stretch of the journey they happened in ("between Falkner and Bugsy", etc.), each event showing its sprite(s) and location.

## Visual Design

Retro Game Boy aesthetic, but recolored to evoke *Pokémon Crystal* rather than the classic 4-shade green GBC screen: deep navy/blue backgrounds, silver/steel-blue borders, cyan accents. Monospace/pixel-style font, blocky square borders (not rounded), consistent with in-game dialog-box framing.

Finish is **sober/flat**, not glowy: solid thin borders, flat fills, no box-shadow glow, no radial gradients on badge icons or text-shadow glow on headings — this was explicitly requested after an initial pass that used glow/gradient effects. Badge slots use flat solid color when earned and a dashed empty border when not yet earned.

Two subtle nods to the ROM hack's own site (which features Suicune and Celebi prominently): a small (~22px) Suicune sprite next to the site title in the header, and a low-opacity (~35%) Celebi sprite watermark tucked in a corner of the timeline's "current stretch" block. Both pulled from the same GitHub sprite source as everything else (`gfx/pokemon/suicune/front.png`, `gfx/pokemon/celebi/front.png`). Kept intentionally minimal — an earlier pass with a large Suicune hero banner and a full content block for Celebi was rejected as "too much presence."

## Out of Scope

- No backend, no database, no login/auth, no admin form UI.
- No historical team roster (past teams aren't tracked, only current).
- No in-game date/day tracking on timeline events.
- No trainer card outside the badge-earned context.
