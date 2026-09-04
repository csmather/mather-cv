---
title: "FootEducation"
order: 1
external_url: "https://footeducation.com"
thumb: "assets/screenshots/footeducation.png"
screenshot: "assets/screenshots/footeducation.png"
tags: ["WordPress","Apache","MySQL","AWS","DigitalOcean"]
summary: "Patient-education site for foot and ankle conditions. I inherited it running pirated software behind a firewall it wasn't actually using. Cleaned it up, ended the crashes, and Google search clicks more than doubled the following year."
---

## [See Case Study](https://csmather.com/case-studies/site-ops/)

I inherited this long-running patient-education site from a vendor who had stopped answering. It crashed on a regular pattern, ran a pirated copy of a commercial page builder, and sat behind a paid firewall that it was quietly letting traffic bypass.

## What I did
- Replaced the pirated page builder with a real license and removed the code it had injected into every page load.
- Removed the old vendor's access entirely: SSH keys, a shared Linux account, and WordPress admin accounts.
- Locked the server down so traffic actually has to pass through the firewall, and fixed permissions that let anything on the server read anything.
- Found why it kept crashing (PHP running out of memory during plugin updates while bots hit an empty cache) and tuned Apache and PHP so it can't happen again.
- Upgraded PHP from 8.0 to 8.3, cut active plugins from 33 to 25, and removed about 300 MB of dead code.
- Merged two competing translation systems into one, covering 75 English/French page pairs. That alone took the site's audit errors from 449 to 0.
- Set up email authentication (SPF, DKIM, DMARC) so the site's messages are verified as real, plus nightly off-server backups with 30 days of history.
- Moved the hosting from AWS to DigitalOcean to simplify the setup.

## Result
The crashes stopped. Google search clicks rose 114% over the following year and impressions rose 94%.
