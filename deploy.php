
<?php
// Use in the "Post-Receive URLs" section of your GitHub repo.
if ( $_POST['payload'] ) {
  shell_exec( 'cd /var/www/_repo/ && git reset --hard HEAD && git pull' );
  shell_exec( 'cd _site;cp -fR * /var/www/jenntesolin.com/public_html');
}
?>
Hello World.