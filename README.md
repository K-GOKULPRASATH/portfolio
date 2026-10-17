# Gokul Developer Lab

Terminal-inspired personal portfolio for **Engineer · Educator · Founder**.

## Stack
- Next.js App Router, React, TypeScript
- Custom responsive CSS
- Lucide icons
- Interactive allow-listed terminal
- Sorting algorithm visualizer
- Static typed project metadata
- GitHub Actions CI

## Run locally
```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Before publishing
Update `src/lib/site.ts` with current contact details and verified project links. Add a resume at `public/documents/resume.pdf`. Update the production URL in metadata, robots, and sitemap. Verify project status and distinguish prototypes from shipped features. This initial version uses mail links instead of storing contact-form messages.

## Quality checks
```bash
npm run typecheck
npm run lint
npm run build
```

The terminal supports a fixed command allow-list and never executes shell commands. Respect reduced-motion preferences and conventional navigation is available alongside interactive controls.