const button = document.getElementById('btn');
button.addEventListener('mouseover', function () {
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});

$(".btn-primary").click(function(){
    $("h1").text("YOU ARE GAY");
    $("h1").css("font-size","10rem");
    $("img").addClass('d-none');
    $("button").hide();

})
