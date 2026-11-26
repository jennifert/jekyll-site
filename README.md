# JennTesolin.com – Jekyll Static Site

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Jekyll](https://img.shields.io/badge/Jekyll-4.4.1-red)](https://jekyllrb.com/)
[![Ruby](https://img.shields.io/badge/Ruby-3.3.8-red)](https://www.ruby-lang.org/)
[![Status](https://img.shields.io/badge/status-rebuilding-orange)]()

A Jekyll implementation of [jenntesolin.com](https://jenntesolin.com), built as a personal website and a practical learning project exploring Ruby, Liquid, static site generation and modern web development.

## Project Status

The project is undergoing a complete rebuild for version 4.0.

The original implementation is preserved on the `master` branch. Active development takes place on the `rebuild` branch, starting from a fresh Jekyll installation.

The rebuild aims to simplify the previous architecture, remove unnecessary build dependencies and replace legacy functionality with modern Jekyll, Ruby, Liquid and vanilla JavaScript.

## Project Goals

- Establish a clean, modern Jekyll foundation.
- Replace Minima with Pico CSS.
- Create reusable Liquid layouts and components.
- Develop custom Ruby plugins.
- Introduce Rake for development automation.
- Migrate content and JSON data from the Next.js website.
- Modernize website search using minimal vanilla JavaScript.
- Improve accessibility, performance and maintainability.
- Remove the dependency on a Node.js build pipeline.
- Update existing Jekyll tutorials and publish new development articles.

## Technology Stack

### Current

- Ruby 3.3.8
- RubyGems 3.6.7
- Jekyll 4.4.1
- Bundler 4.1.1
- Liquid
- Minima (temporary default theme)

### Planned

- Pico CSS
- Modern CSS
- Vanilla JavaScript
- Custom Ruby plugins
- Rake
- Minitest
- JSON and Markdown

## Development Environment

The initial development environment has been successfully tested using Ubuntu on Windows Subsystem for Linux (WSL 2).

Rake 13.4.2 is also installed locally and will be integrated into the project during a later development milestone.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/jennifert/jekyll-site.git
cd jekyll-site
git switch rebuild
```

Install the Ruby dependencies:

```bash
bundle install
```

Start the local development server:

```bash
bundle exec jekyll serve --livereload
```

Open http://localhost:4000 in your browser.

## Development Commands

| Command | Description |
|---|---|
| `bundle install` | Install project dependencies |
| `bundle exec jekyll serve` | Start the local development server |
| `bundle exec jekyll serve --livereload` | Start with live reload |
| `bundle exec jekyll serve --drafts` | Preview draft articles |
| `bundle exec jekyll build` | Generate the static website |
| `bundle exec jekyll clean` | Remove generated files and caches |

## Production Build

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

The generated website is located in the `_site/` directory.

## Related Projects

- [Next.js Personal Website](https://github.com/jennifert/nextjs-site)
- [Live Personal Website](https://jenntesolin.com)

The Next.js website serves as a content and design reference for this rebuild.

## Deployment

Planned deployment options include:

- GitHub Pages using a custom GitHub Actions build.
- DigitalOcean App Platform.
- Self-hosted static web hosting.

Deployment documentation will be updated once the new build pipeline has been established and tested.

## Project Roadmap

See [project-plan.md](project-plan.md) for development milestones, planned functionality and documentation goals.

## License

ISC