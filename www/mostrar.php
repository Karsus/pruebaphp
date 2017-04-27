<?php
include "db.php";
$data=array();
$info = "SELECT * from usuarios";
$q=mysql_query($info);
while ($row=mysql_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);

/*include "db.php";
$data=array();
$userlogged = $_POST['us'];
$emaillogged = $_POST['pa'];
$sql = "SELECT username FROM usuarios WHERE username = '$userlogged' AND email = '$emaillogged'";
	$result = mysql_query($sql) or die ("No pude seleccionar".mysql_error());
	$count = mysql_num_rows($result);
	if($count == 1) {
		$info = "SELECT * from usuarios"; 
		$q=mysql_query($info);
		while ($row=mysql_fetch_object($q)){
	 		$data[]=$row;
		}
		exit($_POST['user'];);
    }else {
         exit($error = "");
    }*/
?>