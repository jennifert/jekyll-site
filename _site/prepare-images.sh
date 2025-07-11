#!/bin/bash

# Move original images to unoptimized-imgs
mkdir -p unoptimized-imgs

echo "🛑 Moving original images to unoptimized-imgs..."

mv imgs/* unoptimized-imgs/ 2>/dev/null
mv imgs/*/* unoptimized-imgs/ 2>/dev/null

echo "📦 Originals stored in unoptimized-imgs/"