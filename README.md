# The Arch Consulting - Landing Page

A modern, professional landing page for The Arch Consulting, a Web3 consulting company specializing in strategic guidance and technical implementation.

## 🚀 Features

- **Modern Tech Stack**: Built with Astro 5.13.9, TypeScript, and Tailwind CSS
- **3D Interactive Elements**: Three.js powered hero section with fallback for mobile
- **Internationalization**: Full French/English support with Astro i18n
- **Responsive Design**: Mobile-first approach with excellent cross-device compatibility
- **Performance Optimized**: Fast loading with optimized assets and lazy loading
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML

## 🏗️ Architecture

### Pages
- `/` - Redirects to default language
- `/fr` - French version
- `/en` - English version

### Components
- **Hero**: Interactive 3D scene with company introduction
- **Hybrid Approach**: Three-pillar strategy explanation
- **Services**: 360° service offering showcase
- **Founders**: Team introduction with expertise areas
- **Network**: Specialist network and partner ecosystem
- **Media & Community**: Social platforms and content
- **Contact**: Call-to-action and contact information

### Tech Stack
- **Framework**: Astro 5.13.9
- **Styling**: Tailwind CSS + Custom CSS
- **3D Graphics**: Three.js
- **Animations**: GSAP + Lenis
- **Internationalization**: Astro i18n
- **TypeScript**: Full type safety

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Astro components
│   ├── expertises/     # Expertise-specific components
│   └── ...
├── i18n/              # Internationalization
│   ├── config.ts      # Translation configuration
│   └── utils.ts       # i18n utilities
├── layouts/           # Page layouts
├── pages/             # Route pages
│   └── [lang]/        # Language-specific pages
└── styles/            # Global styles

public/
├── assets/
│   ├── css/           # Compiled stylesheets
│   ├── js/            # JavaScript modules
│   └── images/        # Static images
└── favicon.svg
```

## 🎨 Design System

### Colors
- **Primary**: Purple (#8A70D6)
- **Secondary**: Green (#34D399)
- **Accent**: Indigo (#818CF8)
- **Background**: Dark gradient (#0A0F19 to #111827)
- **Text**: White (#F0F2F5) / Secondary (#A8B2C7)

### Typography
- **Display**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
- **Glass Cards**: Backdrop blur with subtle borders
- **Animated Buttons**: Gradient borders with hover effects
- **3D Elements**: Three.js powered interactive graphics

## 🌐 Internationalization

The site supports French (default) and English with:
- Automatic language detection
- Language switcher component
- Complete translation coverage
- SEO-friendly URLs

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Optimized**: Proper touch targets and gestures
- **Performance**: Optimized 3D scenes for mobile

## 🚀 Performance

- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic code splitting
- **3D Fallbacks**: Graceful degradation for unsupported devices

## 🔧 Customization

### Adding New Languages
1. Add language code to `src/i18n/config.ts`
2. Add translations to the `ui` object
3. Update `getStaticPaths` in page components

### Modifying 3D Scene
- Edit `public/assets/js/modules/three-scene.js`
- Adjust performance settings for different devices
- Add new 3D elements or animations

### Styling
- Global styles: `src/styles/global.css`
- Component styles: `public/assets/css/components.css`
- Animations: `public/assets/css/animations.css`
- Tailwind config: `tailwind.config.js`

## 📄 License

© 2025 The Arch Consulting. All rights reserved.

## 🤝 Contributing

This is a private project for The Arch Consulting. For questions or suggestions, please contact the development team.
