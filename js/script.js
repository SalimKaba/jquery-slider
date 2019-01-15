$(document).ready(function(){

$('.next').on('click', next);

$('.prev').on('click', function(){
  var currentImg = $('.active');
  var prevImg = currentImg.prev();

  if(prevImg.length){
    currentImg.removeClass('active').css('z-index', -10);
    prevImg.addClass('active').css('z-index', 10);
  }
  else{
    currentImg.removeClass('active').css('z-index', -10);
    $("#3").addClass('active').css('z-index', 10);
  };
});
function next(){

    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
    else {
      currentImg.removeClass('active').css('z-index', -10);
      $("#1").addClass('active').css('z-index', 10);
    }
}
var myLoop = function () {
  setTimeout(function () { next(); myLoop(); } , 1000);
}
myLoop();
});


/* alt

jQuery(document).ready(function ($) {


let myVar;

$("#checkbox").change(function() {

if(this.checked) {

myVar = setInterval(moveRight, 3000);

}else{

clearInterval(myVar);

}

});



var slideCount = $("#slider ul li").length;

var slideWidth = $("#slider ul li").width();

var slideHeight = $("#slider ul li").height();

var sliderUlWidth = slideCount * slideWidth;



$("#slider").css({ width: slideWidth, height: slideHeight });



$("#slider ul").css({ width: sliderUlWidth, marginLeft: - slideWidth });



$("#slider ul li:last-child").prependTo("#slider ul");



function moveLeft() {

$("#slider ul").animate({

left: + slideWidth

}, 200, function () {

$("#slider ul li:last-child").prependTo("#slider ul");

$("#slider ul").css("left", "");

});

};



function moveRight() {

$("#slider ul").animate({

left: - slideWidth

}, 200, function () {

$("#slider ul li:first-child").appendTo("#slider ul");

$("#slider ul").css("left", "");

});

};



$(".prev").click(function () {

moveLeft();

});



$(".next").click(function () {

moveRight();

});



});



*/
