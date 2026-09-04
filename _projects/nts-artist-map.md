---
title: "NTS Artist Map"
order: 2
github_url: "https://github.com/csmather/nts-artist-map"
external_url: "https://csmather.github.io/nts-artist-map/"
tags: ["Python", "Data Science", "Web Crawling", "Music"]
summary: "Sister project to Basilect Engine using a different signal: which artists NTS Radio hosts choose to play in the same show. I crawled 86,600 episodes, cleaned up 1.5 million messy artist names, and ranked 11 million artist pairs by how many different hosts put them together. There's an interactive map of the results."
---

## The idea

A direct offshoot of [Basilect Engine](/projects/basilect-engine/), swapping the signal source. Instead of what artists *say*, this mines what curators *do*: NTS Radio tracklists, where a single human chose to put artist A and artist B in the same hour of music. Curated co-occurrence is structurally different from algorithmic co-occurrence (a million low-effort playlists averaged together) and orthogonal to genre tags or collaboration graphs. Two artists are connected here if they recur together across curators with different scenes, biases, and eras.

## The data engineering

This one is mostly a crawling and canonicalization story:

- **Crawl** — NTS's public API caps pagination well short of the full catalog, so the crawler uses the master sitemap as its frontier instead, reaching episodes the API literally cannot page to. Full corpus: **86,600 episodes across 1,709 shows, zero errors**, crawled politely at bounded concurrency.
- **Canonicalize** — tracklists list artists as free text ("Rhythm & Sound, Paul St. Hilaire", "Tyler, the Creator"). Turning those into real artist IDs means splitting on commas and ampersands without shredding band names that contain them. Matching the whole string first and only splitting when that fails resolved **80.5% of 1.5M strings.**
- **Compute & rank** — 11 million distinct artist pairs across 147k artists, ranked primarily by *distinct curator count* rather than raw plays, so one obsessive show can't fake a connection.

The README doubles as field notes on the NTS API's quirks — broken search endpoint, pagination ceilings, which sitemaps are trustworthy — because the next version (thesis-fit scoring, intent-density weighting) will build on the same corpus.
