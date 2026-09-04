---
title: "OrthoPaedia"
order: 3
external_url: "https://orthopaedia.com"
thumb: "assets/screenshots/orthopaedia.png"
screenshot: "assets/screenshots/orthopaedia.png"
tags: ["WordPress","Content Migration","WP-CLI","PHP"]
summary: "Peer-reviewed online orthopedic textbook. Its physician editors couldn't change a page without going through a page-builder plugin, so I wrote a tool that moved all 266 pages to WordPress's native editor, and a second one that checked nothing got lost."
---

A peer-reviewed orthopedic textbook, about 266 pages, all built in the Elementor page builder. The physician editors couldn't change anything without working through the builder, and the builder was in the way.

## What I did
- Wrote a WP-CLI tool that pulls each page's real content out of Elementor's data, writes it back as native WordPress blocks, and detaches the builder. It backs up every page first, has a dry-run mode, and reads each page back to confirm the write matched.
- Wrote a second script that compares every page before and after migration: 265 passed, 0 warnings.
- Converted 255 pages with zero failures.
- Rebuilt the homepage as a native page, swapping icon fonts for inline SVG, and unified figure and caption styling across three generations of content so new images match automatically.
- Deployed from staging to live with Elementor fully off sitewide. Also freed 5.6 GB of orphaned backup archives that had the hosting account at 99% capacity.

## Result
The editors write directly in WordPress now. The migration tool is listed under Ops & Tooling.
