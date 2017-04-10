$(document).ready(function()
 {
 var url="http://localhost/pruebaphp/www/mostrar.php";
 $.getJSON(url,function(result){
 $.each(result, function(i, field){
 var usuario =field.username;
 var correo =field.email;
 $("#lista").append("<div id=\"" + usuario +"\" ><div id=\""+i+"\">Usuario "+i+"<div class=\"usuario\" value=\"" + usuario + "\">" + usuario + "</div><p class=\"correo\" value=\"" + correo + "\">" + correo + "</p><button id=\"" + usuario + "\" onclick=\"edita(this.id, "+i+")\"> Editar </button><button id=\"" + usuario + "\" onclick=\"elimina(this.id)\"> Eliminar </button></div></div>");
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
            //alert('Se subio con exito');
            window.location.replace("index.html");
        },
        error: function(data){
            console.log(data);
            alert('Hubo un error');
        }
    });
    return false;
});

$('#editarf').submit(function(){
    var updData = $('#editarf').serialize();
    $.ajax({
        type: 'POST',
        url: 'http://localhost/pruebaphp/www/editar.php',
        data: updData,
        success: function(data){
            //alert('Se edito con exito');
            window.location.replace("index.html");
        },
        error: function(data){
            console.log(data);
            alert('Hubo un error');
        }
    });
    return false;
});

function elimina(user){
    var del_user = user;
    $.ajax({
        type: 'POST',
        url: 'http://localhost/pruebaphp/www/eliminar.php',
        data:{'del_user':del_user},
        success: function(data){
            //alert('Se elimino con exito');
            window.location.replace("index.html");
        },
        error: function(data){
            console.log(data);
            alert('Hubo un error');
        }
    });
    return false;
}

function edita(user, num){
    var usuarioed = $("#"+user+ " .usuario").text();
    var correoed = $("#"+user+ " .correo").text();
    $('#user').val(usuarioed);
    $('#email').val(correoed);
    $('#userp').val(usuarioed);
    $('#emailp').val(correoed);
    window.scrollTo(0,document.body.scrollHeight);
}

//onclick=\"elimina(this.id)\" 

