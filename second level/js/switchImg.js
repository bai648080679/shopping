/*点击左侧产品小图片切换大图*/
$(function(){
	$(".pro_detail_left ul li img").livequery("click",function(){ 
		  var imgSrc = $(this).attr("src");  //图片路径
		  var i = imgSrc.lastIndexOf(".");   //返回.最后出现的位置
		  var unit = imgSrc.substring(i);    //文件扩展名
		  imgSrc = imgSrc.substring(0,i);    //文件主名
		  var imgSrc_small = imgSrc + "_small"+ unit;
		  var imgSrc_big = imgSrc + "_big"+ unit;
		  $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
		  $("#smallImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
		  $("#thickImg").attr("href", imgSrc_big);
	});
});
//切换衣服颜色
$(function(){
	$(".color_change ul li img").click(function(){           
		  var imgSrc = $(this).attr("src");
		  var i = imgSrc.lastIndexOf(".");
		  var unit = imgSrc.substring(i);
		  imgSrc = imgSrc.substring(0,i);
		  var imgSrc_small = imgSrc + "_small"+ unit;
		  var imgSrc_big = imgSrc + "_big"+ unit;
		  $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
		  $("#smallImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
		  $("#thickImg").attr("href", imgSrc_big);
		  var alt = $(this).attr("alt");
		  var url = imgSrc+".html";
		  $(".pro_detail_left ul.imgList")
				.empty()
				.load(url);
	});
});



/*商品评分效果*/
$(function(){
	//通过修改样式来显示不同的星级
    $("ul.rating li a").click(function(){
	     var title = $(this).attr("title");
	     alert("您给此商品的评分是："+title);
		 var cl = $(this).parent().attr("class");
		 $(this).parent().parent().removeClass().addClass("rating "+cl+"star");
		 $(this).blur();//去掉超链接的虚线框
		 return false;
	})
})
/*店长推荐*/
$(function(){
        var $this = $(".sild_main");
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
//tab标签
$(function(){
	$(".tab_body ul li").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
		$(this).parent().siblings().children().eq($(this).index()).show().addClass("active")
		.siblings().hide().removeClass("active");
	})
})
//尺码  数量  总价 联动
$(function(){
	var $number =parseInt($("#number").text())-1;
	var $num = parseInt($("#num").text());
	$("#add").click(function(){
		$number++
		$("#number").text($number)
		$("#num").text($number*$num)
		console.log($num,$number)
	})
	$("#reduce").click(function(){
		if($number==0){
			alert("最少购买一件")
			$number=1
		}else{
		$number--
		$("#number").text($number)
		$("#num").text($number*$num)	
		}
	})
	$(".pro_size ul li").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
	})
})
//最终购买输出
$(function(){
    var $product = $(".pro_detail_right");
	$("#cart a").click(function(){
        var pro_name = $product.find("h4:first").text();
		var pro_size = $product.find(".pro_size ul li.active span").text();
		var pro_color = $(".color_change ul li img").attr("alt")
		var pro_num = $product.find("#number").text();
	    var pro_price = $product.find(".pro_price span").text();
		var dialog = " 感谢您的购买。\n您购买的\n"+
		        "产品是："+pro_name+"；\n"+
				"尺寸是："+pro_size+"；\n"+
				"颜色是："+pro_color+"；\n"+
				"数量是："+pro_num+"；\n"+
				"总价是："+pro_price +"元。";
		if( confirm(dialog) ){
			alert("您已经下单!");
		}
		return false;//避免页面跳转
	})
})
