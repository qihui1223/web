// JavaScript Document
/*轮播*/
$(function(){
	var clone = $('#list li').first().clone();//复制第一张图片
	$('#list').append(clone);//将复制的图片追加到最后
	var size = $('#list li').size();//获取图片的数量
	var i = 0;
	//向左轮播
	$('#prev').click(function(){
		i--;
		if(i == -1){
			$('#list').css({left: -(size-1)*478});
			i = size - 2;
			}
		$('#list').stop().animate({left: -i*478},500);
		$('#button li').eq(i).addClass('on').siblings().removeClass('on');
		});
	
	//向右轮播
	$('#next').click(function(){
		moveR();
		});
	function moveR(){
		i++;
		if(i == size){
			$('#list').css({left: 0});
			i = 1;
			}
		$('#list').stop().animate({left: -i*478},500);
		if(i == size - 1){
			$('#button li').eq(0).addClass('on').siblings().removeClass('on');
			}else{
				$('#button li').eq(i).addClass('on').siblings().removeClass('on');
				}
		}
	//图片滑过圆点
	$('#button li').mouseover(function(){
		var index = $(this).index();
		i = index;
		
		$('#list').stop().animate({left: -i*478},500);
		$(this).addClass('on').siblings().removeClass('on');
		});
	//定时器
	var t = setInterval(function(){
		moveR();
		},3000);	
	//停止滑动
	$('#container').hover(function(){
		clearInterval(t);},
		function(){	
		t = setInterval(function(){
			moveR();
			},3000);
			}
		);
	
	})
	
		


