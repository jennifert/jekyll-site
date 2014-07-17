jekyll-site
===========

This is a port of my wordpress blog that has been moved to [Jekyll](http://jekyllrb.com/) via the [Jekyll Imports](http://import.jekyllrb.com/) plugin.

This is a development repository.

The production URL is the same as before: [http://jenntesolin.com/](jenntesolin.com).


###Important Notes
- To create new posts, please change the content of the wordpress.xml to ave the xml export of your site.
- The live version will be using continous integration, but this dev version is updated on azure when files are committed.

###Install needed dependancies:

<pre><code>sudo gem update --system
sudo gem update
sudo gem install rdiscount
sudo gem install jekyll</code></pre>

Optional, only if your importing from wordpres sor other location:
<pre><code>sudo gem install jekyll-import</code></pre>

Also, if your a risktaker, the below command installs a pre release version. Pleas enote these are NOT stable.

<pre><code>gem install jekyll --pre</code></pre>

###Non-Wordpress Import instructions
- Download/clone this archive and unzip
- delete the "_site" directory
- delete the "wp-content" folder or repalce with your own assets
- if your not using wordpress, delete wordpress.xml
- delete all posts from "_posts" feel free to use the markdown formatting though. Add a post.
- Run jekyll serve
- Browse to: http://localhost:4000

###Wordpress Import instructions
- use same instructions as no-wordpress
-  replace the file with your own wordpress.xml
- run: <pre><code>jekyll import wordpressdotcom --source wordpress.xml</code></pre>
- if attachments are not downloaded in same structure, download your wp-content folder, and place at root of site (above "_site" folder)
- delete _nav_menu_items, and _attachments directories.
- Run jekyll serve (or jekyll serve --watch if you want to make changes and have them reload automatcially in browser)
- Browse to: http://localhost:4000

###Install other gems as required:
I will need to research why I downloaded and marked them down for jekyll, but I also have the following installed:

<pre><code>gem install sequel
gem install hpricot
gem install rdiscount
</code></pre>

###Upcoming updates:

###Phase 1

Any updates in this phase were on and before June 20, 2014, this was to my domain up as fast as possible. Feel free to check out changelog.md for all completed updates.

###Phase 2:

Issues have been moved to [Github](https://github.com/jennifert/jekyll-site/issues).

####Blog to do:

This is part of phase 2.

- Create posts that lists steps to run jekyll and then import wordpress posts.
- Highlight how to create items in config file.
- document steps for azure.


Please source any blog posting you use from here. Thanks :)