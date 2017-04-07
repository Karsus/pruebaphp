$(document).ready(function()
 {
 	console.log("inicio final.js");
 var url="http://localhost/pruebaphp/www/mostrar.php";
 console.log("entro a url");
 $.getJSON(url,function(result){
 console.log(result);
 $.each(result, function(i, field){
 var usuario =field.username;
 var correo =field.email;
 console.log(i);
 $("#lista").append("<div id=\"" + i +"\" ><p>usuario "+ i+"</p><p>" + usuario + "</p><p>" + correo + "</p><a id=\"" + i + "\" onclick=\"edita(this.id)\"> Modificar </a><a id=\"" + i + "\" onclick=\"elimina(this.id)\"> Eliminar </a></div>");
 });
 });
 });

//169.254.51.52
//localhost/pruebaphp/www/


$('#agregarf').submit(function(){
    var postData = $('#agregarf').serialize();
    $.ajax({
        type: 'POST',
        data: postData,
        url: 'http://localhost/pruebaphp/www/agregar.php',
        success: function(data){
            console.log(data);
            alert('Se subio con exito');
            window.location.replace("index.html");
        },
        error: function(data){
            console.log(data);
            alert('Hubo un error');
        }
    });
    return false;
});


function edita(id){
	
}


function elimina(id){
	
}