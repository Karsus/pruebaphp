//169.254.51.52
//localhost/pruebaphp/www/

$('#login').submit(function(){
    var postData = $('#login').serialize();
    console.log(postData);
    $.ajax({
        type: 'POST',
        data: postData,
        url: 'http://74.52.53.205/~portalvalparaiso/php/login.php',
        success: function(data){
            if (data != '')
            {
                window.localStorage.setItem("usuario", data.substr(0,data.indexOf(' ')));
                window.localStorage.setItem("password", data.substr(data.indexOf(' ')+1));
                window.location.replace("content.html");
            }else{
                alert('Usuario o contraseña incorrectos');
            }
            //alert('Se subio con exito');
        },
        error: function(data){
            console.log(data);
            alert('Hubo un error en la conexion');
        }
    });
    return false;
});

$('#agregarf').submit(function(){
    var postData = $('#agregarf').serialize();
    $.ajax({
        type: 'POST',
        data: postData,
        url: 'http://74.52.53.205/~portalvalparaiso/php/agregar.php',
        success: function(data){
            console.log(data);
            //alert('Se subio con exito');
            window.location.replace("content.html");
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
            window.location.replace("content.html");
        },
        error: function(data){
            console.log(data);
            alert('Hubo un error');
        }
    });
    return false;
});

function cerrarsesion(){
    window.localStorage.clear();
    window.localStorage.setItem("usuario", "");
    window.location.replace("index.html");
}

function elimina(user){
    var del_user = user;
    $.ajax({
        type: 'POST',
        url: 'http://74.52.53.205/~portalvalparaiso/php/eliminar.php',
        data:{'del_user':del_user},
        success: function(data){
            //alert('Se elimino con exito');
            window.location.replace("content.html");
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

