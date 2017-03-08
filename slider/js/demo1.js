// JavaScript Document
/*无缝轮播的思想原理主要是，在需要轮播的图片后面克隆第一张图片，在从克隆图片返回第一张或者第一张图片返回到克隆图片时，使用CSS定位的方法 定位载有图片的父级容器ul,这样人的肉眼是看不出来的，没有晃眼的不良效果。*/
$(function(){
	var clone = $('#images li').first().clone();//克隆第一张图片
	$('#images').append(clone);//将克隆的追加在最后
	var i = 0;
	var size = $('#images li').size();//获取图片的长度
	//点击向左轮播
	$('#btn-l').click(function(){
		i--;
		if(i == -1){
			$('#images').css({left:-(size - 1)*478});
			i = size -2;
			}
			$('#images').stop().animate({left: -i*478},478);
			$('#num li').eq(i).addClass('on').siblings().removeClass('on');		     
		});
	//点击向右轮播
	$('#btn-r').click(function(){
		moveR();
		});
	//            向右轮播函数
            function moveR() {
                i++;
                if(i==size){
                    $("#images").css({left:0});
                    i=1;
                }
                $("#images").stop().animate({left:-i*478}, 478);
                if(i==size-1){
                    $("#num li").eq(0).addClass("on").siblings().removeClass("on");
                }else {
                    $("#num li").eq(i).addClass("on").siblings().removeClass("on");
                }
            }
		
	//鼠标滑过圆点
	$('#num li').hover(function(){
		var index = $(this).index();
		i = index;
		$('#images').stop().animate({left:-i*478},478);
		$(this).addClass('on').siblings().removeClass('on');
		});
		
	//定时自动轮播
	var t = setInterval(function(){
		moveR();
		},1500);
	//鼠标滑动图片自动停止轮播
	$('#nav').hover(function(){
		clearInterval(t);},
		function(){
			t = setInterval(function(){
				moveR();
				},1500);
			}
		);
	});