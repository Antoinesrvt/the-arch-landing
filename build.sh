#!/bin/bash

echo "🚀 Vercel deployment ready!"

# Check if public directory exists
if [ ! -d "public" ]; then
    echo "❌ Error: public/ directory not found!"
    echo "   Make sure you're working in the public/ directory"
    exit 1
fi

echo "✅ Public directory found"
echo "📁 Contents of public/:"
ls -la public/
echo ""
echo "💡 Note: Edit files directly in public/ directory"
echo "   - index.html: Main HTML file"
echo "   - assets/: All CSS, JS, and images"
echo "   - Vercel will serve from public/ automatically"
