$(document).ready(function()
 {
 var url="http://localhost/pruebaphp/www/mostrar.php";
 $.getJSON(url,function(result){
 $.each(result, function(i, field){
 var usuario =field.username;
 var correo =field.email;
 $("#lista").append("<div id=\"" + usuario +"\" ><p>usuario "+ i+"</p><p>" + usuario + "</p><p>" + correo + "</p><a id=\"" + usuario + "\" class=\"modificar\" onclick=\"edita(this.id)\"href=\"\"> Modificar </a><button id=\"" + usuario + "\" onclick=\"elimina(this.id)\"> Eliminar </button></div>");
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

//$(function(){
$('.eliminar').click(function(){
    var del_user = $(this).attr('id');
    console.log(del_user);
    $.ajax({
        type: 'POST',
        url: 'http://localhost/pruebaphp/www/eliminar.php',
        data:{'del_user':del_user},
        success: function(data){
            console.log(data);
            alert('Se elimino con exito');
            window.location.replace("index.html");
        },
        error: function(data){
            console.log(data);
            alert('Hubo un error');
        }
    });
    return false;
});
//});

function elimina(user){
    console.log(user);
    var del_user = user;
    $.ajax({
        type: 'POST',
        url: 'http://localhost/pruebaphp/www/eliminar.php',
        data:{'del_user':del_user},
        success: function(data){
            console.log(data);
            alert('Se elimino con exito');
            window.location.replace("index.html");
        },
        error: function(data){
            console.log(data);
            alert('Hubo un error');
        }
    });
    return false;
}

function edita(id){
	
}


//onclick=\"elimina(this.id)\" 

