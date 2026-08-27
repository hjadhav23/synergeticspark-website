# SynergeticSpark Technologies — Website

Monorepo containing:
- `frontend/` — React + TypeScript + Vite site, deployed to **GitHub Pages**
- `backend/` — Node.js + Express API for the contact form, deployed to **Render**

## Live Deployment

- **Frontend:** auto-deploys via `.github/workflows/deploy.yml` on every push to `main`
- **Backend:** deploy manually once on [Render](https://render.com) using `backend/render.yaml`, then it auto-redeploys on push too

See the setup walkthrough in the project chat / your notes for exact one-time steps:
1. Push this repo to GitHub
2. Enable GitHub Pages (Settings → Pages → Source: GitHub Actions)
3. Deploy `backend/` to Render, set environment variables there
4. Set the `VITE_API_URL` repository variable in GitHub to your Render backend URL
5. Push to `main` — the site builds and deploys automatically

## SEO

- `frontend/public/robots.txt` and `frontend/public/sitemap.xml` are included —
  update the placeholder `<your-github-username>` in both files with your actual
  GitHub username before deploying.
- After going live, submit the site in
  [Google Search Console](https://search.google.com/search-console) and submit
  `sitemap.xml` there.

## Local Development

```bash
# backend
cd backend
cp .env.example .env   # fill in Gmail App Password etc.
npm install
npm run dev

# frontend (separate terminal)
cd frontend
cp .env.example .env
npm install
npm run dev
```
