$(document).ready(function()
 {
 var url="http://74.52.53.205/~portalvalparaiso/php/mostrar.php";
 $.getJSON(url,function(result){
 $.each(result, function(i, field){
 var usuario =field.username;
 var correo =field.email;
 $("#lista").append("<div id=\"" + usuario +"\" ><div>Usuario "+(i+1)+"<div class=\"usuario\" value=\"" + usuario + "\">" + usuario + "</div><p class=\"correo\" value=\"" + correo + "\">" + correo + "</p><button id=\"" + usuario + "\" onclick=\"edita(this.id)\"> Editar </button><button id=\"" + usuario + "\" onclick=\"elimina(this.id)\"> Eliminar </button></div></div>");
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
        url: 'http://74.52.53.205/~portalvalparaiso/php/agregar.php',
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
        url: 'http://74.52.53.205/~portalvalparaiso/php/editar.php',
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
        url: 'http://74.52.53.205/~portalvalparaiso/php/eliminar.php',
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

function edita(user){
    var usuarioed = $("#"+user+ " .usuario").text();
    var correoed = $("#"+user+ " .correo").text();
    $('#user').val(usuarioed);
    $('#email').val(correoed);
    $('#userp').val(usuarioed);
    $('#emailp').val(correoed);
    document.getElementById("editarf").style.display = "block";
    window.scrollTo(0,document.body.scrollHeight);
}

//onclick=\"elimina(this.id)\" 

