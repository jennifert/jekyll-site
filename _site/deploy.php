
<?php
if ( $_POST['payload'] ) {
  shell_exec( 'cd /var/www/_repo/ && git reset --hard HEAD && git pull' ); // Taken from: https://gist.github.com/oodavid/1809044
}
?>
Hello :)