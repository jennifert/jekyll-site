---
layout: post
title: "Jekyll: Setting up your development environment"
date: 2015-03-17 19:34:21
categories:
- Tutorial
tags:
- Jekyll
- WordPress
summary: A guide that describes how to set up the Jekyll static site generator on desktop.
status: post
type: post
published: true
author: Jennifer Tesolin
---

Jekyll is a static site generator that runs on NodeJS. Its a great alternative to WordPress that eliminates the need for databases.<!--more-->

###Requirements

- [Ruby](http://www.ruby-lang.org/en/downloads/)
- [RubyGems](http://rubygems.org/pages/download)
- [NodeJS](http://nodejs.org/)

###Install Jekyll dependencies:

<code>sudo gem update --system<br>
sudo gem update<br>
sudo gem install jekyll</code>

If will be importing from WordPress or other location, you will also need:<br>

<code>sudo gem install jekyll-import</code>

Note: If your a risk taker, the below command installs a pre release version. Please note these are NOT stable.<br>

<code>gem install jekyll --pre</code>

###A new Jekyll instance (non-WordPress instructions)

First, run the the below command, replacing "MySite" with the folder name for your site.

<code>jekyll new MySite</code>

Jekyll will now generate a site in the folder "MySite". Here is what the directory will look like:

<img src="/wp-content/uploads/2015/jekyll1.png" alt="Terminal screen that shows directory contents">

- <code>_config.yml</code> stores the website configuration data such as site name, description and base address.
- <code>_includes</code> is where you store portions of a file such as your menu, header, footer, and GA code. 
- <code>_layouts</code>puts the pieces of the includes together for a post, page and index file.
- <code>_posts</code> is where posts for your site are stored in markdown or HTML format.
- <code>_scss</code> stores the files for SASS and CoffeeScriptfile. [Read More in the Jekyll Docs](http://jekyllrb.com/docs/assets/) 
- <code>about.md</code> is the about page for your site.
- <code>css</code> self explanatory - stores your css files.
- <code>feed.xml</code> will have your rss feed. This generates on its own.
- <code>index.html</code> your site's main page.

Once you have finished your changes, run the below commands:<br>

<code>cd MySite<br>
jekyll serve</code>

Here is a sample output:

<img src="/wp-content/uploads/2015/jekyll2.png" alt="Terminal screen output of jekyll serve command">

Then, browse to: [http://localhost:4000](http://localhost:4000).  You can edit files, and Jekyll will make those updates behind the scene as soon as you save...just refresh to see your changes.

###Wordpress Import instructions (wordpress.com and self hosted)
Create a folder for your site and use the terminal to change to the folder your your site will be (<code>cd foldername</code>). 

Make sure the upload folder and a copy of your [WordPress export](https://en.support.wordpress.com/export/) is at the root of your new site folder. For demo purposes, I will call it: <code>wordpress.xml.</code>

<img src="/wp-content/uploads/2015/jekyll3.png" alt="Terminal screen output showing directory strcuture">

Once this is set up, run the below command to import your wordpress instance:

<code>jekyll import wordpressdotcom --source wordpress.xml</code>

If your upload folders are not downloaded in same structure, download your wp-content folder, and place at root of site (above "_site" folder Also, in my code, there were no references to the below folders, so they were deleted:

- _nav_menu_items
- attachments

To see what your site looks like, run the command <code>jekyll serve</code>.

As with the non-WordPress import, any changes you make will be reflected in your development link.

###Drafts

To wok on a post locally, but not moving it live, create a folder at the root called <code>_drafts</code>. Next, add a markdown or html file without the address. Finally, run <code>jekyll server --watch --drafts</code>

<img src="/wp-content/uploads/2015/jekyll5.png" alt="Terminal screen output showing draft folder">

Changes can be made on the fly using this method as well. When ready to publish, move the file to <code>_posts</code> and add a date.

###Publishing your new site

The last step is in this process is to push your files on-line. Move into the root of <code>_site</code>. These are the production ready files that should be moved to your server.

The first chunk of files below shows the root of my Jekyll site, while the second shows the production ready files. Note that some files from the root of the Jekyll site are not included. These are excluded in <code>_config.yml</code>

<img src="/wp-content/uploads/2015/jekyll4.png" alt="Terminal screen output showing prduction folder contents">

Note: There will be separate posts on various items in the config file, how to get it running on Azure and finally, another on publishing to Github Pages, and CloudFlare.

###Youtube Demo

Here is a demo of the process to configure Ruby, and Jekyll on a system.

{% youtube SRmNM6VjhZk "16by9" %}

###Resources
+ [Jekyll Docs](http://stackoverflow.com/a/4920620)
+ [Jekyll Import Docs](http://import.jekyllrb.com/docs/wordpressdotcom/)
+ [Jekyll Docs - Working with drafts](http://jekyllrb.com/docs/drafts/)
