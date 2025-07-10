# 🔁 Next.js ➡️ Jekyll Sync Script

This document outlines how the Next.js project syncs compatible `.js` page files into the Jekyll `_drafts/` folder.

---

## 🧠 Purpose

The goal is to allow blog content to be written and maintained in the Next.js repo (e.g., `pages/*.js`), and then automatically sync draft-compatible files into the Jekyll repo for archival or static rendering.

---

## 🛠️ Script Location

**File**: `scripts/sync-to-jekyll.js` (in `nextjs-site` repo)

This script:
- Scans `pages/*.js` in the Next.js repo
- Looks for files that return JSX content
- Parses and extracts any useful blog meta and content
- Converts and saves them as `.md` files in the Jekyll repo’s `_drafts/` folder
- Skips files that are already present (by slug)

---

## 🚦 What It Syncs

✅ JS pages with a valid `return()` JSX block  
❌ Skips Next.js system files (like `_app.js`, `404.js`, etc.)  
❌ Skips `.js` pages that don’t return any JSX  
❌ Skips if Jekyll already has a post or draft with that name

---

## 📦 `package.json` Integration

Add this to the `scripts` section of your `nextjs-site/package.json`:

```json
"scripts": {
  "sync:jekyll": "node scripts/sync-to-jekyll.js"
}
```

Now you can run it from the root of `nextjs-site`:

```bash
npm run sync:jekyll
```

Here is the file in my gitrepo: [`scripts/sync-to-jekyll.js`](https://github.com/jennifert/nextjs-site/blob/main/scripts/sync-to-jekyll.js). Next, here are the blog posts its pulling from: [`pages/blog`](https://github.com/jennifert/nextjs-site/tree/main/pages/blog) 

---

© Maintained by Jennifer Tesolin | GitHub: [@jennifert](https://github.com/jennifert)
