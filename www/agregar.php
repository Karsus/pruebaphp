<?php
	include("db.php");
	/*Datos*/
	mysql_select_db($database, $con) or die ("Could not connect: " . mysql_error());

	$user = $_POST['user'];
	$email = $_POST['email'];

	$sql = "INSERT INTO usuarios /*(Nombre de la Tabla) */(username, email) VALUES ('$user', '$email')";

	mysql_query($sql) or die ("No pude seleccionar".mysql_error());

	mysql_close($con);
?>
