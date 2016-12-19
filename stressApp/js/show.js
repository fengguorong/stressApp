$(function(){
	var widths=$(window).width();
    var heights=$(window).height();

	$(".show-more-dian").on("touchstart",function(){
		$(this).next().slideToggle(200);
	})
})
