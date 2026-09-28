# Marketing Toolbox

A responsive, browser-first workspace for 17 everyday marketing tools. The UI is plain JavaScript modules with Vite for development/builds. Tool URLs use a small pathname router (`/tools/<tool-id>`); Cloudflare Pages serves `index.html` for those routes using `_redirects`, while GitHub Pages uses a generated `404.html` fallback. This keeps the production bundle small and avoids requiring a client router package.

## Local development

Requirements: Node.js 20 or newer.

```sh
npm install
npm run dev
```

Open the local URL Vite prints. Build and run checks with:

```sh
npm test
npm run build
npm run preview
```

Most inputs are processed in the browser. Favorites, recent tools, saved UTM presets, templates, hashtag sets, and saved captions use `localStorage`; use Settings to export or import a JSON backup. Uploaded social preview images are read as local object URLs and are not uploaded. The QR generator uses the pinned `qrcode` package and runs client-side.

## GitHub Pages deployment

The `Deploy GitHub Pages` workflow switches Pages to workflow publishing, builds the site for this repository's `/tools/` project path, and publishes the `dist/` directory. Pushes to `main` then build and deploy automatically; the generated `404.html` keeps tool URLs working on refresh. If the workflow cannot change the Pages source, set it to **GitHub Actions** under repository Settings → Pages once.

## Cloudflare Pages deployment

1. Create a Pages project using this repository or upload the built `dist/` directory.
2. Set the build command to `npm run build` and the build output directory to `dist`.
3. The included `_redirects` file enables refresh/deep links on tool routes.
4. Deploy. This version is frontend-only and does not require a D1 database, server secret, or Pages Functions.

## Tool acceptance checklist

- Writing: live word/character/sentence/paragraph/reading-time counts and target progress; case conversions with undo; configurable whitespace cleanup preview and undo; editable template-based headline ideas with copy/save.
- SEO: live title/description lengths and result preview; HTML/Markdown heading outline and skipped-level warning; case-insensitive whole-phrase counts with contexts; on-device content checklist with reasons.
- Campaign links: UTM construction preserves query/fragment and exports CSV; URL cleaner lets you select tracking parameters; local QR generation with PNG download and contrast guidance.
- Social: caption counts, hashtag sets and ordering, local saved drafts; local image preview with common aspect ratios.
- Planning: mixed amount/percentage budget allocation and CSV; CTR/CPC/conversion rate/CPL/CPA/ROAS with formulas; editable/searchable/copyable template library with JSON import/export.
- Shared: responsive navigation, tool search, favorites, recent tools, dark theme, local import/export, and privacy notes.

## Limitations

- Search length guidance is configurable and approximate; search engines can rewrite snippets.
- SEO checks analyze only text or HTML pasted by the user. They do not crawl sites, estimate rankings, or recommend an ideal keyword density.
- Social and search previews are illustrative and cannot guarantee platform acceptance or rendering.
- Local browser data does not sync between devices unless the user exports/imports a backup.
- There is no server-backed storage in this version. Local browser data does not sync between devices unless the user exports/imports a backup.

For local work, `npm run dev` is enough. The GitHub Pages workflow handles its project-site base path; regular local and Cloudflare builds use the site root.
