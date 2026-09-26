# ritikeshvali.github.io

Personal site. Vite + React, static output, deploys to GitHub Pages.
No backend, no secrets, no keys in the repo by design.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the built dist/ locally
```

## Project shape

```
src/
  pages/Home.jsx        assembles the sections
  components/           TopBar, Hero, Project, Projects, Writing, Footer, ThemeToggle
  data/
    projects.js         <- add projects here
    notes.js            <- add paper notes / posts here
    links.js            <- github / x / linkedin
  styles/global.css     design tokens + all styling
public/
  v1/                   the old 2018 site (served at /v1/)
  404.html              SPA deep-link fallback for Pages
  CNAME.example         rename to CNAME when you buy a domain
```

## Adding content

**A project:** append an object to `src/data/projects.js`. It renders automatically.

**A paper note or post:** append `{ title, url, date }` to the `notes` array in
`src/data/notes.js`. While that array is empty, the Writing section just shows
the Substack link.

**A new page (e.g. /notes):** make `src/pages/Notes.jsx`, then add a route in
`src/App.jsx`. Deep links work on Pages because of `public/404.html`.

## Deploy

One-time: in the repo, **Settings > Pages > Build and deployment > Source**,
choose **GitHub Actions**. After that, every push to `main` builds and deploys
via `.github/workflows/deploy.yml`. No manual steps.

## The old site (/v1)

Copy your old files into `public/v1/`:
`index.html`, `style2.css`, `me_eniac.jpg`. They serve verbatim at `/v1/`.

## Custom domain (later)

1. Buy the domain.
2. Rename `public/CNAME.example` to `public/CNAME`, put your domain inside
   (just the domain, e.g. `ritikesh.dev` — this is public, not a secret).
3. At your registrar, point DNS at GitHub Pages (A records to GitHub's IPs plus
   a CNAME for `www`). GitHub's Pages docs list the exact records.
4. In Settings > Pages, set the custom domain and enable HTTPS.

## Email on the domain (later)

Handled entirely at your email provider via DNS records (MX, SPF, DKIM) at the
registrar. Nothing about email touches this repo, and no keys go in the code.
If you ever add something that needs a secret (a contact form backend, say),
it lives in a serverless function's environment variables, never committed.

## Notes

- `base` in `vite.config.js` is `/` because this is a user site served at the
  domain root. If you fork this into a project repo, change it to `/repo-name/`.
- The 2 moderate `npm audit` advisories are in build-time dev tooling only.
  A static site ships no server code, so there is no runtime exposure.
