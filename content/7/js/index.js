// JavaScript Document
$(".slide_01 .slide-content h1").addClass('animated fadeInDown');
$(".slide_01 .slide-content p").addClass('animated fadeInLeft');
$(".slide_01 .slide-content .m-btn").addClass('animated fadeInUp');



$(".slide_02 .c-img_01").addClass('animated bounceInDown');
$(".slide_02 .c-img_02").addClass('animated bounceInDown');
$(".slide_02 .c-img_03").addClass('animated bounceInDown');
$(".slide_02 h1").addClass('animated fadeInRight');
$(".slide_02 .slide_p01").addClass('animated fadeInRight');
$(".slide_02 .slide_p02").addClass('animated fadeInRight');
$(".slide_02 .slide_p03").addClass('animated fadeInRight');
$(".slide_02 .slide_p04").addClass('animated fadeInRight');
$(".slide_02 .m-btn").addClass('animated fadeInRight');

$(".slide_03 .slide-content h1").addClass('animated fadeInDown');
$(".slide_03 .slide-content p").addClass('animated fadeInUp');


/*$(document).ready(function(e) {
     var oDiv = document.getElementsByClassName(".section4");
	 var height = oDiv.offsetTop;
	  window.onscroll = function(){
			 var scrollTop =  document.body.scrollTop || document.documentElement.scrollTop;
			  if(scrollTop > 2000){
				  oDiv = myFun();
			  }
	  } 
});*/

/*$(window).scroll(function () {
var s4 = document.getElementById('#s4');
	var oDiv = document.getElementsByClassName(".section4");
    var h3_height = s4.offsetTop();
    $(window).scroll(function(){
        var this_scrollTop = $(this).scrollTop();
        if(this_scrollTop>h3_height ){
            s4 = myFun();
        }
    });	
});*/


$(function(){
    var h3_height = $("#s4").offset().top;
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(h3_height - scrollTop < 300){
             myFun();
        }
    });
	
	function myFun(){
	$(".section4 .s4_img_01").addClass('animated bounceInUp');
	$(".section4 .s4_img_02").addClass('animated bounceInUp');
	$(".section4 .s4_img_03").addClass('animated bounceInUp');
	$(".section4 .s4_img_04").addClass('animated bounceInUp');
	}

});


