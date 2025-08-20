
# Bravener Consulting — GitHub Pages Site

This repository contains a static website for a Windows & Mac MSP featuring:
- Microsoft Intune (Windows) and Jamf Pro (Apple) services
- Managed tiers for each platform
- Hourly billing for unmanaged/project work
- Flat‑rate project option

## Deploy on GitHub Pages
**Option A: Simple (no build, no custom domain)**
1. Create a new GitHub repository.
2. Upload these files to the root of the repo (keep `.nojekyll`).
3. Go to **Settings → Pages** and choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or `master`) and `/ (root)`
4. Save. Your site will publish at `https://<your-username>.github.io/<repo>/`.

**Option B: Custom domain**
1. Set DNS for your domain to point to GitHub Pages.
2. Rename `CNAME.example` to `CNAME` and put your domain inside (e.g., `example.com`).
3. In **Settings → Pages**, set the custom domain to match.

## Notes
- `404.html` provides a friendly not-found page.
- `robots.txt` and `sitemap.xml` are included for SEO basics.
- `assets/icons/favicon.svg` is referenced in `<head>` as the site icon.
- `.nojekyll` ensures GitHub serves files as-is.

## Customize
- Update pricing in `plans.html`.
- Edit branding, copy, and contact details in the HTML files.
- Tweak styles in `assets/css/styles.css`.
