---
layout: post
title: "Setting up your Mac computer for local development and programming"
date: 2016-08-24 22:23:21
categories:
- Tutorial
tags:
- Mac
- Apache
- PHP
- MySQL
- Node
- Ruby
summary: Mac computers are great for programming and are free (and easy) to get up and running. This post describes how to set up your mac for programming and web development from enabling PHP, Ruby, node and more.
status: post
type: post
published: true
author: Jennifer Tesolin
---

To do anything well, you need to understand what goes on behind the scenes. In the web development world, this would mean taking the time to install and enable the tools, servers and other things you will use by hand alongside or in place of solutions such as XAMPP or M/WAMP. <!--more-->

## Enable Ruby

First up, let's enable Ruby. We are installing Ruby first as other items needed for development and installation require it.

### Step 1: Install X-code, and check to make sure that its the latest

To install x-Code, head over to the app store then click: "categories" > "development". It is typically near the top of the free downloads. Click the download button, then go grab a coffee.... it clocks in at about 4GB so it may take awhile to download and install.

If you already have it installed, make sure its up to date.

### Step 2: Accept the license agreements

In order to use the build tools, the licenses must be accepted. Run the below commands in your terminal ("Utilities" > "Terminal"). Be sure to read and accept the agreements.

<code> xcode-select --install</code>

### Step 3: Check if Ruby is installed, then update the files

To check what version of Ruby you have, you will need to run the below command in the terminal:

<code>ruby -v</code>

To update your ruby installation and gems to the latest version, run the below commands. Please note that multiple versions of Ruby are beyond the scope of this blog. If you want to run multiple versions, check out a project like RVM.

### Step 4: install homebrew

Run the command below to install homebrew. Homebrew is basically a package manager for the Mac, and in this being used to fix the default Ruby version that comes with the Mac. It will also be used further into the tutorial to install other development items.

Once the install has completed, its best to run the commands '<code>brew doctor<br>brew update</code> make sure your  installation is okay and has the latest files.

<code>/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"<br>brew doctor<br>brew update</code>

Below are some commands to install Ruby gems. Please note that Homebrew commands are best for fixing Ruby.

#### Update Ruby and installed gems.

<code>brew install ruby<br>sudo gem update --system<br>sudo gem update</code>

If you are experiencing issues updating gems, try the following command:

<code>sudo gem update -n /usr/local/bin</code>

#### Install Jekyll for later in this tutorial
<!-- http://jekyllrb.com/docs/troubleshooting/#installation-problems-->
To install Jekyll, run the command:

<code>gem install jekyll bundler</code>

You can import your current WordPress posts, by first exporting your entire Wordpress blog using the WordPress tool to Export to an XML file.

Once your file is ready, you will need to install the Jekyll Importer by the below command:

<code>gem install jekyll-import</code>

Here is a list of other plugins that may be useful in your blog. Note that if you use GitHub pages, you will need to compile the files on your computer first <code>bundle exec jekyll buiild</code> then commit your files to the master branch.

+jekyll-angular
+jekyll-feed
+jekyll-paginate

Mention: https://gist.github.com/jennifert/896428b15cd586f91fd36872a0bff1d5

Check out these Jekyll tutorials for more on working with the Jekyll static site generator:

<a href="https://jenntesolin.com/tutorial/2015/03/17/Jekyll-Set-Up-Publish.html">Set-Up Jekyll Publishing</a><br>
<a href="https://jenntesolin.com/tutorial/2016/02/04/jekyll-on-azure.html">Configure on Azure or Github Pages</a><br>
<a href="https://jenntesolin.com/tutorial/2015/08/08/jekyll-config-file.html">The configuration file</a><br>
<a href="https://jenntesolin.com/tutorial/2015/10/28/fix-jekyll-pagination-upgrade-to-3.html">Fix pagination after upgrading (V2 to V3)</a><br>
<a href="https://jenntesolin.com/tutorial/2015/05/22/Jekyll-Custom-Easy-Search-jquery.html">Easy searching with JSON and jQuery</a><br>

## Install Git (optional)

To install GIT, just run the below commands and enter your information when requested. Brew update/upgrade is being run to show best practice. Files should always be updated before trying to run commands.

<code>brew update<br>brew upgrade<br>brew install git</code>

## Install Composer (Optional)

Composer is a dependency manager for PHP that will typically run in your development environment, then the resulting files can be sent to your production environment.

To install Composer, run the command from the <a href="https://getcomposer.org/download/" target="_blank">Composer Download Page</a>. It should be in a box with various PHP commands to run form the terminal.

<img src="/wp-content/uploads/2016/07/download_composer.png"/ alt="A screenshot of the Composer Download page">

After running the commands, use the below to enable globally on your system:
<code>mv composer.phar /usr/local/bin/composer</code>

To verify that it worked, type the below command to see your version:
<code>composer -V</code>

###Using Composer to install Dependancies

This will use Composer to install files needed for <a href="http://www.slimframework.com/" target="_blank">Slim 3</a> as an example. The demo video uses Xampp as a temporary measure as the videos for fixing Apache (described below) where not yet comepleted.

From your project folder run the below command to add Slim as a dependancy:

<code>composer require slim/slim "^3.0"</code>

Once completed, follow the steps in the "<a href="http://www.slimframework.com/docs/tutorial/first-app.html" target="_blank">First Application</a>" tutorial to get started. Please be sure to update the path for the "<code>require '../vendor/autoload.php';</code>" to your directory. In the video, my require simily has: <code>require 'vendor/autoload.php';</code>

## Enable apache
On Mac computers apache comes pre-installed though has to be run from the terminal (in Snow Leopard and before, there was a web panel installed). To see if its running, go to: <a href="http://localhost" target="_blank">http://localhost</a>. If you see an error, here are some commands to help you get started (they will need to be run from the terminal).

<code>sudo apachectl start<br>
sudo apachectl stop<br>
sudo apachectl restart/graceful</code>

If you are getting errors starting it still, run the below command to see if there any errors in the apache configuration file.

<code>apachectl configtest</code>

Once you see "It works!", create a new folder in your home folder called "Sites". This folder should appear as the screenshot below. <!--to do: add screenshot of folder-->

Since this mac is a development server, we can run the below command from the server to make the folder writable. These should NOT be run in any production environment set-up.

<code>sudo chmod -R a+w ~/Sites/</code>

Next, we will create a <code>username.conf</code> file (or edit if it already exists) by typing:

<code>sudo nano /etc/apache2/users/username.conf</code>

The file will open in terminal, in a program called nano. Copy and paste the below text into the terminal program, and then type "Control" and the "X" key to quite. TYpe "Y" to save your changes.

<!--to do: make sure directory tags are encoded-->
<code><Directory "/Users/username/Sites/"><br>
AllowOverride All<br>
Options Indexes MultiViews FollowSymLinks<br>
Require all granted<br>
</Directory></code>

Next, run the below command (substituting 'nano' for 'vi' if you prefer) in your terminal. This will open the Apache configuration file so you can enable the '~Sites' folder.

<code>sudo nano /etc/apache2/httpd.conf</code>

In this console, you will want to uncomment (remove the '*') from the below:

<code>LoadModule authz_core_module libexec/apache2/mod_authz_core.so<br>LoadModule authz_host_module libexec/apache2/mod_authz_host.so<br>LoadModule userdir_module libexec/apache2/mod_userdir.so<br>LoadModule include_module libexec/apache2/mod_include.so<br>LoadModule rewrite_module libexec/apache2/mod_rewrite.so<br>Include /private/etc/apache2/extra/httpd-userdir.conf<br>Include /private/etc/apache2/extra/httpd-vhosts.conf</code>

Similr to the above, you will want to run the below code in the terminal:

<code>sudo nano /etc/apache2/extra/httpd-userdir.conf</code>

Once the file is open, uncomment:

<code>Include /private/etc/apache2/users/*.conf</code>

Enable PHP
	sudo nano /private/etc/apache2/httpd.conf

	Uncomment the below:
	LoadModule php5_module libexec/httpd/libphp5.so

	make sure index.php is on your DirectoryIndex
	edit /usr/local/php/php.ini to your liking (date/time, mysql)

	make refernce to: http://blog.g-design.net/post/137712472685/configuring-apache-and-php-after-updating-to-os-x
	https://getgrav.org/blog/mac-os-x-apache-setup-ssl

Install MySQL (to a look at maria DB)
	http://dev.mysql.com/downloads/mysql/
	 Mac OS X 10.11 (x86, 64-bit), DMG Archive

	 for "mysql " commad:
	 cd ; nano .bash_profile
	export PATH="/usr/local/mysql/bin:$PATH" (close file)
	source ~/.bash_profile


Python:
	brew update
	brew upgrade
	brew install python
	brew install python3

	python 2.X:
	python
	pip install

	3.x:
	python3
	pip3 install

Install asp.net
	http://docs.asp.net/en/latest/getting-started/installing-on-mac.html
	https://go.microsoft.com/fwlink/?LinkId=703940

    sudo npm install -g yo bower grunt-cli gulp
    npm install -g generator-aspnet
    npm install -g npm install jsdoc

    yo aspnet (for gulp, or alternatively for grunt:)
    yo aspnet --grunt

    to restore project dependances: dnu restore

    then run dnu build

    and finally to run server:  (based on info from commands > web in package.json)
    dnx web

    navigate to localhost:5000

    http://docs.asp.net/en/latest/tutorials/your-first-mac-aspnet.html

VS Code: (optional)

https://code.visualstudio.com/Docs/?dv=osx

https://marketplace.visualstudio.com/items?itemName=donjayamanne.python
Chec out teh optional installs

https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby
gem install ruby-debug-ide -v 0.4.32 or higher versions
gem install debase -v 0.2.1 or higher versions


https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular1

ADD in:

- mention: https://www.getpostman.com/app/postman-osx
- check out the post: https://getgrav.org/blog/mac-os-x-apache-setup-ssl

### Resources
+ https://donatstudios.com/PHP-in-OS-X-Yosemite
