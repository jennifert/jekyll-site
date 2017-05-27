
<?php
// Use in the "Post-Receive URLs" section of your GitHub repo.
// Taken from: https://gist.github.com/oodavid/1809044
if ( $_POST['payload'] ) {
  shell_exec( 'cd /var/www/_repo/ && git reset --hard HEAD && git pull' );
  shell_exec( 'cp -fR deploy.php /var/www/jenntesolin.com/public_html/');
  shell_exec( 'cd _site;cp -fR * /var/www/jenntesolin.com/public_html');
}
?>
Hello.