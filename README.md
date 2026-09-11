# Jyske Invest Hedge – GitHub Pages package

Static six-page website in the approved navy-blue premium financial design.

## Deploy to GitHub Pages

1. Create a new GitHub repository, for example `jyskeinvesthedge`.
2. Upload **the contents of this folder** to the root of the repository.
3. In GitHub: Settings → Pages.
4. Under Build and deployment choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish the site.

## Custom domain

A `CNAME` file for `jyskeinvesthedge.net` is included.
Before enabling the domain, update DNS at your domain provider to the GitHub Pages records shown by GitHub.
If you prefer `www.jyskeinvesthedge.net` as the canonical domain, replace the contents of `CNAME` with:
`www.jyskeinvesthedge.net`

Do not keep two different CNAME values in the file.

## Files

- index.html
- historien.html
- medie-omtale.html
- forfatterne.html
- bestil-bogen.html
- kontakt.html
- 404.html
- styles.css
- script.js
- assets/
- CNAME
- .nojekyll
- robots.txt
- sitemap.xml

## Notes

The site is entirely static: no database, server-side code, package manager, build process or external JavaScript library is required.
The contact page uses `mailto:` links.
Historical media links are retained where useful; some publisher URLs may have moved, expired, or become paywalled.
`assets/design-reference-navy.png` is only a visual design reference and is not loaded by the live site.
