# The Arch Consulting - Landing Page

A modern, responsive landing page for The Arch Consulting, built with HTML5, CSS3, and vanilla JavaScript following current best practices.

## Features

- **Modern Design**: Clean, professional design with glass morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Accessible**: WCAG 2.1 compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Fast loading with optimized assets and lazy loading
- **Multilingual**: French and English language support
- **Interactive**: Smooth animations and 3D elements using Three.js
- **Modular Architecture**: Well-organized, maintainable code structure

## Tech Stack

- **HTML5**: Semantic markup with proper accessibility
- **CSS3**: Modern CSS with custom properties, Grid, and Flexbox
- **JavaScript ES6+**: Modular JavaScript with classes and modern syntax
- **Three.js**: 3D graphics and animations
- **GSAP**: Smooth animations and scroll effects
- **Lenis**: Smooth scrolling library

## Project Structure

```
the-arch-landing/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   ├── main.css          # Base styles and layout
│   │   ├── components.css    # Component-specific styles
│   │   └── animations.css    # Animation styles
│   ├── js/
│   │   ├── main.js           # Main application logic
│   │   ├── modules/
│   │   │   ├── translations.js
│   │   │   ├── animations.js
│   │   │   ├── three-scene.js
│   │   │   └── modal.js
│   │   └── data/
│   │       ├── translations.json
│   │       └── case-studies.json
│   └── images/               # Optimized images
├── package.json              # Dependencies
└── README.md                 # Documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- A modern web browser

### Installation

1. Clone or download the project
2. Navigate to the project directory
3. Install dependencies (optional for development server):
   ```bash
   npm install
   ```

### Running the Project

#### Option 1: Direct File Access
Simply open `index.html` in a web browser.

#### Option 2: Development Server
```bash
npm run dev
```
This will start a local development server at `http://localhost:3000`.

## Features Overview

### Responsive Design
- Mobile-first approach
- Breakpoints for mobile, tablet, and desktop
- Flexible grid layouts
- Touch-friendly interactions

### Accessibility
- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Reduced motion support

### Performance
- Optimized CSS and JavaScript
- Lazy loading for images
- Efficient animations
- Minimal external dependencies

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Customization

### Colors
Colors are defined as CSS custom properties in `assets/css/main.css`:

```css
:root {
    --background-start: #0A0F19;
    --background-end: #111827;
    --primary-text: #F0F2F5;
    --accent-purple: #8A70D6;
    /* ... more colors */
}
```

### Content
- Translations: Edit `assets/js/data/translations.js`
- Case studies: Edit `assets/js/data/case-studies.js`
- Expertise data: Edit `assets/js/data/case-studies.js`

### Styling
- Main styles: `assets/css/main.css`
- Components: `assets/css/components.css`
- Animations: `assets/css/animations.css`

## Development

### Code Style
- Use semantic HTML5 elements
- Follow BEM methodology for CSS classes
- Use modern JavaScript (ES6+)
- Maintain accessibility standards

### Adding New Sections
1. Add HTML structure to `index.html`
2. Add styles to appropriate CSS file
3. Add any JavaScript functionality to relevant module
4. Update translations if needed

## Performance Considerations

- Images are optimized for web
- CSS and JavaScript are minified in production
- Animations respect user's motion preferences
- Lazy loading for non-critical content

## Browser Compatibility

The site is built with modern web standards and supports:
- All modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## License

MIT License - see LICENSE file for details.

## Contact

For questions about this project, contact The Arch Consulting team.
