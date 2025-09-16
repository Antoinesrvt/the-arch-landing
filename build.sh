#!/bin/bash

echo "🚀 Building for Vercel deployment..."

# Create public directory
mkdir -p public

# Copy all necessary files
cp index.html public/
cp -r assets public/

# Copy any other static files
if [ -f "favicon.ico" ]; then
    cp favicon.ico public/
fi

echo "✅ Build complete! Files copied to public/ directory"
echo "📁 Contents of public/:"
ls -la public/
