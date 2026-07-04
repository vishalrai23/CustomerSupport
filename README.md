# Silent Coordinator

Automated issue-resolution workflow UI mockup — React + Vite, deployed to GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Push to GitHub and deploy

1. Create a new **public** repo on GitHub named `silent-coordinator`
   (or any name — if different, update `base` in `vite.config.js` to match).

2. From this project folder:

```bash
git init
git add .
git commit -m "Initial commit: Silent Coordinator UI"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/silent-coordinator.git
git push -u origin main
```

3. In the GitHub repo settings: **Settings → Pages → Source → GitHub Actions**.
   The included workflow (`.github/workflows/deploy.yml`) will build and deploy
   automatically on every push to `main`.

4. Your site will be live at:
   `https://YOUR_USERNAME.github.io/silent-coordinator/`

## Notes

- If you rename the repo, `vite.config.js`'s `base` field must match exactly,
  or all assets will 404 on Pages.
- First deploy can take 1–2 minutes after the Actions workflow completes.
