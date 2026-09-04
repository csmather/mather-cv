---
title: "OrthoEducation"
order: 2
external_url: "https://orthoeducation.com"
thumb: "assets/screenshots/orthoeducation.png"
screenshot: "assets/screenshots/orthoeducation.png"
tags: ["WordPress Multisite","MySQL","PHP","Knowledge Base"]
summary: "Nine orthopedic patient-education sites sharing one WordPress install. The database had grown so bloated the host was throttling it. I cut it to under a tenth of its size over six weeks without the editors noticing, and wrote a search plugin that covers the whole network."
---

## [See Case Study](https://csmather.com/case-studies/site-ops/)

Nine sites running on one WordPress multisite install, cloned by the previous vendor and then neglected. When I took it over it had abandoned page builders, five different backup plugins, and a database so large the host had started throttling writes to it.

## What I did
- Ran a five-phase cleanup over six weeks. Database from 2.1 GB to 166 MB, files from 5.5 GB to 2.8 GB, active plugins from 37 to 19.
- Dropped about 275 database tables left behind by plugins nobody had used in years. Every one was checked for live references before deletion.
- Re-screenshotted 27 key pages after each phase with a script I wrote, so anything that broke would show up immediately. Nothing did.
- Closed a publicly readable error log that was leaking an email API key. Removed the vendor's admin accounts and reassigned 3,800+ posts to the owner.
- Wrote a plugin that gives the whole network one sitemap and one search box, covering all nine sites plus the client's sister site. It's still running in production.
- Set up email, security headers, malware scanning, and nightly off-server backups across all nine sites.
- Built a Pinecone knowledge base feeding an AI chat assistant, drawing on content from the entire network plus FootEducation.

## Result
Google search impressions rose 33x over the following year as the cleanup and indexing settled. The editors never noticed any of it happening.
