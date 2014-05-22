---
layout: page
title: Blog
permalink: /blog/
---

<article class="posts blogpage">
    {% for post in site.posts limit:11 %}
        	<h2 class="entry-title">
        		<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        	</h2>
        	{% if post.content contains '<!--more-->' %}
		    	<div class="entry-summary">
		    		<p>
		    			{{ post.content | split:'<!--more-->' | first }}&hellip; 
		    			<a href="http://jenntesolin.com/blog/2014/04/24/updated-raspberry-pi-media-server/">Continued</a>
		    		</p>
		    	</div>
			{% endif %}
       	<span class="badge blog-date">
       		<time class="published">
       			{{ post.date | date: "%b %-d, %Y" }}
       		</time>
       </span>
    <div class="pull-right">
    	<span class="label label-primary">
    		tags will be here
    	</span>
    </div>
    
    {% endfor %}
</article>