<?php
	include("db.php");
	/*Datos*/
	mysql_select_db($database, $con) or die ("Could not connect: " . mysql_error());

	$user = $_POST['del_user'];

	$sql = "DELETE FROM usuarios WHERE username = '$user'";

	mysql_query($sql) or die ("No se pudo eliminar".mysql_error());

	mysql_close($con);
?>