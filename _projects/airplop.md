---
title: "airplop"
order: 4
github_url: "https://github.com/csmather/airplop"
tags: ["Python", "Flask", "SSE", "Networking"]
summary: "Sends text and links from a PC to any iPhone on the LAN through Safari — no app install. Flask + Server-Sent Events out of WSL2, QR pairing, mDNS so the phone bookmark never goes stale."
---

AirDrop doesn't exist between a Windows PC and an iPhone, and I got tired of emailing myself links. airplop is the fix: a small Flask server running in WSL2 that pushes whatever you paste to every connected phone in real time over Server-Sent Events. The phone just opens a Safari page — no app, no account.

The interesting problems were all networking, not web dev: getting traffic from a phone through Windows into a WSL2 VM (a one-time PowerShell script opens the firewall and installs a logon task so the port-forwarding survives reboots), and keeping the phone's bookmark stable when the LAN IP changes — solved by advertising `airplop.local` over mDNS with zeroconf, plus a QR code on the sender page for first-time pairing.
