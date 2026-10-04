# ZONG · 1781 — Website

Public site for the ZONG 1781 film project. Next.js 16 + Tailwind v4 + TypeScript. English only (for now).

Lives at `~/.openclaw/workspace/projects/zong-1781/site/` alongside the research + production folders.

## Run locally

```bash
cd ~/.openclaw/workspace/projects/zong-1781/site
npm install
npm run dev
# http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to its own GitHub repo (recommended name: `zong-1781` or `zong1781-site`).
2. In Vercel, "Add New → Project," import the repo. Framework preset auto-detects as Next.js.
3. No environment variables are required for the current site. `NEXT_PUBLIC_SITE_URL` can be set to `https://zong1781.com` once DNS is pointed.
4. In the Vercel project → Settings → Domains, add `zong1781.com` and `www.zong1781.com`.
5. In Namecheap, set the nameservers to Vercel's, or add the two records Vercel instructs (A `76.76.21.21` for apex, CNAME `cname.vercel-dns.com` for www).
6. Wait a few minutes for DNS to propagate.

## What this site is

- Hero + three-perspective overview + production status.
- About page with the dramatization statement.
- Sources page citing the primary and secondary record.
- Short production journal.

What it is **not** yet: no trailer, no stills, no $1 purchase flow. Those arrive at Phase E/H in the project roadmap.
