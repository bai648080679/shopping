//01 新闻滚动 
$(function(){
        var $this = $(".scrollNew");
		var scrollTimer;
		$this.hover(function(){
			  clearInterval(scrollTimer);
		 },function(){
		   scrollTimer = setInterval(function(){
						 scrollNews( $this );
					}, 3000 );
		}).trigger("mouseleave");
});

function scrollNews(obj){
   var $self = obj.find("ul:first"); 
   var lineHeight = $self.find("li:first").height(); //获取行高
   $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
         $self.css({marginTop:0}).find("li:first").appendTo($self); //appendTo能直接移动元素
   })
}

//02 模块展开和折叠 
$(function(){
	var i=0,x=0;
	$(".global_module h3").click(function(){
			$(this).next().slideToggle();
		    if(i==1){
		      $(this).next().next().children().attr("src","images/sec_up.png")
		      i--
		    }else if(i==0){
		    	$(this).next().next().children().attr("src","images/sec_down.png")
		    	i++
		    }
	})
	$(".list_main h3").click(function(){
			$(this).next().slideToggle();
		    if(x==1){
		      $(this).next().next().children().attr("src","images/sec_up.png")
		      x--
		    }else if(x==0){
		    	$(this).next().next().children().attr("src","images/sec_down.png")
		    	x++
		    }
	})
	$(".list_down").click(function(){
		$(this).children("ul").slideToggle()
	})
})
//图片点击左右滚动
$(function(){
        var $this = $(".sild_content");
		var scrollTimer;
		$this.hover(function(){
			  clearInterval(scrollTimer);
		 },function(){
		   scrollTimer = setInterval(function(){
						 scrollNews( $this );
					}, 3000 );
		}).trigger("mouseleave");
});

function scrollNews(obj){
   var $self = obj.find("ul:first"); 
   var lineHeight = $self.find("li:first").width()+30; //获取行高
   $self.animate({ "left" : -lineHeight +"px" }, 1000 , function(){
         $self.css({left:0}).find("li:first").appendTo($self); //appendTo能直接移动元素
   })
}
