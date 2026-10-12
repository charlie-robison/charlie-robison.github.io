# Charlie Robison Portfolio

This repository now hosts a Next.js portfolio application that statically exports for GitHub Pages.

## Stack

- Next.js (App Router)
- React
- Plain CSS (custom theme + animations)

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static output is generated in the `out/` directory.

## GitHub Pages deployment

Deployment is configured through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).  
Set your repository Pages source to **GitHub Actions** and push to `main` (or `master`) to deploy.

