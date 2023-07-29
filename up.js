//animasi text jumbotron
var animation = document.getElementById("home");

setInterval(function () {
    animation.style.color = "#140352";

    setTimeout(function () {
        animation.style.color = "white";
    }, 500);
}, 1000);

//alert web
alert("Selamat Datang di Caffe Mararak Nan Jaya, klik OK untuk tetap Lanjut");