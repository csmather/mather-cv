---
layout: page
title: "Case Study: Rescuing a Medical Education Network"
permalink: /case-studies/site-ops/
---

## TL;DR
I took over three neglected medical education properties from a departed development vendor: a high-traffic WordPress site ([FootEducation](https://footeducation.com)), a recently migrated nine-subsite WordPress multisite network ([OrthoEducation](https://orthoeducation.com)), and a separate Laravel diagnostic survey app ([FootPainIdentifier](https://footpainidentifier.com)). Working solo over about 2 months of part-time sessions, I removed the vendor's leftover access and pirated software, cut the bloat roughly in half, ended recurring crashes, and built out security, backups, and monitoring from scratch. Nothing editor-facing broke at any point, and search performance climbed steeply on both WordPress properties.

The owner is a medical expert, not a technologist. **Every change below also had to be explained in plain language, gated on his approval when it was significant, and invisible to him when it wasn't.**

## How I work

The same method ran through all three projects:

- **Map everything first:** I give each server a living "server map" document: a full inventory of plugins, Apache config, DNS, cron jobs, user accounts, known issues, etc. Every work session updates it to reflect the *current state of the site*, and every session gets recorded in a separate log chronologically. Months later I can tell you exactly what changed, when, and why.
- **Be critical of the inherited state:** Verify what's actually running instead of what the previous team said was running. That instinct is what surfaced most of the findings below.
- **Prove it's orphaned before deleting it:** Before any plugin, table, or file was removed, I checked for live references: shortcodes in post content, widget areas, option rows, template usage. Cleanup at this scale is only safe when deletion is verifiably inconsequential.
- **Small, reversible phases:** Snapshot before each phase, verify after it. On the multisite cleanup, an automated visual smoke test re-screenshotted 27 key pages across the network after every phase so any breakage would show up immediately.

## FootEducation: security remediation and stabilization

An encyclopedic patient-education site on its own VPS, behind a CDN firewall the server had been silently bypassing.

- Found the site running a **pirated copy of a commercial page builder**, diagnosed from the code of the plugin itself: license checks patched out, a fake license re-injected on every page load, and live code fetches from a piracy domain with SSL verification disabled. Replaced it with a legitimate license and neutralized the injected code.
- Removed the former vendor entirely: SSH keys, a shared Linux account, and WordPress admin accounts, with all content reassigned. Formal access revocation was coordinated with the owner and confirmed in writing.
- Killed a **wildcard DNS record that had spam subdomains resolving against the site**, which had left 197 phantom pages in Google's index, then rebuilt the redirect architecture in clean layers (Apache for canonicalization, SEO plugin for 107 content redirects).
- Ended a pattern of recurring crashes by root-causing it: PHP memory exhaustion during plugin updates while a bot burst hit a cold cache. Retuned Apache workers and PHP memory so worst-case usage is bounded by the RAM actually on the box.
- Set up authenticated email (SPF, DKIM, DMARC), locked the origin server down to the firewall's IP ranges, and audited every remaining plugin.

**Result:** site audit errors went from 449 to 0, Google Search clicks rose 114% year over year, and the crash pattern stopped.

## OrthoEducation: the nine-subsite cleanup

The flagship's multisite sibling, cloned by the vendor and left to rot. Abandoned page builders, five backup plugins, and enough junk that the database had pushed the host into write throttling.

- Ran a **five-phase cleanup over 19 sessions in six weeks**: database from 2.1 GB down to 166 MB, files from 5.5 GB to 2.8 GB, active plugins from 37 to 19, roughly 275 orphaned database tables dropped.
- Every removal was audited first. One example: before deleting the abandoned page-builder stack, I confirmed zero of its shortcode tokens remained on any live page network-wide, then purged 1,611 leftover metadata rows behind it.
- Reassigned **3,847 posts** away from the vendor's admin account with direct database updates, since the standard tooling doesn't support reassignment on multisite.
- Closed a publicly readable error log that was leaking an email API key, added security headers network-wide, and brought the firewall plugin to the same tuned baseline as the flagship site.
- Verified every phase with the 27-page visual smoke test. The owner's editors never noticed the cleanup happening. That was the point.

**Result:** Google Search impressions up 33x over a year as consolidation and indexing stabilized, on infrastructure half the size.

## FootPainIdentifier: rescuing a crashing app

A Laravel survey app holding 10,000+ patient responses, crashing regularly on a 1 GB server with no firewall and the previous vendor's credentials scattered through it.

- Root-caused the crashes to MySQL dying from memory exhaustion, then stabilized the box with swap, service tuning, and disk cleanup.
- Purged the vendor's leftovers: cloud credentials in the root home directory, a git remote with embedded passwords, and a forgotten world-writable copy of the entire app using default database passwords.
- Fixed a backup cron that had been firing **60 times a night** and replaced it with a sane daily job shipping off-site.
- Wrote a **custom fail2ban jail that bans credential-scanning bots on their first probe** for paths like `/.env` and `/.git`. Validated against real logs: 870+ scanner hits in a single day, banned on contact. Layered contact-form defenses ended a spam flood without adding friction for patients.
- Rotated dangerously weak database credentials and put log rotation on a 159 MB runaway log.

**Result:** an EOL-framework app that used to fall over now runs quietly on a $6/month server, monitored and backed up.

## By the numbers

| Metric | Result |
| --- | --- |
| OrthoEducation database | 2.1 GB → 166 MB |
| OrthoEducation files | 5.5 GB → 2.8 GB |
| Active plugins (OE) | 37 → 19 |
| Orphaned DB tables dropped | ~275 |
| FootEducation audit errors | 449 → 0 |
| FootEducation search clicks | +114% YoY |
| OrthoEducation search impressions | 33x over one year |
| Scanner probes banned in one validated day | 870+ |
| Pages visually verified per cleanup phase | 27 |
| Editor-facing breakage across all of it | 0 |

All three properties now push nightly database backups to off-server object storage with 30-day retention, replacing a mix of broken, local-only, and nonexistent backup schemes.

## The part clients never see

All of this ran on documentation: per-server maps, chronological session logs, phased cleanup plans, and plain-language owner updates that translated the technical stuff to be easier to digest. That documentation is why I as a solo operator could hold three servers' worth of state in order, and it's the working style I bring to everything on this site, client work, and personal projects alike.

The tooling this work produced, including the migration CLI and the visual smoke-test runner, is described in [Ops & Tooling](/#tooling).
