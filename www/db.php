<?php 
	$hostname = "74.52.53.205";
	$username = "portalva_testpgu";
  	$password = "1?.wT%k[l=*!";
  	$database = "portalva_testpgjs";
 
	$con = mysql_connect($hostname, $username, $password) or die ("Could not connect: " . mysqli_error());
	mysql_select_db($database, $con);
 ?>