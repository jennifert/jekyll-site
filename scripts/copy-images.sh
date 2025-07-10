#!/bin/bash

# Paths (edit these if needed)
NEXTJS_DIR="$HOME/GitHub/nextjs-site/public"
JEKYLL_DIR="$HOME/GitHub/jekyll-site/imgs"

# Create target dirs if they don’t exist
mkdir -p "$JEKYLL_DIR/blog" "$JEKYLL_DIR/gallery" "$JEKYLL_DIR/icons"

echo "📦 Copying image folders from nextjs-site to jekyll-site..."

# Copy folders
cp -R "$NEXTJS_DIR/blog/." "$JEKYLL_DIR/blog/"
cp -R "$NEXTJS_DIR/gallery/." "$JEKYLL_DIR/gallery/"
cp -R "$NEXTJS_DIR/icons/." "$JEKYLL_DIR/icons/"

echo "✅ Images copied successfully."