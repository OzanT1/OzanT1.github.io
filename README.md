# Ozan Utku Yılmaz — Portfolio

A personal portfolio about curiosity, building software, and solving unfamiliar problems.

Built with React, TypeScript, Vite, and CSS. Deployed to [ozant1.github.io](https://ozant1.github.io) by the existing GitHub Actions workflow when changes reach main.

## Local development

- Install dependencies: `npm ci`
- Start the site: `npm run dev`
- Production build: `npm run build`
- Type check: `npx tsc --noEmit -p tsconfig.app.json`

## Updating content

All 19 projects are in one collection in `src/data/projects.ts`. Add or edit an entry there; the navigation count and project numbering update automatically. There are no category tabs or hidden projects.

Experience is in `src/components/AboutSection.tsx`. Styles are in `src/index.css`. Project descriptions and contribution notes are documented in [content sources](docs/content-sources.md).

Fonts and project images are served locally. No GitHub API call is needed when someone visits the site.
