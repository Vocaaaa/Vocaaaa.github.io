$(document).scroll(function() {

    mouse = document.getElementsByClassName("mouse_scroll");

    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y >= 10) {
            mouse.style.display = "none";
        } else {
            mouse.style.display = "block";
        }
    };

    window.addEventListener("scroll", myScrollFunc);
});