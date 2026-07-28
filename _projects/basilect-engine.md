---
title: "Basilect Engine"
order: 1
github_url: "https://github.com/csmather/basilect-engine"
tags: ["Python", "Embeddings", "LLM Pipeline", "Music"]
summary: "Music similarity engine that connects artists by how they talk about making music — verbatim interview quotes, embedded and compared — to surface kinships that cross genre lines."
---

## The idea

Recommendation engines connect artists who sound alike or share listeners. Basilect connects artists whose **creative philosophy** is similar but whose genre or scene is not. Two artists are "basilect-connected" if a punk drummer and an ambient producer turn out to describe their process, their constraints, and their reasons for making music in the same way.

It started with a simple observation: LLMs are strangely good at gauging musical taste — a "vibe" — from very little information. I wanted to know if that vibe could be measured instead of just chatted about.

## How it works

The signal source is verbatim artist quotes from interviews. No critic voice, no summaries — the artist's own words only.

1. **Search** — find interview URLs for an artist
2. **Scrape** — fetch article text with trafilatura
3. **Extract** — pull verbatim quotes from the scraped text
4. **Embed** — embed each quote, aggregate per artist via median vector
5. **Compare** — pairwise cosine similarity across all artists
6. **Discover** — rank pairs by similarity

A corpus only counts if it has at least 5 quotes from 3 distinct sources across 2 distinct years, to keep one puff-piece interview from defining an artist. Earlier iterations (preserved in the repo's tags) used LLM summaries of artist discourse before I concluded that only direct quotes keep the signal honest. Along the way I tried several comparison methods — Jaccard, Spearman, cosine, count-adjusted similarity — and built visualizations of the encoding methods themselves.

## Where it led

The hard part turned out to be the data, not the math: interview scraping is full of confounds. A friend forked the project, put real API budget and a frontend behind it, and hit exactly the same walls — which was oddly validating. Chasing the problem properly pushed me into actual recommender-systems literature, and eventually into a Codabench challenge (Music-CRS 2026) run by some of the same researchers whose papers I'd been reading. I got my system to baseline parity before recognizing how deep that field goes.

The honest conclusion: "measure a vibe" is a genuine open research problem. Basilect is on hold, not abandoned — and its sibling project, [NTS Artist Map](/projects/nts-artist-map/), attacks the same thesis from a completely different signal source.
