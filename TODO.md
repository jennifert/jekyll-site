# 🛠️ Project To-Do List

## ✅ Current Status

The Jekyll 4.0 rebuild has started successfully on the `rebuild` branch.

A fresh Jekyll 4.4.1 installation is working locally using Ruby, Bundler and WSL 2. The legacy Node.js build pipeline has been removed.

Minima is temporarily in use until the custom Pico CSS layouts and Liquid components are implemented.

See [project-plan.md](project-plan.md) for the complete development roadmap.

---

## 📌 To-Do List (Ongoing Tasks)

### 🔲 1. **Replace Broken Cloudinary Images**

**Summary:** Many older blog posts link to expired Cloudinary URLs, causing 401 errors.

**Action:**
- Recover original images where possible.
- Save them to `/assets/images/blog/YYYY/`.
- Update blog posts to use local image paths.
- Add appropriate alternative text.
- Optimize images where necessary.

---

### 🔲 2. **Simplify Website Icons**

**Summary:** Avoid unnecessary external icon libraries in the rebuilt website.

**Action:**
- Do not reintroduce Font Awesome.
- Use plain text or inline SVG where appropriate.
- Ensure icons are accessible.
- Avoid unnecessary external dependencies.

---

### 🔲 3. **Migrate Updated Blog Content**

**Summary:** Migrate updated blog content from the Next.js personal website.

**Action:**
- Convert MDX files to Jekyll-compatible Markdown.
- Replace MDX components with Liquid includes or custom tags.
- Ensure front matter is consistent.
- Preserve original publication dates and slugs.
- Add related images to `/assets/images/blog/`.
- Review and test migrated articles.

---

### 🔲 4. **Modernize Website Search**

**Summary:** Rebuild the original search functionality using Ruby, Liquid and modern vanilla JavaScript.

**Action:**
- Create a custom Ruby search index plugin.
- Generate `search.json` during the Jekyll build.
- Create reusable Liquid search components.
- Optimize browser-side JavaScript.
- Cache search data.
- Ensure accessible search results.
- Test search against migrated content.

---

### 🔲 5. **Update Existing Jekyll Tutorials**

**Summary:** Modernize existing tutorials alongside the website rebuild.

**Action:**
- Setting Up Your Development Environment.
- The Configuration File.
- Custom Search.
- Fix Pagination After Upgrading to Version 3.
- Configure Jekyll for GitHub Pages.
- Static Sites on the DigitalOcean App Platform.
- Publish new tutorials as functionality is implemented and tested.

---

### 🔲 6. **Maintain Project Documentation**

**Summary:** Keep documentation consistent with the current implementation.

**Action:**
- Update `README.md`.
- Maintain `project-plan.md`.
- Update the changelog for releases.
- Document custom Ruby plugins.
- Document standalone Ruby scripts and Rake tasks.
- Keep GitHub issues and milestones up to date.

**Status:** Ongoing.

---