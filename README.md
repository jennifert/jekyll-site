jekyll-site
===========

This is a port of my wordpress blog that has been moved to [Jekyll](http://jekyllrb.com/) via the [Jekyll Imports](http://import.jekyllrb.com/) plugin.

Feel free to check out my development site: [http://jenntes-jekyll.azurewebsites.net/](http://jenntes-jekyll.azurewebsites.net/) or [jenntes.no-ip.org](http://jenntes.no-ip.org/).

Once completed, the production url will be: [http://jenntesolin.com/](jenntesolin.com).


###Important Notes
- To create new posts, please change the content of the wordpress.xml to ave the xml export of your site.
- Moved away from Jenkins and now site is deploying through Azure GitHub pulls.

###Install steps:

1. Download/clone this archive and unzip.
2. Run jekyll serve
3. Browse to: http://localhost:4000

###Upcoming updates:

In no particular order:

- fix styles in code tags for ones that wrap.
- Fix horizontal scrolling issue.
- work through google page speed and yslow updates.
- Create a portfolio section that includes sites and photos from flickr
- Compare against the [Web Accessibility Checklist](http://a11yproject.com/checklist.html)
- Add License file to source where code, inspiration, where problems were fixed from

Final:

- run through grunt for css and js.
- Do entire process (as mentioned in future blog posting section below) by scratch in order to grab new posts.

###Phase 2:

- Replace any code tags to gists,like so: [this](https://workshop.avatarnewyork.com/post/jekyll-gist-tag/)
- create a new website in azure for php demos and update links in source code.

###Blog to do:

- Create posts that lists steps to run jekyll and then import wordpress posts.
- Highlight how to create items in config file.
- document steps for azure.


Please source any blog posting you use from here. Thanks :)