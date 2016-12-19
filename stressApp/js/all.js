
$(function(){
	var widths=$(window).width();
    var heights=$(window).height();

	$(".show-more-dian").on("touchstart",function(){
		$(this).next().slideToggle(200);
	})
	
	
	var movex=$(".all-box>.all-list").outerWidth();
	var marginL=0;http://127.0.0.1:8020/stressApp/img/breakfast.jpg
		var num=0;
        $("body").mousedown(function(e){
			e.preventDefault();
        })
        $("body").mousemove(function(e){
			e.preventDefault();
        })	
//		$(".all-box").css({"width":5*widths+"px","height":heights+"px"});
//		$("img").css({"width":widths+"px"});
		touch.on("body","dragstart",".all-box",function(e){
			$(".all-box").css({
				transition:"null"
			})
			marginL=parseInt($(".all-box").css("marginLeft"))?parseInt($(".all-box").css("marginLeft")):0;
		})
		touch.on("body","drag",".all-box",function(e){
			$(".all-box").css({
				marginLeft:marginL+e.x
			})
		})
		touch.on("body","dragend",".all-box",function(e){
			if(Math.abs(e.x)>50){
				if(e.direction=="left"){
					num++;
					if(num==$("img").length){
						num=$("img").length-1;
					}
				}else if(e.direction=="right"){
					num--;
					if(num==-1){
						num=0;
					}
				}
				$(".all-box").css({
					marginLeft:-num*movex,
					transition:"margin 1s ease"
				})
			}else{
				// alert(num)
				$(".all-box").css({
					marginLeft:-num*movex,
					transition:"margin-left 1s ease"
				})
			}
		})
})





//	http://127.0.0.1:8020/stressApp/img/breakfast.jpg