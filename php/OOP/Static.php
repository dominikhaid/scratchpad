 <?php
 class domain
 {
     protected static function getWebsiteName()
     {
         return 'W3Schools.com';
     }
 }

 class domainW3 extends domain
 {
     public $websiteName;
     public function __construct()
     {
         $this->websiteName = parent::getWebsiteName();
     }
 }

 $domainW3 = new domainW3();
 echo $domainW3->websiteName;
 ?>

 <?php
 class pi
 {
     public static $value = 3.14159;
     public function staticValue()
     {
         return self::$value;
     }
 }

 $pi = new pi();
 echo $pi->staticValue();
 ?>


 <?php
 class test
 {
     public static $value = 3.14159;
 }

 class x extends test
 {
     public function xStatic()
     {
         return parent::$value;
     }
 }

 // Get value of static property directly via child class
 echo x::$value;

 // or get value of static property via xStatic() method
 $x = new x();
 echo $x->xStatic();

?>
