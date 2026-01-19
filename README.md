# PulsePrep MCQ Trainer

A fully static, client-side MCQ training app built with Vite, React, and TypeScript. It runs infinite randomized sessions from a local question set, with instant feedback and session-only stats.

## Features

- Infinite random questions with a recent-question buffer to avoid immediate repeats.
- Single-choice and multiple-choice questions.
- Session timer, streak tracking, and accuracy stats.
- Results view with last 10 question outcomes.
- Contribute page with donation link and question submission details.
- No accounts, no backend, and no persistence beyond the active session.

## Getting started

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Cloudflare Pages

- **Build command:** `npm run build`
- **Build output directory:** `dist`

## Content updates

Edit the question set in `src/data/questions.ts` to add or update questions.

Visit `/contribute` to support the project or submit new questions by email.
