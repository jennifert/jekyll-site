# 🔄 Syncing & Automation Scripts Between Next.js and Jekyll

This document explains the purpose and behavior of automation scripts used to sync, convert, and copy content between the `nextjs-site` and `jekyll-site` projects.

---

## 📁 Scripts Overview

### 1. `scripts/prepare-images.sh`
Prepares image assets by organizing them before optimization:
- Moves existing images from the main `imgs/` directory into a new staging area `unoptimized-imgs/`
- This helps avoid overwriting original images before running `imagemin`

```bash
#!/bin/bash
mkdir -p unoptimized-imgs
mv imgs/* unoptimized-imgs/
```

---

### 2. `scripts/convert-gallery.js`
Fetches and converts `galleryData.js` from the Next.js project into a valid YAML file that Jekyll can use.
- Parses the static export array from `galleryData.js`
- Renames the image `src` paths to use `/imgs/gallery/` instead of `/gallery/`
- Converts the structure into YAML
- Saves result to `_data/gallery.yml` (used by `photos.html` in Jekyll)

Example usage:
```bash
npm run convert:gallery
```

---

### 3. `scripts/copy-images.sh`
Copies static images from the Next.js project into the Jekyll `imgs/` directory:
- Copies all content from:
  - `nextjs-site/public/gallery`
  - `nextjs-site/public/icons`
  - `nextjs-site/public/blog`
- Places them into the appropriate folders under `jekyll-site/imgs/`

```bash
#!/bin/bash
mkdir -p imgs/gallery imgs/icons imgs/blog
cp -R ../nextjs-site/public/gallery/* imgs/gallery/
cp -R ../nextjs-site/public/icons/* imgs/icons/
cp -R ../nextjs-site/public/blog/* imgs/blog/
```

This ensures Jekyll always has the latest images needed for gallery, portfolio, and blog rendering.

---

## 💡 Related Scripts in `package.json`

- `npm run fetch:all`: Downloads latest data and images
- `npm run optimize:images`: Optimizes images from `unoptimized-imgs/` into `imgs/`
- `npm run build`: Runs everything in sequence, including Jekyll build and asset prep

---

## ✨ Suggested Workflow

1. In Next.js: update `galleryData.js` or blog images
2. In Jekyll project:
```bash
npm run fetch:all         # Fetch latest data & images
npm run optimize:images   # Optimize into /imgs
npm run build             # Build full site with updated content
```

---

© Maintained by Jennifer Tesolin | GitHub: [@jennifert](https://github.com/jennifert)
