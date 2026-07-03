---
title: "OrthoEducation (Multisite)"
order: 2
external_url: "https://orthoeducation.com"
thumb: "assets/screenshots/orthoeducation.png"
screenshot: "assets/screenshots/orthoeducation.png"
tags: ["WordPress Multisite","Cleanup","Plugin Dev","Security"]
summary: "Nine-subsite patient-education network. Deep phased cleanup, security fixes, custom plugin work."
---

## My role & impact
- Led a phased cleanup of a nine-subsite WordPress multisite network: database reduced from **2.1 GB to 166 MB**, total files from **5.5 GB to 2.8 GB**, active plugins from **37 to 19** — verified between phases with an automated visual smoke test so nothing editor-facing broke.
- Dropped **~275 orphaned database tables** left behind by abandoned plugins, which had pushed the host past its database limits into write throttling.
- Closed a publicly accessible error log that was leaking an email API key; removed leftover vendor admin accounts and reassigned **3,800+ posts** to the owner.
- Wrote a custom mu-plugin providing a network-wide HTML sitemap and cross-site search covering all subsites plus the client's sister site — running in production across the network.
- Configured SMTP, security headers, malware scanning, and nightly off-server backups across all nine subsites.
- Drove a **33x increase** in Google Search impressions over a one-year period as consolidation and indexing stabilized.
