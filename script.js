var slideIndex = 0;
var slides = [];

$(document).ready(function onLoad() {
    var src = "/pics/slideshow/";
    var i = 0;
    for(i; i<12; i++) { //api?
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

function showLanguages() {
    if("none"==$(".progressWrapperLanguages").css("display")) {
        $("#languages").text("Languages \u25B3");
        $(".progressWrapperLanguages").css("display", "block");
        $("#java").css({"width":"300px", "background":"red"})
        $("#js").css({"width":"200px", "background":"orange"});
        $("#python").css({"width":"150px", "background":"orange"});
    } else {
        $("#languages").text("Languages \u25BD");
        $(".progressWrapperLanguages").css("display", "none");
    }
}

function showIDEs() {
    if("none"==$(".progressWrapperIdes").css("display")) {
        $("#ides").text("IDEs \u25B3");
        $(".progressWrapperIdes").css("display", "block");
        $("#intellij").css({"width":"280px", "background":"red"});
        $("#vscode").css({"width":"250px", "background":"red"});
        $("#eclipse").css({"width":"100px", "background":"yellow"});
    } else {
        $("#ides").text("IDEs \u25BD");
        $(".progressWrapperIdes").css("display", "none");
    }
}

function showOther() {
    if("none"==$(".progressWrapperOther").css("display")) {
        $("#other").text("Other \u25B3");
        $(".progressWrapperOther").css("display", "block");
        $("#linux").css({"width":"250px", "background":"red"});
        $("#spring").css({"width":"230px","background":"orange"});
        $("#docker").css({"width":"180px", "background":"orange"});
        $("#react").css({"width":"130px", "background":"yellow"});
    } else {
        $("#other").text("Other \u25BD");
        $(".progressWrapperOther").css("display", "none");
    }
}