# Jekyll Site 4.0 – Project Plan

## Overview

Jekyll Site 4.0 is a complete modernization of the original Jekyll implementation of jenntesolin.com.

Rather than upgrading the existing legacy codebase, the project begins with a fresh Jekyll installation and gradually recreates functionality using Ruby, Liquid, Pico CSS and minimal vanilla JavaScript.

The project also serves as a self-directed learning exercise in modern Jekyll and Ruby development.

## Development Principles

- Prefer built-in Jekyll functionality before adding dependencies.
- Use Liquid for reusable presentation components.
- Use Ruby plugins for build-time processing.
- Use standalone Ruby scripts for maintenance and synchronization.
- Use Rake for development task automation.
- Use JavaScript only where browser-side interaction is necessary.
- Avoid unnecessary frameworks and build tools.
- Keep the website functional throughout development.
- Document and test new functionality.
- Preserve existing content, publication dates and URLs where practical.

## Repository Strategy

- `master`: Original legacy implementation.
- `rebuild`: Active version 4.0 development.

The legacy implementation will remain available throughout the rebuild.

## Milestone 1 – Fresh Jekyll Foundation

**Target: v4.0.0-alpha.1**

- [x] Configure Ubuntu using WSL 2.
- [x] Resolve WSL user authentication issues.
- [x] Install Ruby and RubyGems.
- [x] Install Jekyll and Bundler.
- [x] Install Rake locally.
- [x] Unarchive the original GitHub repository.
- [x] Create and publish the rebuild branch.
- [x] Generate a fresh Jekyll installation.
- [x] Remove legacy website and build files.
- [x] Transfer the fresh Jekyll scaffold.
- [x] Test the local development server.
- [x] Commit the initial scaffold.
- [x] Confirm scaffold commit is pushed.
- [x] Update README.
- [x] Establish project plan.
- [x] Review and update `.gitignore`.
- [x] Review Gemfile and dependency requirements.
- [x] Modernize `_config.yml`.
- [x] Review retained drafts and legacy documentation.
- [x] Establish GitHub milestones and issues.
- [x] Restore historical changelog.
- [x] Add `.ruby-version`.
- [x] Add Rake as a project dependency.
- [x] Verify Atom feed.
- [x] Modernize humans.txt.
- [x] Review robots.txt.
- [x] Verify production build.
- [x] Publish v4.0.0-alpha.1 pre-release.

### Documentation

- Update: Jekyll – Setting Up Your Development Environment.
- Update: Jekyll – The Configuration File.
- New: Rebuilding an Archived Jekyll Website from Scratch.

## Milestone 2 – Pico CSS and Custom Layouts

**Target: v4.0.0-alpha.2**

- [ ] Remove Minima.
- [ ] Add a pinned version of Pico CSS.
- [ ] Establish CSS organization.
- [ ] Migrate applicable CSS from the Next.js website.
- [ ] Create a default layout.
- [ ] Create a page layout.
- [ ] Create a blog post layout.
- [ ] Create a project layout.
- [ ] Create header and navigation components.
- [ ] Create footer component.
- [ ] Create reusable metadata component.
- [ ] Create custom 404 page.
- [ ] Review light and dark themes.
- [ ] Review responsive design.
- [ ] Establish accessibility conventions.
- [ ] Remove unnecessary icon libraries.

### Documentation

- Replacing Minima with Pico CSS.
- Creating Reusable Components with Liquid.
- Understanding Static Assets in Jekyll.

## Milestone 3 – Content and Data Migration

**Target: v4.0.0-alpha.3**

- [ ] Review Next.js website structure.
- [ ] Establish Jekyll JSON data structure.
- [ ] Migrate project JSON data.
- [ ] Migrate blog content.
- [ ] Convert MDX content to Markdown and Liquid.
- [ ] Preserve publication dates and existing slugs.
- [ ] Migrate relevant images and assets.
- [ ] Recover broken Cloudinary images where possible.
- [ ] Replace external image references with local assets.
- [ ] Create home page.
- [ ] Create about page.
- [ ] Create blog landing page.
- [ ] Create projects landing page.
- [ ] Review archived drafts.
- [ ] Review robots.txt and humans.txt.
- [ ] Test migrated content.

### Documentation

- Using JSON Data in Jekyll.
- Migrating Next.js and MDX Content to Jekyll.

## Milestone 4 – Ruby Plugins and Liquid Components

**Target: v4.0.0-alpha.4**

### Project Components

- [ ] Create reusable project cards.
- [ ] Create project detail pages from JSON data.
- [ ] Create featured project filters.
- [ ] Create technology and status filters or archives.
- [ ] Create project gallery components.

### Blog Components

- [ ] Create reusable blog cards.
- [ ] Create category and tag components.
- [ ] Create related posts functionality.
- [ ] Create reading time functionality.
- [ ] Create category and tag archives.
- [ ] Create yearly archives.
- [ ] Implement pagination.
- [ ] Create reusable article callouts.

### Content Validation

- [ ] Validate project JSON.
- [ ] Validate required front matter.
- [ ] Detect duplicate slugs.
- [ ] Report invalid content during builds.

### Documentation

- Writing Your First Jekyll Plugin.
- Creating Custom Liquid Filters with Ruby.
- Generating Jekyll Pages from JSON.
- Creating Custom Liquid Tags.
- Building Related Posts Without JavaScript.
- Building Custom Jekyll Pagination.
- Update: Jekyll – Fix Pagination After Upgrading to Version 3.

## Milestone 5 – Ruby Automation and Modern Search

**Target: v4.0.0-alpha.5**

### Rake and Ruby Scripts

- [X] Add Rake to the project Gemfile.
- [ ] Create Rakefile.
- [ ] Establish build, serve and clean tasks.
- [ ] Review original synchronization scripts.
- [ ] Create Ruby data synchronization script.
- [ ] Create gallery conversion script if required.
- [ ] Create image optimization tasks if required.
- [ ] Validate synchronized data.
- [ ] Ensure normal builds work offline.

### Search

- [ ] Create Ruby search index generator.
- [ ] Normalize searchable content at build time.
- [ ] Create reusable Liquid search form.
- [ ] Create HTML search result template.
- [ ] Implement modern vanilla JavaScript search.
- [ ] Replace custom URL parsing with URLSearchParams.
- [ ] Cache fetched search data.
- [ ] Avoid unsafe dynamic HTML insertion.
- [ ] Support browser back and forward navigation.
- [ ] Provide accessible result counts and errors.
- [ ] Support GitHub Pages base URLs.
- [ ] Test search against migrated content.

### Documentation

- Using Rake Instead of npm Scripts.
- Ruby Scripts vs. Jekyll Plugins.
- Synchronizing External JSON Data with Ruby.
- Update: Jekyll – Custom Search.
- Generating a Search Index with Ruby.
- Modern Vanilla JavaScript Search.
- Reusable HTML Templates in Jekyll.

## Milestone 6 – Testing and Quality Assurance

**Target: v4.0.0-beta.1**

- [ ] Introduce Minitest.
- [ ] Test custom Ruby plugins.
- [ ] Test standalone Ruby scripts.
- [ ] Test JavaScript search.
- [ ] Review accessibility.
- [ ] Test keyboard navigation.
- [ ] Test mobile layouts.
- [ ] Test light and dark themes.
- [ ] Check broken internal and external links.
- [ ] Check missing images.
- [ ] Validate generated HTML.
- [ ] Review SEO metadata.
- [ ] Review RSS feed.
- [ ] Review sitemap requirements.
- [ ] Review production build performance.
- [ ] Audit project dependencies.

### Documentation

- Testing Custom Jekyll Plugins with Minitest.
- Building Accessible Search Results.
- Removing Unnecessary Build Dependencies.

## Milestone 7 – Deployment

**Target: v4.0.0-beta.2**

- [ ] Configure GitHub Actions.
- [ ] Test production builds.
- [ ] Configure GitHub Pages deployment with custom plugins.
- [ ] Test DigitalOcean App Platform deployment.
- [ ] Document self-hosted deployment options.
- [ ] Verify base URL configurations.
- [ ] Verify generated static assets.
- [ ] Verify deployment accessibility and navigation.
- [ ] Review production configuration.

### Documentation

- Update: Jekyll – Configure Jekyll for GitHub Pages.
- Update: Jekyll – Static Sites on the DigitalOcean App Platform.
- Deploying Jekyll with Custom Plugins Using GitHub Actions.
- Hosting Jekyll on an Ubuntu VPS.

## Milestone 8 – Stable Release

**Target: v4.0.0**

- [ ] Complete remaining development tasks.
- [ ] Complete project documentation.
- [ ] Complete updated Jekyll tutorials.
- [ ] Review README.
- [ ] Finalize changelog for stable release.
- [ ] Preserve legacy branch.
- [ ] Review default branch strategy.
- [ ] Create Git version tag.
- [ ] Publish GitHub release.

### Documentation

- Building a Website Without Node.js.
- Building a Personal Website Without React.
- Comparing Next.js and Jekyll.

## Planned Custom Ruby Plugins

| Plugin | Purpose |
|---|---|
| `project_filters.rb` | Filter and organize projects |
| `project_pages.rb` | Generate project detail pages |
| `reading_time.rb` | Calculate estimated reading time |
| `technology_list.rb` | Organize project technologies |
| `related_posts.rb` | Generate related article recommendations |
| `archive_pages.rb` | Generate archive pages |
| `pagination.rb` | Provide custom pagination |
| `search_index.rb` | Generate searchable JSON data |
| `content_validator.rb` | Validate website content |
| `custom_tags.rb` | Provide reusable Liquid tags |

Plugin names and responsibilities may evolve during implementation.

## Planned Standalone Ruby Scripts

| Script | Purpose |
|---|---|
| `sync_data.rb` | Synchronize data from the Next.js website |
| `convert_gallery.rb` | Convert gallery data if required |
| `optimize_images.rb` | Optimize local website images |

## Planned JavaScript

| File | Purpose |
|---|---|
| `search.js` | Browser-side search |
| `theme.js` | Optional theme controls |
| `clipboard.js` | Optional code-copy functionality |

JavaScript files will be loaded only where needed.

## Future Enhancements

- Additional reusable Liquid components.
- Automated content validation.
- Improved search ranking.
- Additional development tutorials.
- Optional CSS and JavaScript development linting.
- Automated image optimization.
- Improved content synchronization between website implementations.

Future enhancements will not block the initial stable release.