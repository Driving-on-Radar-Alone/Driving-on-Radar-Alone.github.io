# Driving on Radar Alone — project page

Anonymous supplementary page for the "Driving on Radar Alone" submission. No author name, no
affiliation, no lab name appears anywhere in this folder.

The sibling page for the other paper lives at `../../RCScoring/web/`. The two
share `css/style.css` and `js/app.js` verbatim; this page sets
`<html data-paper="radarad">`, which swaps the accent from amber to cyan so the
two pages are not mistaken for one another.

```
web/
  index.html            structure only
  css/style.css         shared with RCScoring
  js/app.js             shared with RCScoring — builds the table and the grid
  data/recordings.js    <- THE ONLY FILE YOU NORMALLY EDIT
  posters/*.jpg         22 poster frames
  videos/*.mp4          22 quad-view clips, 720p, 120 MB total
  .nojekyll
```

## Preview it locally

```bash
cd web && python3 -m http.server 8000   # then open http://localhost:8000
```

## Add the scenarios

`data/recordings.js` starts with an empty `SCENARIOS` list, so the **Scenarios**
section is hidden and all 22 clips are listed without filters. Fill the list in
and the table, the filter chips and the per-scenario clip counts appear on their
own:

```js
const SCENARIOS = [
  { code: "R1", group: "Scenarios",
    title: "…", detail: "…", speeds: "15 / 30 / 50" },
];
```

Then tag each clip in the `RECORDINGS` table below it:

```js
{ id: "MAN_20260911_112010", clock: "11:20:10", seconds: 60,
  scenario: "R1", run: "", speed: 30, side: "left",
  note: "", hidden: false },
```

| field | what to put |
|---|---|
| `scenario` | a `code` from `SCENARIOS`, or `""` while undecided |
| `run` | only if the campaign has paired runs; otherwise `""` |
| `speed` | target speed in km/h, as a number |
| `side` | `"left"` / `"right"` / `""` |
| `note` | one line shown under the clip — failure reasons go here |
| `hidden` | `true` removes the clip from the page |

Untagged clips stay visible under **Unassigned**, so nothing goes missing.

## Fill in before you publish

Three placeholders are marked with `TODO` comments in `index.html`:

- the one-line description under the title,
- the paragraph under **What this page holds** — replace with the abstract,
- the BibTeX block.

`<meta name="robots" content="noindex">` keeps the page out of search results.
Remove it after the paper is accepted and de-anonymised.

## Publish on GitHub Pages

Use an account that is not tied to your name or the lab — the account name ends
up in the URL, and this page and the RCScoring one should not sit under the same
account if you would rather reviewers not connect the two submissions.

```bash
cd web
git init -b main
git add -A
git commit -m "Project page"
git remote add origin https://github.com/<anon-account>/<repo>.git
git push -u origin main
```

Then **Settings → Pages → Source: Deploy from a branch → main / (root)**. All
paths here are relative, so a user site (`<account>.github.io`) and a project
repo (`<account>.github.io/<repo>/`) both work unchanged.

## Re-encoding the clips

The pipeline scripts live one level up, in `../`:

```bash
cd ..
./make_quad.sh                       # Video/ -> Video_quad/   (2x2, 1080p)
./make_web_assets.sh                 # Video_quad/ -> web/videos + web/posters
CRF=25 FORCE=1 ./make_web_assets.sh  # better quality, bigger files
```

Both scripts read `SRC` and `WEB`/`OUT` from the environment, so the same two
scripts serve the RCScoring page once its footage exists:

```bash
SRC=/path/to/rcscoring/Video        OUT=/path/to/rcscoring/Video_quad ./make_quad.sh
SRC=/path/to/rcscoring/Video_quad   WEB=../../RCScoring/web           ./make_web_assets.sh
```

## Anonymity checklist

- [ ] No author, affiliation or lab name in any file — including the commit
      author (`git config user.name` / `user.email` inside this repo)
- [ ] The GitHub account name does not identify you
- [ ] The clips show two people's faces in the SR cabin view. You chose to keep
      them; it is the one thing on the page that could identify the authors to a
      reviewer who knows them.
- [ ] `noindex` stays until the paper is de-anonymised
