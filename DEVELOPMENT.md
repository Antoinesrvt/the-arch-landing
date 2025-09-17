# 🚀 Development Guide

## 📁 Project Structure

```
the-arch-landing/
├── public/                # 📝 WORK DIRECTORY - Edit files here!
│   ├── index.html         # Main HTML file
│   └── assets/            # All assets
│       ├── css/           # Stylesheets
│       ├── js/            # JavaScript modules
│       └── images/        # Images
├── build.sh              # Build verification script
├── vercel.json           # Deployment config
└── package.json          # Dependencies
```

## ⚠️ Important: Which Files to Edit

### ✅ **EDIT THESE (Working Files):**
- `public/index.html` - Main HTML file
- `public/assets/css/` - All CSS files
- `public/assets/js/` - All JavaScript files
- `public/assets/images/` - All images

### 🎯 **Key Point:**
- **Single Directory**: Everything is in `public/` folder
- **No Redundancy**: No duplicate files or folders
- **Vercel Ready**: Vercel serves directly from `public/`

## 🔧 Development Workflow

### 1. **Development**
```bash
# Start development server
npm run dev

# Edit files directly in public/ directory
# - public/index.html
# - public/assets/css/
# - public/assets/js/
```

### 2. **Build Verification**
```bash
# Verify build is ready
npm run build

# This just checks that public/ directory exists
# No copying needed - you work directly in public/
```

### 3. **Deployment**
- Vercel automatically deploys from `public/` folder
- No manual deployment needed
- Changes are live immediately

## 🎯 Key Points

1. **Single Source of Truth**: All files in `public/` directory
2. **No Build Process**: Work directly where Vercel serves from
3. **No Confusion**: Only one set of files to maintain
4. **Immediate Deployment**: Changes are live instantly

## 🚨 Common Mistakes to Avoid

- ❌ Creating duplicate `assets/` folders
- ❌ Working in root directory instead of `public/`
- ❌ Having multiple versions of the same file
- ❌ Overcomplicating the build process

## 📋 Quick Commands

```bash
# Development
npm run dev

# Verify build
npm run build

# Check structure
ls -la public/
```
