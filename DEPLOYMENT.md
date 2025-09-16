# Deployment Guide

## Vercel Deployment

This is a static HTML site that can be deployed to Vercel easily.

### Method 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Navigate to the project directory:
   ```bash
   cd the-arch-landing
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N`
   - Project name: `the-arch-landing` (or your preferred name)
   - Directory: `./` (current directory)
   - Override settings? `N`

### Method 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a static site
6. Deploy!

### Method 3: Drag & Drop

1. Go to [vercel.com](https://vercel.com)
2. Drag and drop the `the-arch-landing` folder
3. Vercel will handle the rest

## Configuration

The project includes:
- `vercel.json` - Vercel configuration
- `.vercelignore` - Files to exclude from deployment
- `package.json` - Project metadata and scripts

## Environment Variables

No environment variables are needed for this static site.

## Custom Domain

After deployment, you can add a custom domain in the Vercel dashboard:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Troubleshooting

If you get "No Output Directory" error:
- Make sure `vercel.json` is in the root directory
- Check that `index.html` exists in the root
- Verify the project structure matches the expected layout

## Local Development

To run locally:
```bash
npm run dev
```

This will start a local server at `http://localhost:3000`
