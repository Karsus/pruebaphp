$(document).ready(function()
 {
 var cont = 0;
 	console.log("inicio final.js");
 var url="http://localhost/Praxis/www/mostrar.php";
 console.log("entro a url");
 $.getJSON(url,function(result){
 console.log(result);
 $.each(result, function(i, field){
 var usuario=field.username;
 var correo=field.email;
 cont = cont+1;
 $("#lista").append("<div><p>usuario "+ cont+"</p><p>" + usuario + "</p><p>" + correo + "</p></div>");
 });
 });
 });

//169.254.51.52