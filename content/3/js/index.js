// JavaScript Document

$(function(){
	//窗口宽度在1024以上时鼠标经过显示详细页
    rewiidth();
    $(window).resize(function(){
        rewiidth();
    });
    function rewiidth() {
        if ($(window).width() > 1024) {
            $(".nav").mouseenter(function () {
                $(".nav-content").show().animate({"bottom": "-210px"}, 100);
            });
            $(".nav-main").mouseleave(function () {
                $(".nav-content").hide().css("bottom", "-212px");
            });
        }
    }
	
	 //鼠标经过顶部导航栏类名，详细信息页高亮显示
    var navmainli = $(".nav").children();
    var mainbodyli = $(".navcon").children();
    $(navmainli).each(function(){
        var index = $(this).index();
        $(this).mouseenter(function(){
            $(mainbodyli).eq(index).addClass("on");
        }).mouseleave(function () {
            $(mainbodyli).removeClass("on");
        })
    });
    //鼠标经过详细页，当前高亮,导航栏类名高亮
    $(mainbodyli).each(function(){
        var index = $(this).index();
        $(this).mouseenter(function(){
            $(this).addClass("on");
            $(navmainli).eq(index).addClass("on");
        }).mouseleave(function () {
            $(this).removeClass("on");
            $(navmainli).removeClass("on");
        })
    });
	
	 //鼠标经过放大镜显示input框
    $(".nav-search").mouseenter(function () {
        $(".searchbox").show().animate({"bottom": "-40px"}, 10);
    });
    $(".searchbox").mouseleave(function () {
        $(".searchbox").hide().css("bottom", "-50px");
    });
	
	
	
	//侧边广告栏点击热点推荐显示具体内容，鼠标离开具体内容隐藏
	$('.text').click(function(){
		$('.hotTitle').animate({"left":"0"},300);
		});
	$('.hotTitle').mouseleave(function(){
		$('.hotTitle').animate({"left":"-715px"},300);
		});
	//窗口滚动显示回到顶部按钮,位于顶部时按钮消失
	$(window).scroll(function(){
		var scrolltop = $(window).scrollTop();
		scrolltop > 0 ? $('.backTop').fadeIn():$('.backTop').fadeOut();
		});	
	//点击回到顶部	
	$('.backTop').click(function(){
		$('body,html').animate({scrollTop:0},300);
			return false;
			});
		

	})