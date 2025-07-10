# JennTesolin.com – Jekyll Static Site

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Built with Jekyll](https://img.shields.io/badge/built%20with-Jekyll-blue)](https://jekyllrb.com/)
[![Node.js](https://img.shields.io/badge/Node-20.x-brightgreen?logo=node.js)](https://nodejs.org/)
[![Ruby](https://img.shields.io/badge/Ruby-3.4.1-red?logo=ruby)](https://www.ruby-lang.org/en/)

This is the [Jekyll](https://jekyllrb.com/) version of [https://jenntesolin.com](https://jenntesolin.com), maintained as a static site with modern dev tooling for local development and optimized builds.  
Primarily built for personal use, local previews, and publishing to platforms like DigitalOcean.

---

## 📁 Project Structure

```
jekyll-site/
├── _config.yml          # Jekyll site configuration
├── Gemfile              # Ruby gems required for Jekyll
├── Gemfile.lock         # Locked versions of Ruby gems
├── package.json         # Node.js dev dependencies and scripts
├── dist/                # Final build output (CSS, JS, images)
│   ├── css/
│   ├── js/
│   ├── imgs/
│   ├── search.json
│   ├── urls.txt
│   └── ...
├── src/                 # Source CSS and JS files
│   ├── css/
│   └── js/
├── imgs/                # Images for the site
├── _site/               # Jekyll's default output directory (not used for deployment)
├── .gitignore           # Files excluded from Git
├── README.md            # This file
├── humans.txt           # About the developer (you!)
└── feed.xml             # RSS/Atom feed
```

---

## ⚙️ Dev and Build Setup

### 1. Install Dependencies

```bash
bundle install        # Ruby gems (for Jekyll)
npm install           # Node dev tools (ESLint, PostCSS, etc.)
```

### 2. Run Locally

```bash
npm run start
```

This will:
- Build the site (CSS, JS, images, and Jekyll output)
- Launch the local Jekyll server with livereload
- Watch for CSS/JS/image changes and rebuild as needed

---

## 🔧 Build for Production

```bash
npm run build
```

This will:
- Clean the `dist/` folder
- Lint and minify JS and CSS
- Optimize images
- Copy compiled assets into `dist/`
- Build the Jekyll site into `_site/` using `bundle exec jekyll build`

---

## 🌐 DigitalOcean Deployment

This project was originally designed to deploy via [DigitalOcean](https://www.digitalocean.com/) or similar hosts that support static HTML sites.

> 🔸 **Note:**  
> The `[config]` block (`project = _site`) found in earlier versions was specific to DigitalOcean's App Platform deployment. It is **not required for GitHub** or other hosts unless specifically needed by a platform.
