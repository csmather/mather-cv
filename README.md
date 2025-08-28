
# Scott Mather — Portfolio

A snappy, minimal portfolio to showcase website administration & development work. Deployed with **GitHub Pages** — no build step required.

## Quick start

1. Create a new GitHub repo (public is fine).
2. Upload this project (or push via git).
3. In **Settings → Pages**, set **Build and deployment** to “Deploy from a branch” and choose **main** / **root (`/`)**.
4. Visit your Pages URL (e.g., `https://<username>.github.io/<repo>`).

## Customize

- **Site content**: edit `/data/projects.json` (managed sites & projects).
- **Screenshots**: drop images into `/assets/screenshots/` and update the `screenshot` paths in `projects.json`.
- **About**: update `about.html` with your bio.
- **Resume**: replace `/assets/resume/Scott_Mather_Resume.pdf` and update links if needed.
- **Contact**: edit email/social links in the header/footer of `index.html` (search for `CONTACT_CONFIG` comment).

## Adding a new portfolio entry

Edit `data/projects.json` and add an object like:

```json
{
  "title": "Example Site",
  "url": "https://example.com",
  "type": "Managed Site",
  "tags": ["Administration", "Security", "SEO"],
  "blurb": "One-sentence description of what you do for this site.",
  "screenshot": "assets/screenshots/example-home.png",
  "caseStudy": "projects/example.html"
}
```

- Create the case study HTML page at the path you reference — copy one of the sample case study templates in `/projects-templates/`.
- Keep blurbs ~1–2 sentences max. Use tags to show the work scope.

## Local preview

Just open `index.html` in a browser. No server needed. The site fetches `data/projects.json` via `fetch()`. If your browser blocks local file fetches, run a tiny static server:

- Python 3: `python -m http.server 8000` → open `http://localhost:8000`

## Notes

- No frameworks. Pure HTML/CSS/JS for speed and easy maintenance.
- Accessible by default: semantic HTML, alt text, accessible color contrast, focus styles.
- Dark-mode friendly via `prefers-color-scheme`.

---

© 2025 Scott Mather. MIT License.
