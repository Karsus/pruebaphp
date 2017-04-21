$(document).ready(function(){
    if (window.localStorage.getItem("usuario") == ""){
        window.location.replace("index.html");
    };
});