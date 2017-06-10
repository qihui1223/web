// JavaScript Document
/*大图轮播*/
$(function(){
	var clone = $('#mainleft .lunbo .pic li').first().clone();//复制第一张图片
	$('#mainleft .lunbo .pic').append(clone);//将第一张图片追加最后
	var size = $('#mainleft .lunbo .pic li').size();
	var i = 0;
	
	//向左轮播
	$('#pre').click(function(){
		i--;
		if(i == -1){
			$('#mainleft .lunbo .pic').css({left: -(size -1)*730});
			i = size - 2;
			}
		$('#mainleft .lunbo .pic').stop().animate({left: -i*730},500);
		$('.box li').eq(i).addClass('on').siblings().removeClass('on');
		});
		
	//向右轮播
	$('#next').click(function(){
		moveR();
		});
	function moveR(){
		i++;
		if(i == size){
			$('#mainleft .lunbo .pic').css({left: 0});
			i = 1;
			}
		$('#mainleft .lunbo .pic').stop().animate({left: -i*730},500);
		
		if(i == size - 1){
				$('.box li').eq(0).addClass('on').siblings().removeClass('on');
				}else{
					$('.box li').eq(i).addClass('on').siblings().removeClass('on');
					}
		}
		
	//鼠标滑过圆点
	$('.box li').mouseover(function(){
		var index = $(this).index();
		i = index;
		
		$('#mainleft .lunbo .pic').stop().animate({left: -i*730},500);
		$(this).addClass('on').siblings().removeClass('on');
		});
	//定时器
	var t = setInterval(function(){
		moveR();
		},3000);
		
	//鼠标滑过停止轮播	
	$('#mainleft .lunbo').hover(function(){
		clearInterval(t);},
		function(){
			t = setInterval(function(){
				moveR();
				},3000);
			});
	});
	
	
	

/*多图轮播*/
$(function(){
	var clones = $('#today .t-right ul li').first().clone();//复制第一组图片
	$('#today .t-right ul').append(clones);//将第一组图片追加最后
	var sizes = $('#today .t-right ul li').size();
	var i = 0;
	
	//向左轮播
	$('#btn-left').click(function(){
		i--;
		if(i == -1){
			$('#today .t-right ul').css({left: -(sizes -1)*1000});
			i = sizes - 2;
			}
		$('#today .t-right ul').stop().animate({left: -i*1000},500);
		});
		
	//向右轮播
	$('#btn-right').click(function(){
		moveR();
		});
	function moveR(){
		i++;
		if(i == sizes){
			$('#today .t-right ul').css({left: 0});
			i = 1;
			}
		$('#today .t-right ul').stop().animate({left: -i*1000},500);
		}
	});

/*轮播*/
$(function(){
	var clone = $('#clothes .slider .slider-body .slider-list li').first().clone();//复制第一张图片
	$('#clothes .slider .slider-body .slider-list').append(clone);//将第一张图片追加最后
	var size = $('#clothes .slider .slider-body .slider-list li').size();
	var i = 0;
	
	//向左轮播
	$('#clothes .slider-pre').click(function(){
		i--;
		if(i == -1){
			$('#clothes .slider .slider-body .slider-list').css({left: -(size -1)*439});
			i = size - 2;
			}
		$('#clothes .slider .slider-body .slider-list').stop().animate({left: -i*439},500);
		$('#clothes .slider .slider-nav li').eq(i).addClass('on').siblings().removeClass('on');
		});
		
	//向右轮播
	$('#clothes .slider-next').click(function(){
		move();
		});
	function move(){
		i++;
		if(i == size){
			$('#clothes .slider .slider-body .slider-list').css({left: 0});
			i = 1;
			}
		$('#clothes .slider .slider-body .slider-list').stop().animate({left: -i*439},500);
		
		if(i == size - 1){
				$('#clothes .slider .slider-nav li').eq(0).addClass('on').siblings().removeClass('on');
				}else{
					$('#clothes .slider .slider-nav li').eq(i).addClass('on').siblings().removeClass('on');
					}
		}
		
	//鼠标滑过圆点
	$('#clothes .slider .slider-nav li').mouseover(function(){
		var index = $(this).index();
		i = index;
		
		$('#clothes .slider .slider-body .slider-list').stop().animate({left: -i*439},500);
		$(this).addClass('on').siblings().removeClass('on');
		});
	//定时器
	var t = setInterval(function(){
		move();
		},3000);
		
	//鼠标滑过停止轮播	
	$('#clothes .slider').hover(function(){
		clearInterval(t);},
		function(){
			t = setInterval(function(){
				move();
				},3000);
			});
	});
	
/*轮播*/
$(function(){
	var clone = $('#hufu .slider .slider-body .slider-list li').first().clone();//复制第一张图片
	$('#hufu .slider .slider-body .slider-list').append(clone);//将第一张图片追加最后
	var size = $('#hufu .slider .slider-body .slider-list li').size();
	var i = 0;
	
	//向左轮播
	$('#hufu .slider-pre').click(function(){
		i--;
		if(i == -1){
			$('#hufu .slider .slider-body .slider-list').css({left: -(size -1)*339});
			i = size - 2;
			}
		$('#hufu .slider .slider-body .slider-list').stop().animate({left: -i*339},500);
		$('#hufu .slider .slider-nav li').eq(i).addClass('on').siblings().removeClass('on');
		});
		
	//向右轮播
	$('#hufu .slider-next').click(function(){
		move();
		});
	function move(){
		i++;
		if(i == size){
			$('#hufu .slider .slider-body .slider-list').css({left: 0});
			i = 1;
			}
		$('#hufu .slider .slider-body .slider-list').stop().animate({left: -i*339},500);
		
		if(i == size - 1){
				$('#hufu .slider .slider-nav li').eq(0).addClass('on').siblings().removeClass('on');
				}else{
					$('#hufu .slider .slider-nav li').eq(i).addClass('on').siblings().removeClass('on');
					}
		}
		
	//鼠标滑过圆点
	$('#hufu .slider .slider-nav li').mouseover(function(){
		var index = $(this).index();
		i = index;
		
		$('#hufu .slider .slider-body .slider-list').stop().animate({left: -i*339},500);
		$(this).addClass('on').siblings().removeClass('on');
		});
	//定时器
	var t = setInterval(function(){
		move();
		},3000);
		
	//鼠标滑过停止轮播	
	$('#hufu .slider').hover(function(){
		clearInterval(t);},
		function(){
			t = setInterval(function(){
				move();
				},3000);
			});
	});	

/*图片移动*/
$('#life').mouseover(function(){


	  	$('#life > ul').animate({'top':'-168px'});


	  })
/*tab切换*/
/*一楼*/
$('#clothes .tab li').mouseover(function(){
			var index=$(this).index();
			$('#clothes .main').eq(index).show().siblings('.hide').hide();
			$(this).addClass('tab-selected').siblings().removeClass('tab-selected');
	});
/*二楼*/
$('#hufu .tab li').mouseover(function(){
			var index=$(this).index();
			$('#hufu .main').eq(index).show().siblings('.hide').hide();
			$(this).addClass('tab-selected').siblings().removeClass('tab-selected');
	});



/*晒单*/
	$(function(){
		setInterval(function(){
			$('#share .shaidan ul li').last().css('height','0');
			$('#share .shaidan ul').prepend($('#share .shaidan ul li').last());
			$('#share .shaidan ul li').first().animate({'height':'100px'},500);
		},3000)
	})
