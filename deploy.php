
<?php
if ( $_POST['payload'] ) {
  shell_exec( 'cd /var/www/_repo/ && git reset --hard HEAD && git pull');

  shell_exec( 'cp -fR deploy.php /var/www/jenntesolin.com/public_html/');
  shell_exec( 'cd _site;cp -fR * /var/www/jenntesolin.com/public_html/');
  shell_exec( 'cd /var/www/jenntesolin.com/public_html/;cp search.json search/search.json'); //change to move when new search up.
}
?>
Hello world.