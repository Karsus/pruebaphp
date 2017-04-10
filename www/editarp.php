<?php
	include("db.php");
	/*Datos*/
	mysql_select_db($database, $con) or die ("Could not connect: " . mysql_error());

	$user = $_POST['user'];
	$email = $_POST['email'];
	$userp = $_POST['userp'];
	$emailp = $_POST['emailp'];

	$sql = "UPDATE usuarios set  username='31', email='67' WHERE username = '30'";

	mysql_query($sql) or die ("No pude seleccionar".mysql_error());

	mysql_close($con);
?>