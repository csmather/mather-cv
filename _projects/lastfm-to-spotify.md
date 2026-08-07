---
title: "lastfm-to-spotify"
order: 5
github_url: "https://github.com/csmather/lastfm-to-spotify"
tags: ["Python", "APIs", "Algorithms", "Music"]
summary: "CLI that pulls your Last.fm loved tracks into a new Spotify playlist, with date-range filtering and a calibration tool for tuning the fuzzy track matching."
---

Years of loved tracks on Last.fm, no way to actually listen to them as a playlist. This pulls a user's loved tracks (optionally filtered by date range) and builds a new Spotify playlist from them.

Most of the work actually went into the track matching — Last.fm and Spotify disagree constantly about titles, remaster suffixes, and featured-artist formatting — so the repo includes a calibration script for tuning the matcher against your own library before committing to a full run. Written up with a step-by-step README covering both APIs' credential hoops, since Spotify's developer onboarding is most of the difficulty.
