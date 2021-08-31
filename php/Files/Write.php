 <?php
 ($myfile = fopen('newfile.txt', 'w')) or die('Unable to open file!');
 $txt = "John Doe\n";
 fwrite($myfile, $txt);
 $txt = "Jane Doe\n";
 fwrite($myfile, $txt);
 fclose($myfile);
 ?>

 <?php
 ($myfile = fopen('newfile.txt', 'w')) or die('Unable to open file!');
 $txt = "Mickey Mouse\n";
 fwrite($myfile, $txt);
 $txt = "Minnie Mouse\n";
 fwrite($myfile, $txt);
 fclose($myfile);

?>
