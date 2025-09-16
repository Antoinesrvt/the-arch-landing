# The Arch Consulting - Landing Page

A modern, responsive landing page for The Arch Consulting, built with HTML5, CSS3, and vanilla JavaScript.

## Features

- 🌐 **Multilingual Support** - French and English
- 🎨 **Modern Design** - Clean, professional UI with glass morphism effects
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Performance Optimized** - Fast loading with optimized assets
- 🎭 **Smooth Animations** - GSAP-powered animations and transitions
- 🎯 **3D Hero Section** - Interactive Three.js 3D scene
- ♿ **Accessible** - ARIA labels and keyboard navigation

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, Custom Properties
- **JavaScript (ES6+)** - Vanilla JS with modules
- **GSAP** - Animations and scroll triggers
- **Three.js** - 3D graphics
- **Tailwind CSS** - Utility-first CSS framework

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Build the project
npm run build
```

## Deployment

### Vercel (Recommended)

1. **Using Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Using GitHub:**
   - Push to GitHub
   - Connect to Vercel
   - Deploy automatically

3. **Drag & Drop:**
   - Go to [vercel.com](https://vercel.com)
   - Drag the project folder

### Other Platforms

This is a static site that can be deployed to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## Project Structure

```
the-arch-landing/
├── index.html              # Main HTML file
├── assets/
│   ├── css/               # Stylesheets
│   │   ├── main.css       # Global styles
│   │   ├── components.css # Component styles
│   │   └── animations.css # Animation styles
│   └── js/                # JavaScript modules
│       ├── data/          # Data files
│       └── modules/       # JS modules
├── vercel.json            # Vercel configuration
├── package.json           # Project metadata
└── README.md             # This file
```

## Configuration

### Language Settings

The site supports French (default) and English. Language preference is stored in localStorage.

### Customization

- **Colors**: Edit CSS custom properties in `assets/css/main.css`
- **Content**: Update translations in `assets/js/data/translations.js`
- **Animations**: Modify GSAP animations in `assets/js/modules/animations.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Lighthouse Score**: 90+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## License

MIT License - see LICENSE file for details.

## Support

For questions or support, contact The Arch Consulting team.