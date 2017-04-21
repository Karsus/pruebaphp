<?php
	include("db.php");
	session_start();
	/*Datos*/
	mysql_select_db($database, $con) or die ("Could not connect: " . mysql_error());

	$userl = $_POST['user'];
	$emaill = $_POST['email'];

	$sql = "SELECT username FROM usuarios /*(Nombre de la Tabla) */WHERE username = '$userl' AND email = '$emaill'";
	$result = mysql_query($sql) or die ("No pude seleccionar".mysql_error());
	$count = mysql_num_rows($result);

	if($count == 1) {
         $_SESSION['login_user'] = $userl;
         exit($_SESSION['login_user']);
      }else {
         exit($error = "Tu Nombre de Usuario o Contraseña es invalido");
      }
	mysql_close($con);
?>