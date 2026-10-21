---
title: "FootEducation"
order: 1
external_url: "https://footeducation.com"
thumb: "assets/screenshots/footeducation.webp"
screenshot: "assets/screenshots/footeducation.webp"
tags: ["WordPress","Elementor","Apache","MySQL","AWS","DigitalOcean"]
description: "Patient-education site for foot and ankle conditions. I inherited it running pirated software behind a firewall it wasn't actually using. Cleaned it up, ended the crashes, and Google search clicks more than doubled the following year."
---

## [See Case Study](https://csmather.com/case-studies/site-ops/)

I inherited this patient-education site to do general maintenance and found 10+ years worth of technical debt that had accumulated. It crashed on a regular pattern, ran a pirated copy of a commercial page builder, and sat behind a paid firewall that it was quietly letting traffic bypass.

## What I did
- Replaced the pirated page builder with a real license and removed the code it had injected into every page load.
- Removed the old vendor's access entirely: SSH keys, a shared Linux account, and WordPress admin accounts.
- Locked the site down so traffic actually has to pass through the firewall, and tightened security within the server itself.
- Found why it kept crashing (PHP running out of memory during plugin updates while bots hit an empty cache) and tuned its Apache and PHP configurations so it can't happen again.
- Upgraded PHP from 8.0 to 8.3, cut active plugins from 33 to 25, and removed about 300 MB of dead code.
- Merged two competing translation systems into one, covering 75 English/French page pairs.
- Set up nightly backups that get stored off-server with 30 days of history.
- Set up email authentication for the domain as well as Cloudflare to stop email spam.
- Moved the hosting from AWS to DigitalOcean to simplify the setup.

## Result
Before, the site was very sluggish, and traffic was decreasing steadily. Now, it's a noticeably smoother experience, the crashes stopped, Google search clicks rose by 114% over the following year, and impressions rose by 94%.
