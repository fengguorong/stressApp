document.addEventListener("DOMContentLoaded",function(){
	var widths=$(window).width();
    var heights=$(window).height();
	function resize(origin){
        var html= document.getElementsByTagName("html")[0];
        html.style.fontSize=widths/origin*100+"px";
    }
    resize(750);
})