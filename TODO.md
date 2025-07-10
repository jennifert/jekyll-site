
# 🛠️ Project To-Do List

## ✅ Current Status
Project builds cleanly with working search, live reload, and proper CSS/JS processing. Accessibility tooling and SCSS have been removed. Ready for content/image fixes and style updates.

---

## 📌 To-Do List (Remaining Tasks)

### 🔲 1. **Replace Broken Cloudinary Images**
**Summary:** Many blog posts link to expired Cloudinary URLs, causing 401 errors.  
**Action:**  
- Re-download or recover the images.
- Save them to `/imgs/blog/YYYY/filename.png`.
- Update all blog posts to use local image paths.

---

### 🔲 2. **Remove Font Awesome (Optional)**
**Summary:** Font Awesome icons are in use but not required.  
**Action:**  
- Remove `<link>` to FA in your layout.
- Find and remove `<i class="fa ...">` in templates.
- Replace with plain text, Bootstrap icons, or inline SVG.

---

### 🔲 3. **Upgrade Bootstrap to v5**
**Summary:** You're currently using Bootstrap 3.4.1. Bootstrap 5 is modern, jQuery-free, and more responsive.  
**Action:**  
- Replace Bootstrap CDN in your layout with Bootstrap 5.
- Update old classes (e.g., `label`, `col-xs-12`, `navbar-*`) to BS5 equivalents.

---

### 🔲 4. **Copy Over Updated Blog Content**
**Summary:** Blog entries from your other setup (e.g., `pages/blog/Page.js`) are not yet migrated.  
**Action:**  
- Copy markdown or HTML files into `_posts/` or appropriate folder.
- Ensure front matter is consistent.
- Add related images to `/imgs/blog/`.

---

### 🔲 5. **Test Search with Updated Content**
**Summary:** `search.json` powers the on-site search but may need updating after blog/image changes.  
**Action:**  
- Rebuild site.
- Test search on `/search/` to confirm results and images appear properly.

---

### 🔲 6. **Remove Unused Layouts/Includes (Optional)**
**Summary:** Some Jekyll layouts and includes may be outdated or unused.  
**Action:**  
- Audit `_layouts/` and `_includes/`.
- Remove any that aren’t referenced.

---

### 🔲 7. **Update README (If Bootstrap Upgraded or FA Removed)**
**Summary:** If you remove or upgrade tech, reflect the changes.  
**Action:**  
- Update tech stack section in `README.md`.

---
