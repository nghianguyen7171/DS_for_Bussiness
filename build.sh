#!/bin/bash

# Build script for DS for Business website

echo "🚀 Building DS for Business website..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Run the build
echo "🔨 Running build process..."
node build.js

# Check if build was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build completed successfully!"
    echo ""
    echo "📂 Output is in the /docs directory"
    echo ""
    echo "Next steps:"
    echo "  1. Preview locally: npm run dev"
    echo "  2. Deploy to GitHub Pages: ./deploy.sh"
    echo ""
else
    echo ""
    echo "❌ Build failed!"
    exit 1
fi

