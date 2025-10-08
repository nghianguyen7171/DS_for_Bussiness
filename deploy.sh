#!/bin/bash

# Deploy script for DS for Business website to GitHub Pages

echo "🚀 Deploying to GitHub Pages..."
echo ""

# Check if docs directory exists
if [ ! -d "docs" ]; then
    echo "❌ docs directory not found. Please run build first: ./build.sh"
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not a git repository. Please initialize git first:"
    echo "   git init"
    echo "   git remote add origin https://github.com/nghianguyen7171/DS_for_Bussiness.git"
    exit 1
fi

# Check if there are uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo "📝 You have uncommitted changes."
    read -p "Do you want to commit them? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add .
        read -p "Enter commit message: " commit_msg
        git commit -m "$commit_msg"
    else
        echo "⚠️  Warning: Deploying with uncommitted changes"
    fi
fi

echo ""
echo "📤 Pushing to GitHub..."

# Push to main branch
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🌐 GitHub Pages setup:"
    echo "   1. Go to: https://github.com/nghianguyen7171/DS_for_Bussiness/settings/pages"
    echo "   2. Under 'Source', select 'Deploy from a branch'"
    echo "   3. Under 'Branch', select 'main' and '/docs' folder"
    echo "   4. Click 'Save'"
    echo ""
    echo "   Your site will be available at:"
    echo "   https://nghianguyen7171.github.io/DS_for_Bussiness/"
    echo ""
else
    echo ""
    echo "❌ Failed to push to GitHub"
    echo "   Make sure you have:"
    echo "   1. Created the repository on GitHub"
    echo "   2. Added the remote: git remote add origin https://github.com/nghianguyen7171/DS_for_Bussiness.git"
    exit 1
fi

