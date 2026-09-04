---
title: "Foot Pain Identifier"
order: 4
external_url: "https://footpainidentifier.com"
thumb: "assets/screenshots/footpainidentifier.png"
screenshot: "assets/screenshots/footpainidentifier.png"
tags: ["Laravel","PHP","Cloudflare","DigitalOcean","Security"]
summary: "Symptom-checker survey app holding 10,000+ patient responses. It crashed regularly on a tiny server with no firewall. I found the cause, fixed it, locked the server down, and stopped a contact-form spam flood without making the form harder for patients to use."
---

## [See Case Study](https://csmather.com/case-studies/site-ops/)

This is a Laravel app that walks patients through a foot-pain questionnaire, holding 10,000+ responses. When I took it over it crashed regularly on a 1 GB server with no firewall, and the previous vendor's passwords and cloud keys were scattered through it.

## What I did
- Found the cause of the crashes (MySQL running out of memory on a too-small server) and stabilized it for good.
- Rotated dangerously weak database passwords, fixed permissions that let anything on the server write to the app, turned on a firewall, and purged leftover cloud keys, passwords embedded in git, and site email still routed to the old vendor.
- Set up fail2ban with a custom rule that bans bots the first time they probe for secrets like `/.env`. Tested it against 870+ scanner hits from a single day's logs, then used it to block whole botnet ranges.
- Stopped a contact-form spam flood with layered defenses (honeypot, timing check, Cloudflare Turnstile, rate limiting) without adding friction for real visitors.
- Fixed a backup job that had been running 60 times a night and filling the disk with about 1 GB of stale dumps. Now it runs once a day, keeps 30 days, and copies off-server.

## Result
An app on an end-of-life framework that used to fall over now runs quietly on a $6/month server, monitored and backed up.
