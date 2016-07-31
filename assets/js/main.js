if ('addEventListener' in window) {
    window.addEventListener('load', function () {
        document.body.className = document.body.className.replace(/\bloading\b/, '');
    });
    document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
    $(".social").addClass("animated zoomIn");
    $("#resume").addClass("animated slideInUp");
    $(".avatar").addClass("animated tada");
    $("#hi").addClass("animated zoomInUp");
    $("#main").addClass("animated flipInY");
}

document.getElementById("res_but").disabled = true;

 function enableBtn(){
    document.getElementById("res_but").disabled = false;
   }