 <?php
// Get current directory
echo getcwd() . "<br>";

// Change directory
chdir("images");

// Get current directory
echo getcwd();
?> 

 <?php
$dir = "/images/";

// Open a directory, and read its contents
if (is_dir($dir)){
  if ($dh = opendir($dir)){
    while (($file = readdir($dh)) !== false){
      echo "filename:" . $file . "<br>";
    }
    closedir($dh);
  }
}
?>

 <?php
// Change root directory
chroot("/path/to/chroot/");

// Get current directory
echo getcwd();
?>
