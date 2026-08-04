---
title: "OrthoPaedia"
order: 3
external_url: "https://orthopaedia.com"
thumb: "assets/screenshots/orthopaedia.png"
screenshot: "assets/screenshots/orthopaedia.png"
tags: ["WordPress","Content Migration","WP-CLI","PHP"]
summary: "Peer-reviewed online orthopedic textbook. Moved 266 pages between different page builder plugins with a tool I built just for the job, plus verification scripts."
---

## My role & impact
- Migrated a **~266-page** peer-reviewed medical textbook off Elementor to native Gutenberg so its physician editors could edit content directly — **255 pages converted, zero failures**.
- Built a custom WP-CLI migration tool that extracts each page's true content from Elementor's data layer, writes it back as native blocks, and detaches the builder — with per-page metadata backups, dry-run mode, and read-back integrity checks.
- Wrote a separate parity verifier comparing every page before and after migration: **265 passed, 0 warnings**.
- Rebuilt the homepage as a native page (converting icon-font dependencies to inline SVG) and unified figure/caption styling across three generations of content so newly added images inherit it automatically.
- Cut over via staging-to-live deploy with Elementor fully deactivated sitewide; also freed **5.6 GB** of orphaned backup archives that had the hosting account at 99% capacity.
