// JavaScript Document
$(function(){
	var clone = $('#images li').first().clone();
	$('#images').append(clone);
	var i = 0;
	var size = $('#images li').size();
	
	//向左移动
	$('.btn-left .btn').click(function(){
		i--;
		if(i == -1){
			$('#images').css({left: -(size-1)*800});
			i = size -2;	
			}
			$('#images').stop().animate({left:-i*800},800);
		});
		
	//向右轮播
	$('.btn-right .btn').click(function(){
		moveR();
		});
		
	function moveR(){
		i++;
		if(i==size){
			$("#images").css({left:0});
			i=1;
		}
		$("#images").stop().animate({left:-i*800}, 800);
		}
	})


$(function(){
	var clone = $('.s_img li').first().clone();
	$('.s_img').append(clone);
	var i = 0;
	var size = $('.s_img li').size();
	
	function move(){
		i++;
		if(i == size){
			$('.s_img').css({left:0});
			i = 1;
			}
		$('.s_img').stop().animate({left:-i*530},530);
		if(i==size-1){
			$(".s_num li").eq(0).addClass("active").siblings().removeClass("active");
			}else {
			$(".s_num li").eq(i).addClass("active").siblings().removeClass("active");
			}	
		}
		
	$('.s_num li').hover(function(){
		var index = $(this).index();
		i = index;
		$('.s_img').stop().animate({left:-i*530},530);
		$(this).addClass('active').siblings().removeClass('active');
		});
	
	//定时轮播
	var t = setInterval(function(){
		move();
		},1500);
	
	//清除定时
	$('.s_slide').hover(function(){
		clearInterval(t);},
		
		function(){
			t = setInterval(function(){
				move();
				},1500);
			});
		
		
	})	
	