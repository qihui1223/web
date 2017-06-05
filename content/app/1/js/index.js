// JavaScript Document

/*banner*/
var mySwiper = new Swiper('.banner-slide',{
    pagination: '.banner-pagination',  /*分页器*/
    loop:true, /*形成环路*/
    grabCursor: true, /*设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。*/
    paginationClickable: true, /*分页点击切换*/
	observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true,//修改swiper的父元素时，自动初始化swiper
	
	/*自动轮播*/
	autoplay: 1000,
	speed: 500,
	autoplayDisableOnInteraction : false,
  })