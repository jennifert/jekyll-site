
<?php
// Gitweb hook.

if ( $_POST['payload'] ) {
  shell_exec( 'cd /var/www/_repo/ && git reset --hard HEAD && git pull' ); // Taken from: https://gist.github.com/oodavid/1809044
  shell_exec( 'cp -fR deploy.php /var/www/jenntesolin.com/public_html/');
  shell_exec( 'cd _site;cp -fR * /var/www/jenntesolin.com/public_html');
}
?>
Hello. :)