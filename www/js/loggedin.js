$(document).ready(function(){
    if (window.localStorage.getItem("usuario") != ""){
        window.location.replace("content.html");
    };
});