// ActionScript Document
/*
涉及知识：addClass()、removeClass()、siblings()、index()】eq()、stop()、animate()、css()

    $("element").stop([clearQueue][,gotoEnd]);

    clearQueue：bool，代表是否要清空未执行的动画队列

    gotoEnd：bool，代表将正在执行的动画直接跳到末状态
*/
 /*var d=0; //当前点击的li的下标
    var z=0; //之前点击的li的下标
    $(".nav ul li").mousemove(function(){
        $(this).addClass("bg").siblings().removeClass("bg");
        d=$(this).index();
        //当前项>前一项,则前一项左移，立刻定位当前想到最右侧，再进行右移。
        if(d>z)
        {
            $(".con ul li").eq(z).stop(true).animate({left:"-465px"},500);
            $(".con ul li").eq(d).css("left","465px");
            $(".con ul li").eq(d).stop(true).animate({left:"0px"},500);
            z=d;
        }//否则相反
        else if(d<z)
        {
            $(".con ul li").eq(z).stop(true).animate({left:"465px"},500);
            $(".con ul li").eq(d).css("left","-465px");
            $(".con ul li").eq(d).stop(true).animate({left:"0px"},500);
            z=d;
        }

    })*/
/*无缝轮播的思想原理主要是，在需要轮播的图片后面克隆第一张图片，在从克隆图片返回第一张或者第一张图片返回到克隆图片时，使用CSS定位的方法 定位载有图片的父级容器ul,这样人的肉眼是看不出来的，没有晃眼的不良效果。*/ 
$(function(){
	var clone = $('#images li').first().clone();//克隆第一张图片
	$('#images').append(clone);//将克隆的图片放在后面
	
	var i = 0;
	var size = $('con li').size();//获取图片的长度
	$('.nav li').mouseover(function(){
		var index = $(this).index();
		i = index;
		$('#images').stop().animate({left: -i*465},500);
		$(this).addClass('bg').siblings().removeClass('bg');
		});
	});