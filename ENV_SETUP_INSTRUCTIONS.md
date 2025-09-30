# Environment Setup Instructions

## Environment Setup

To enable analytics tracking and email capture, you need to create environment variable files:

### Step 1: Create `.env` file (for local development)

Create a new file named `.env` in the project root with the following content:

```bash
# Resend API Key (REQUIRED for email capture)
# Get your API key from: https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx

# Google Analytics 4 (Optional - for comprehensive analytics)
# Get your ID from: https://analytics.google.com/
# Format: G-XXXXXXXXXX
PUBLIC_GA_ID=

# Plausible Analytics (Optional - privacy-friendly alternative)
# Your domain name as registered in Plausible
PUBLIC_PLAUSIBLE_DOMAIN=thearch.consulting

# Vercel Analytics
# Automatically enabled when deployed to Vercel
# No configuration needed
```

### Step 2: Get your Resend API Key (REQUIRED)

To enable email capture and lead magnet delivery:

1. Sign up at [https://resend.com](https://resend.com)
2. Verify your domain OR use their test domain for development
3. Go to [API Keys](https://resend.com/api-keys)
4. Create a new API key
5. Copy the key (format: `re_xxxxxxxxxx`)
6. Add to `.env`:
   ```
   RESEND_API_KEY=re_your_actual_key_here
   ```

**For Development/Testing:**
- Use Resend's test email: `delivered@resend.dev`
- Or use `onboarding@resend.dev` as sender
- Verify your email first for production use

### Step 3: Add your Google Analytics ID (Optional)

If you want to use Google Analytics:

1. Go to https://analytics.google.com/
2. Create a new property (or use existing)
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)
4. Add to `.env`:
   ```
   PUBLIC_GA_ID=G-YOUR-ACTUAL-ID
   ```

### Step 3: Configure Plausible (Optional)

If you want to use Plausible instead of (or in addition to) Google Analytics:

1. Sign up at https://plausible.io/
2. Add your website domain: `thearch.consulting`
3. Add to `.env`:
   ```
   PUBLIC_PLAUSIBLE_DOMAIN=thearch.consulting
   ```

### Step 4: Vercel Analytics (Automatic)

Vercel Analytics is included by default. To enable:

1. Deploy to Vercel
2. Go to your project dashboard
3. Settings → Analytics
4. Click "Enable Web Analytics"
5. Click "Enable Speed Insights" (optional but recommended)

**No environment variables needed for Vercel Analytics!**

---

## What Gets Tracked?

With the current setup, you'll track:

### Automatic Tracking (Vercel Analytics)
- Page views
- Unique visitors
- Bounce rate
- Geographic data
- Device/browser data

### Custom Events
- **CTA Clicks**: Every button click (which CTAs work?)
- **Scroll Depth**: 25%, 50%, 75%, 100% (do users scroll?)
- **Time on Page**: How long users stay
- **External Links**: Which external links users click

### Privacy-First Approach

All analytics are configured to:
- ✅ Anonymize IPs
- ✅ No cross-site tracking
- ✅ No ad personalization
- ✅ GDPR compliant (with cookie consent)
- ✅ Respect "Do Not Track"

---

## Testing Analytics Locally

Analytics are **disabled** in development mode by default.

To test analytics tracking:

1. Set `isDev={false}` in Analytics component, OR
2. Deploy to Vercel and test in production

To see events in development console:

```javascript
// Open browser console
window.trackEvent('test_event', { test: true });
// You should see: 📊 Analytics Event: test_event {test: true}
```

---

## Vercel Deployment Environment Variables

When deploying to Vercel, add environment variables in:

1. Go to Vercel Dashboard
2. Select your project
3. Settings → Environment Variables
4. Add:
   - `PUBLIC_GA_ID` (if using Google Analytics)
   - `PUBLIC_PLAUSIBLE_DOMAIN` (if using Plausible)

**Remember**: Variables starting with `PUBLIC_` are exposed to the client-side code.

---

## Which Analytics Should I Use?

### Recommendation for The Arch:

**Start with Vercel Analytics only** (simplest):
- ✅ Zero configuration
- ✅ Privacy-friendly (no cookies)
- ✅ Fast and accurate
- ✅ Free tier generous

**Add Google Analytics** if you need:
- Detailed user flow analysis
- E-commerce tracking
- Advanced segmentation
- Industry-standard reports

**Add Plausible** if you want:
- Maximum privacy compliance
- Simple, clean dashboard
- Lightweight (<1KB script)
- No cookie consent needed

---

## .gitignore

Your `.env` file should already be in `.gitignore`. Verify with:

```bash
cat .gitignore | grep .env
```

Should show:
```
.env
.env.local
.env.production
```

**NEVER commit `.env` files to Git!**

---

## Quick Start

**Minimal setup** (just Vercel Analytics):

1. Deploy to Vercel
2. Enable Analytics in dashboard
3. Done! ✅

**Full setup** (all platforms):

1. Create `.env` file (use template above)
2. Add Google Analytics ID
3. Add Plausible domain
4. Deploy to Vercel
5. Enable Vercel Analytics
6. Test tracking

---

## Troubleshooting

### Analytics not tracking?

1. Check browser console for errors
2. Verify `.env` variables are set
3. Check Network tab for analytics requests
4. Ensure cookie consent is accepted
5. Disable ad blockers for testing

### Vercel Analytics not showing data?

1. Wait 5-10 minutes for data to appear
2. Check Analytics is enabled in Vercel dashboard
3. Verify deployment was successful
4. Check you're viewing production data, not preview

---

**Need help?** Check the Vercel Analytics documentation:
https://vercel.com/docs/analytics
