$(function(){
	var widths=$(window).width();
    var heights=$(window).height();
   /* $(".swiper-slidess").css({"height":heights+"px","width":widths+"px"});*/


    
    
//添加规划
    $(".note-create").on("touchstart",function(){
    	$(".note-input").css("display","block")
    })

    $(".note-input-box>input").eq(1).on("touchstart",function(){
    	$(".note-input").css("display","none")
    })
    $(".note-input-box>input").eq(2).on("touchstart",function(){
    	$(".note-input").css("display","none")
    	var li=document.createElement("li");
    	li.innerHTML=$(".note-write>li:eq(0)")[0].innerHTML;
    	$(".note-write").append(li);
    })
//修改规划内容

//删除规划
    $(".note-write").delegate(".note-del","touchstart",function(){
    	$(this).closest('li').css("display","none");
    	// alert(this)
    })

    
    
    
    
    
    
    
})
