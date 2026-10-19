---
layout: page
title: "Case Study: Rescuing a Medical Education Network"
permalink: /case-studies/site-ops/
---

## The Gist
I took over three neglected medical education properties for general site maintenance: a high-traffic but time-worn WordPress site ([FootEducation](https://footeducation.com)), a recently migrated nine-subsite WordPress Multisite network ([OrthoEducation](https://orthoeducation.com)), and a separate Laravel diagnostic survey app ([FootPainIdentifier](https://footpainidentifier.com)). Working solo over about 2 months of part-time sessions, I removed pirated software, cut the bloat in half, ended recurring crashes, and built out security, backups, and monitoring from scratch. Nothing editor-facing broke at any point, and search performance climbed steeply on both WordPress properties when it was finished.

The owner is a medical expert, not a tech expert. **Every change below also had to be explained in plain language**, gated on their approval when it was significant, and invisible when it wasn't.

## How I work

The same method ran through all three projects:

- **Map everything first:** I give each server a living "server map" document: a full inventory of plugins, configurations, users, known issues, etc. Every work session updates it to reflect the *current state of the site*, and every session gets recorded in a separate log chronologically. Months later I can tell you exactly what changed when, plus the reasoning behind it.
- **Be critical of the inherited state:** Verify what's actually running instead of what's assumed to be running. That instinct is what surfaced most of the findings below.
- **Prove it's orphaned before deleting it:** Before anything is removed I check for live references. Cleanup at this scale is only safe when deletion is verifiably inconsequential.
- **Small, reversible phases:** Snapshot before each phase, verify after it. On the multisite cleanup, I made an automated smoke test that verifies 27 key pages across the network so any breakage would show up immediately.

## FootEducation: security remediation and stabilization

An encyclopedic patient-education site on its own VPS, behind a CDN firewall the server had been silently bypassing.

- Found the site running a **pirated copy of a commercial page builder**, diagnosed from the code of the plugin itself: its license checks were patched out with a fake license re-injected on every page load, and live code fetches from an unsecure piracy domain. I'm glad I caught it, since it explained a lot; something felt off about the page builder the whole time. After examining and removing the plugin, we replaced it with a legitimate license.
- Removed the former vendor entirely: SSH keys, a shared Linux account, and WordPress admin accounts. I handled communication with them during this process.
- Removed a wildcard DNS record that let spam subdomains point at the site, which had left almost 200 fake pages with the same domain on Google. From there I rebuilt 107 content redirects from scratch.
- Tracked down why the site kept crashing: it ran out of memory when updates and high traffic hit at the same time. I re-tuned the server so it can't use more resources than it actually has.
- Set up proper email authentication (DNS), locked down the website's traffic with a firewall, and did a final audit of the entire server.

**Result:** Semrush errors went from 449 to 0, Google Search clicks rose 114% year over year, and no more crashes.

## OrthoEducation: the nine-subsite cleanup

A newer, more generalized network of orthopedic education material that the vendor created by cloning of a previous version of FootEducation. A lot of issues stemmed from their attempts to retrofit normal WordPress fixtures to a WordPress Multisite. It was full of abandoned page builders, five separate backup plugins, and enough junk that the database started getting throttled due to its size.

- Cleaned it up in five phases, finding tons of unused bloat in the process: database down from 2.1 GB to 166 MB, server files from 5.5 GB to 2.8 GB, active plugins from 37 to 19.
- Checked every removal first. For example, before deleting the old page builders, I confirmed no live page anywhere on the network still used them with a script.
- Moved 3,847 posts off the vendor's admin account. The standard tools can't do that on a multisite, so I did it directly in the database.
- Closed a public error log that was leaking an API key, added security across the network, and brought the firewall up to the same setup as FootEducation.
- Ran the 27-page smoke test after every phase to confirm that nothing broke in the process. Backups were made often in case of breakage.

**Result:** Google Search impressions up 33x over a year on a site that now uses half the resources.

## FootPainIdentifier: rescuing a crashing app

A Laravel survey app holding 10,000+ patient responses. It crashed regularly, had no firewall, and still had the previous vendor's credentials all over it.

- Found the database was crashing from running out of memory, then stabilized the server.
- Cleaned out the vendor's leftovers: cloud credentials, passwords saved in plain text, and a forgotten, wide-open copy of the entire app.
- Fixed a backup job that was running **60 times a night** and replaced it with one daily backup stored off the server.
- Wrote a rule that bans bots the first time they go looking for passwords and config files. On one day I checked, it caught 870 of them, which was 870 more than normal. Also stopped email spam that was originating from the site's contact form.
- Replaced weak passwords and pruned old log files that had grown out of control.

**Result:** an outdated app that used to fall over now runs quietly on a cheap server, monitored and backed up.

## By the numbers

| Metric | Result |
| --- | --- |
| OrthoEducation database | −92% |
| OrthoEducation files | −49% |
| OrthoEducation active plugins | −49% |
| FootEducation audit errors | 449 → 0 |
| FootEducation search clicks | +114% YoY |
| OrthoEducation search impressions | 33x over one year |

All three sites now back up their databases every night to off-server storage, kept for 30 days. Before, backups were either broken, stored on the same server, or didn't exist.

## The part clients never see

All of this ran on documentation: server maps, session logs, cleanup plans, and plain-language updates for the owner. That's how I kept three servers straight working solo, and it's how I work on everything - client work and personal projects alike.

The tools I built along the way are described in more detail in [Ops & Tooling](/#tooling).
