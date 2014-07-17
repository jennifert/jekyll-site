jekyll-site
===========

This is a port of my wordpress blog that has been moved to [Jekyll](http://jekyllrb.com/) via the [Jekyll Imports](http://import.jekyllrb.com/) plugin.

This is a development repository.

The production URL is the same as before: [http://jenntesolin.com/](jenntesolin.com).


###Important Notes
- To create new posts, please change the content of the wordpress.xml to ave the xml export of your site.
- The live version will be using continous integration, but this dev version is updated on azure when files are committed.

###Install steps:

<pre><code>sudo gem update --system
sudo gem update
sudo gem install rdiscount
sudo gem install jekyll
sudo gem install jekyll-import</code></pre>

- Install needed dependancies
- Download/clone this archive and unzip
- delete the "_site" directory
- delete wordpress.xml if your not going to use it, or replace the file with your own
- run: <pre><code>jekyll new sitenameruby -rubygems -e 'require "jekyll-import";    JekyllImport::Importers::WordpressDotCom.run({      "source" =&gt; "wordpress.xml"    })'</code></pre>
- Run jekyll serve
- Browse to: http://localhost:4000

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