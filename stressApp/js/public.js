document.addEventListener("DOMContentLoaded",function(){
	var widths=$(window).width();
    var heights=$(window).height();
	function resize(origin){
        var html= document.getElementsByTagName("html")[0];
        html.style.fontSize=widths/origin*100+"px";
    }
    resize(750);
    
    // 移动端固定定位的问题
    var myScroll = new IScroll('#wrapper', {
        bounceEasing: 'elastic',
        bounceTime: 1200 ,
        mouseWheel:true,
        bounce:true,
        click:true
    });
    myScroll.on("scrollStart",function(){
        if(myScroll.y==myScroll.maxScrollY){
            down();
        }
        if(myScroll.y==0){
//          up();
        }
    })
    var upEle=$(".up")[0];
    var downEle=$(".down")[0];
    var scroller=$(".scroller")[0];
    function up(){
        upEle.style.display="block";
        setTimeout(function(){
            upEle.style.display="none";;
        },1000)
    }
    function down(){
        downEle.style.display="block";
        myScroll.refresh();
        setTimeout(function(){
            var news=document.createElement("div");
            news.style.cssText="font-size:0.3rem;text-align:center;";
            news.innerHTML="update内容";
            $("#scroller").append(news);
            downEle.style.display="none";
            myScroll.refresh();
        },2000)
    }
})