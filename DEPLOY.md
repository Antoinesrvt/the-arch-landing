# Vercel Deployment Guide

## Quick Deploy

### Option 1: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub + Vercel
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import from GitHub
4. Deploy!

### Option 3: Drag & Drop
1. Go to [vercel.com](https://vercel.com)
2. Drag the project folder
3. Done!

## Project Structure

```
the-arch-landing/
├── public/           # ← Vercel serves from here
│   ├── index.html
│   └── assets/
├── vercel.json       # ← Tells Vercel to use public/ directory
└── build.sh          # ← Copies files to public/
```

## Configuration

- **Output Directory**: `public` (configured in vercel.json)
- **Build Command**: `./build.sh` (copies files to public/)
- **Framework**: Static (no framework)

## Troubleshooting

If you still get "No Output Directory" error:
1. Make sure `public/` directory exists
2. Check that `index.html` is in `public/`
3. Verify `vercel.json` has `"outputDirectory": "public"`

## Local Testing

```bash
# Test the build
npm run build

# Test locally
npm run dev
```
