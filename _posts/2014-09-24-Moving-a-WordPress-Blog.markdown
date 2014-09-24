---
layout: post
title:  "Moving a Wordpress blog"
date:   2014-09-24 19:00:00
categories:
- Tutorial
tags:
- wordpress
- jekyll
- php

status: publish
type: post
published: true
---
This post will describe various ways to move WordPress, either to a different server or to Jekyll. <!--more-->

##Steps to make an exact copy

This includes all plugins, theses, posts, etc.

- download a copy of the database and save somewhere. Make a copy as a backup.
- do a search in the sql file for the current domain URL and replace with the new domain or 'localhost' 
- update the site location in the wp-config file.
- import the sql database and add the user at the new location.
- upload your wordpress files and test.

I have tried other various methods including web apps, but those have caused problems and have not updated some text portions.

##The safest way to move (but not exact)

- download a copy of your themes, and plugins
- download an export of your post files. If your using a multisite, you will need to do this for each blog.
- download a fresh copy of Wordpress, and set up your plugins and themes.
- import posts, map users making sure to check the box to download linked media.

##Moving to jekyll

The first step is to download a copy of your upload folder, as well as a wordpress export.

Next, make sure you have Ruby on your machine. [Here is an install guide.](https://www.ruby-lang.org/en/installation/)

Now, run the following commands:

<code>sudo gem install jekyll
sudo gem install jekyll-import</code>

Create a folder for your site and use the terminal to change to the folder your your site will be.  Make sure the content uploads and a copy of your wordpress export is here. for demo purspoes, I will call it: wordpress.xml.

Once this is set up, run the below command to import your blog into wordpress:

<code>jekyll import wordpressdotcom --source wordpress.xml</code>

Finally, run the below command to build and preview the site. "--watch will allow you to make chnages and have them update in your preview site automtically."

<code>jekyll serve --watch</code>

The default preview site is: http://localhost:4000, but this can be changed from _config.yml.

The last step is in this process is to push your files online. Move into the root of "_site". These are the production ready files that should be moved to your server. An upcoming post will detail how to create a github pages site.