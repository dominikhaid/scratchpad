<?php
$age = ['Peter' => 35, 'Ben' => 37, 'Joe' => 43];

echo json_encode($age);
?>

<?php
$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

$obj = json_decode($jsonobj);

echo $obj->Peter;
echo $obj->Ben;
echo $obj->Joe;

?>
