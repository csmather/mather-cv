---
title: "Foot Pain Identifier"
order: 4
external_url: "https://footpainidentifier.com"
thumb: "assets/screenshots/footpainidentifier.png"
screenshot: "assets/screenshots/footpainidentifier.png"
tags: ["Laravel","RCA","Server Ops","Security"]
summary: "Laravel diagnostic survey app. Root cause analysis, crash rescue, security hardening."
---

## [See Case Study](https://csmather.com/case-studies/site-ops/)

## My role & impact
- Rescued a regularly crashing Laravel diagnostic app serving **10,000+ patient survey responses**: root-caused MySQL dying from memory exhaustion on an undersized server and stabilized it for good.
- Overhauled security: rotated dangerously weak database credentials, fixed world-writable permissions, enabled a firewall, and purged leftover cloud keys, embedded git credentials, and personal-email routing from a previous vendor.
- Deployed fail2ban with a custom jail that bans credential-scanning bots on their first probe for secrets like `/.env` — validated against **870+ scanner hits** in a single day's logs, then used to block entire botnet subnets.
- Layered contact-form anti-spam — honeypot, timing check, Cloudflare Turnstile, and rate limiting — ending a spam flood without adding friction for real visitors.
- Fixed a misconfigured backup cron that had been running **60 times a night**, replacing ~1GB of stale dumps with a daily job, 30-day retention, and off-server copies.
