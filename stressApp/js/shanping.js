
$(function(){
	var widths=$(window).width();
    var heights=$(window).height();

	$(".show-more-dian").on("touchstart",function(){
		$(this).next().slideToggle(200);
	})
	

//整屏
    var mySwiper= new Swiper (".swiper-container",{
            onInit: function(swiper){
                swiperAnimateCache(swiper);
                swiperAnimate(swiper);
            },
            onSlideChangeEnd: function(swiper){
                swiperAnimate(swiper);
            },
            pagination:".swiper-pagination"
        });



})





//	http://127.0.0.1:8020/stressApp/img/breakfast.jpg