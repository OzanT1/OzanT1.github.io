# Ozan Utku Yılmaz — Portfolio

A personal portfolio about curiosity, building software, and solving unfamiliar problems.

Built with React, TypeScript, Vite, and CSS. Deployed to [ozant1.github.io](https://ozant1.github.io) by the existing GitHub Actions workflow when changes reach main.

## Local development

- Install dependencies: `npm ci`
- Start the site: `npm run dev`
- Production build: `npm run build`
- Type check: `npx tsc --noEmit -p tsconfig.app.json`
- Language preference tests (Node.js 22.6+): `npm run test:language`

## Languages

The EN / TR switcher translates the page, all 19 projects, illustrations, image descriptions, accessibility labels, and document metadata. Product names, technology names, and original screenshots retain their names and content.

On the first visit, the site chooses the first supported language in the browser's ordered language preferences, falling back to English. A deliberate selection is stored as `en` or `tr` under `ozan-portfolio-language` in `localStorage` and takes priority on subsequent visits in that browser. Browser detection alone does not save a preference.

The preference stays on that device and browser; it is not sent to a server or stored in cookies. Clearing site data resets it. If browser storage is blocked, switching still works for the current visit, and the next visit follows browser detection again.

## Updating content

All 19 projects are in one collection in `src/data/projects.ts`. Each entry has English content and a required `tr` translation. Add or edit an entry there; the navigation count and project numbering update automatically. There are no category tabs or hidden projects.

Interface copy and experience in both languages are in `src/i18n/messages.ts`. Styles are in `src/index.css`. Project descriptions and contribution notes are documented in [content sources](docs/content-sources.md).

Fonts and project images are served locally. No GitHub API call is needed when someone visits the site.
