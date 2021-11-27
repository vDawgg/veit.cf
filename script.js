var slideIndex = 0;
var slides = [];

$(document).ready(function onLoad() {
    var src = "/pics/slideshow/";
    var i = 0;
    for(i; i<12; i++) { //should really be done with api
        slides.push(src+i+".jpg");
    }
    $(".numbertext").text(1+"/"+slides.length);
});

function plusSlides(i){
    showSlides(slideIndex += i);
}

function showSlides(i) {
    if(i>=slides.length) {
        slideIndex=0;
    }
    if(i<0) {
        slideIndex=slides.length-1;
    }
    $("#img").attr("src", slides[slideIndex]);
    $(".numbertext").text(slideIndex+1+"/"+slides.length);
}