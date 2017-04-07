<?php
	include("db.php");
	/*Datos*/
	mysql_select_db($database, $con) or die ("Could not connect: " . mysql_error());

	$user = $_POST['user'];
	$email = $_POST['email'];

	$sql = "DELETE * FROM usuarios WHERE username = '' AND email = '' ";

	mysql_query($sql) or die ("No se pudo eliminar".mysql_error());

	mysql_close($con);
?>