// JavaScript Document
$(function(){
    var $wd = $(window),
        $img = $('img'),
        imgTop,          //图片距离顶部高度
        scTop,             //滚动条高度
        wH;           //窗口高度
    wH = $wd.height();         //获得可视浏览器的高度
    $wd.scroll( function() {
        scTop = $wd.scrollTop();       //获取滚动条到顶部的垂直高度
        $img.each(function(){
            imgTop =  $(this).offset().top;
            if(imgTop - wH < scTop &&     //图片必须出现在窗口底部上面
                imgTop - wH > 0 &&        //排除首页图片
                $(this).attr('src') != $(this).data('url')){          //排除已经加载过的图片
                   $(this).attr({
                       src: $(this).data('url')
                   });
            }
        });
    });
});