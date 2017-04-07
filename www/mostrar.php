<?php
include "db.php";
$data=array();
$info = "SELECT * from usuarios";
$q=mysql_query($info);
while ($row=mysql_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);
?>