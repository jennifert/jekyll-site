Changelog
===========

## [3.5.1] - 2025-07-10

### 🔧 General Refactor & Cleanup
- `_drafts` folder here will contain files that still need to be properly updated and tested for the blog. This is semi automated.

## [3.5.0] - 2025-07-10

### 🔧 General Refactor & Cleanup
- Removed jQuery and replaced DOM operations with vanilla JavaScript.
- Migrated custom `$.inArrayIn` usage to native `Array.prototype.includes`.
- Refactored `main.js` to use `fetch()` and `querySelectorAll`/`forEach`.
- Removed SCSS and all `sass`-related tooling; migrated to plain CSS.
- Cleaned up old/unused gems, packages, and platform-specific scripts.
- Created TODO.md for next steps.
- added _data and scripts to sync gallery and portfolio projects

### 🛠 Build System Overhaul
- Updated `package.json` scripts:
  - Removed `scss`/`sass` tasks.
  - Added `rimraf`-based clean step before builds.
  - Ensured proper directory creation (`mkdir -p`) for JS/CSS/image tasks.
  - Confirmed build pipeline works on macOS (no Windows-specific commands).
- Consolidated `build`, `watch`, and `serve` commands for simplified usage.

### 🧪 Linting & Testing
- Integrated `eslint` and `stylelint` with custom config and autofix support.
- Cleaned up JS and CSS to conform to latest linting standards.
- Preserved `jest` support for potential JS unit tests.

### ♿️ Accessibility (Removed for This Repo)
- Removed `axe` integration due to build complexity and unused output.
- Accessibility testing to be prioritized in future projects where needed.

### ⚙️ Jekyll Config Updates
- `_config.yml`:
  - Added `dist` to `include`.
  - Excluded development-only files:`node_modules`, etc.
- Maintains default permalink, paginate, and feed settings.

### 📁 Miscellaneous
- Refined `.gitignore` to match new project structure.
- Created `README.md` with:
  - Shields for license, technologies used, and version.
  - Detailed directory structure and usage notes.

---

## Version 3 Changelog
July 21, 2021:
- fixed older blog links
- fixed spelling  and grammar.

July 21, 2021:
- Re-section _config.yaml into 3 sections
- fixed older blog links
- fixed spelling  and grammar.

July 06, 2021:
- Fixed links from older post

July 05, 2021:
- Fixed links from older post

June 08, 2021:
- Fixed links from older posts

April 22, 2021:
- Updated bundles and npm
- Fixed some older posts
- added missing content

March 11, 2021:
- Changed post date to today due to site issues.
- updated Jekyll on Digital ocean post to add steps to help adding domain, then adding subdomain.
- updated npm and bundle packages.

February 13, 2021:
- New post! Jekyll on Digital ocean

February 12, 2021:
- Moved to Digital Ocean App Platform.
- Added Gemlock file
- added Ruby version to gem file

January 13, 2021:
- Updated post! Installing Homebrew on a mac
- Swapped old link for new post above
- Updated Jekyll Version gemfile and _config.yml manually due to move to big sur.

October 14, 2020:
- New post! Slowly updating older ones.
- added YQL decommissioned to posts with YQL.

October 13, 2020:
- Updates to make a bit more accessible
- Fixed Json Mime handler link to UI Press, as well as "List of Common MIME types" link in post "Creating a development environment for IIS 7+"
- In above post, added new link for "Configuring RSS with IIS" under mime types.
- removed contact me button in header. One in footer is fine.
- updated jquery version being used. 1.11 to 3.

August 25, 2020:
- updates to readme.
- fixed broken links on "Creating a development environment for IIS 7+" and added more resource links.
- update "Installing Node JS and Grunt" post to include proxy server set-up.
- upgrade Jekyll and other gems to latest version
- deleted old web.config as all links point to the gist now.

February 5, 2020:
- minor update to about page (email, techs used)
- force git to re-pull

December 12, 2019
- new blog posts
- fixed images in some older posts (updated jekyll)
- made sure links on homepage and new posts had proper noopener/noreferrer/no follow

April 3, 2019
- remove Google + items
- fixed typos from blog post

October 13, 2018
- Moved all images from folder to digital ocean spaces (set as CDN)
- went through all posts and fixed typos.

October 12, 2018
- added link to gists on homepage

October 3, 2018
- added new categories page
- changed index page from search to categories.

September 26, 2018
- new post

May 23, 2018
- removed Flickr references
- Updated Ruby gems//latest Jekyll version.

April 18, 2018
- updated node and grunt posting.
- changed old ASP.net box to be Archer CMS.
- deleted old node js/grunt post.

## phase 2 Updates:
May 28, 2017
- new post
- updated deploy file for future new search engine
- updated about with email since GitHub repo not used.

May 26, 2017
- Updated git links to point to proper repo or gist
- more typos fixed.
- removed duplicate mime type links in IIS post.
- Updated gitignore now that repo is private.
- Added githook so that server will receive updates. Based on: https://gist.github.com/cowboy/619858

May 19, 2017
- New posts slipped in!
- Added message on grunt post to notify of new version.

January 5, 2017
- New post!
- Updated about us page to add more information on upcoming post series.
- fixed Wordpress tip on page 3 (display X number of posts)

February 4, 2016
- New post!
- removed broken draft links
- fixed formatting on IIS post

December 2015 - January 2016
- Adding social media metatags
- adding microformats/h-cards

November 17, 2015
- Fixed links in Jekyll blog posts index pages.
- fixed YQL demos, and re-added links to pages
- fixed images to be relative instead of absolute
- Removed azure links for demos.

October 28, 2015
- Fixed pagination within Jekyll (after upgrade to V3)
- New post!

August 19, 2015
- Added atom feed
- added demo page to server and linked to post.

August 18, 2015
- Fixed Google map links.

August 8, 2015
- New post!
- Added video demo to Jekyll post "setting up the environment"
- Added Google+ metatag, link in footer with nofollow will not include in Google results. MOre social media tags to follow.
- Added metatag description for posts using same type of logic as title tags.

May 22, 2015
- New post!

April 17, 2015
- Fixed styles css styles for footer and header.
- Since comment field removed, took out call to action in older posts

April 16, 2015
- Removed Jumbotron from devices under 700px (xs hidden in grid view).

March 18, 2015
- updated Youtube plug-in: changed to use bootstrap responsive embed.
- Removed carousel from homepage and moved to own page. Converted to using thumbnails for better accessibility.
- Updated bootstrap to latest version.

March 17, 2015
- New blog post!
- Updated feed.xml to be like the one Jekyll creates when you first generate a site.

March 14, 2015
- New blog post!

March 11, 2015
- Updated url in config to be https
- updated canonical link tag.

March 5, 2015
- Fixed typos across all pages.
- Updated Youtube plug in to show the https page
- getting site ready to use cloudflare free SSL.
- Added plug-ins to repo that will be used in the future.ly

November 7, 2014
- Fixed page titles to be more SEO friendly.

October 7, 2014
- Added  rel="nofollow" to off-site links.

September 24, 2014:
- Added a new post

August 22, 2014:
- fixed minor github issues

August 11, 2014:
- fixed items from WooRank.com

July 21, 2014:
- Fixed pagination
- fixed horizontal scrolling on pages.
- temporary removed html5 styles and extra css code. Will add back in with aria code in future build.
- now using some pieces of html5 boilerplate

July 16, 2014:
- made menu simpler for now
- removed un-needed directories and fixed some layout pages
- updated css and js to be latest bootstrap 3.2.
- made instructions clearer for install

July 15, 2014:
- moved issues from read me to the Github issues functionality.
- Fixed some demo links
- added plugins for youtube and flickr.

###Phase 1 Updates:

June 20, 2014:
- add atom feed to style head
- fix styles in code tags for ones that wrap.
- tweak if else statement for search engine.
- made tags searchable from search page
- made sure all items were commented correctly for open source code and found similar answers on stackoverflow.
- work through Google page speed and yslow updates (as much as github pages would allow).

June 19, 2014:
- built custom search engine.
- Moved updated to this changelog file.
- clicking on tags or categories will perform search for that tag.
- moved analytics to include code.
- added link to search for similar tags and categories
- Added web.config to add json mime type to windows azure.

June 14, 2014:
- Worked through major suggestions by Modern.ie

June 13, 2014
- Tags and categories are now visual on index and main blog index
- delete post Jekyll added at first run.

June 11, 2014
- Added .deployment file for windows azure.
- Updated about page text
- Updated humans.txt section: technologies
- added pages that appear in navigation to sitemap.xml
- downloaded Google page speed and modern.ie reports to work through
- Look into jekyll ignore for the readme.mb file (just using script to add page to group for navigation).
- Removed _site from Jekyll ignore to get ready to load in Windows Azure

June 10, 2014
- Move blog theme into Jekyll includes
- Use html 5 markup with Shim, not divs.
- Finish moving components from homepage over, and make blog a subpage.
- have only code tags instead of pre.
- Fix top date and post information

May 21, 2014:
- Go through postings, and make sure all formatting is similar and proper
- Moved long lists of posts to sub page
- blog items have some html elements marked up. Will still need to style them

May 15, 2014:
- Have sitemap generating based of rss feed template (how to generate items)
- Have some of humans.txt being pulled from config, unfortunately other items cannot be pulled in.
- copied by wp-contents file into folder.
- updated gitignore to just be _sites/

May 14, 2014:
- Initial commits and footer updates to site.
- Created 404 page
- imported WordPress posts
