/*$(document).ready(function()
 {
 	if (window.localStorage.getItem("usuario") != ""){

	    $("#lista").append("<p>Usuario: "+ window.localStorage.getItem("usuario") +"</p>");
	    var url="/pruebaphp/www/mostrar.php";
	    var datat = {us: localStorage.getItem("usuario"), pa: localStorage.getItem("password")};
	    console.log(datat);
	    $.post(url, datat, function(result){
	        $.each(result, function(i, field){
	            var usuario =field.username;
	            var correo =field.email;
	            $("#lista").append("<div id=\"" + usuario +"\" ><div>Usuario "+(i+1)+"<div class=\"usuario\" value=\"" + usuario + "\">" + usuario + "</div><p class=\"correo\" value=\"" + correo + "\">" + correo + "</p><button id=\"" + usuario + "\" onclick=\"edita(this.id)\"> Editar </button><button id=\"" + usuario + "\" onclick=\"elimina(this.id)\"> Eliminar </button></div></div>");
	        });
	    })
    }
});*/

$(document).ready(function()
 {
 	if (window.localStorage.getItem("usuario") != ""){
	    $("#lista").append("<p>Usuario: "+ window.localStorage.getItem("usuario") +"</p>");
	    var url="http://74.52.53.205/~portalvalparaiso/php/mostrar.php";
	    $.getJSON(url,function(result){
	        $.each(result, function(i, field){
	            var usuario =field.username;
	            var correo =field.email;
	            $("#lista").append("<div id=\"" + usuario +"\" ><div>Usuario "+(i+1)+"<div class=\"usuario\" value=\"" + usuario + "\">" + usuario + "</div><p class=\"correo\" value=\"" + correo + "\">" + correo + "</p><button id=\"" + usuario + "\" onclick=\"edita(this.id)\"> Editar </button><button id=\"" + usuario + "\" onclick=\"elimina(this.id)\"> Eliminar </button></div></div>");
	        });
	    });
    }
});