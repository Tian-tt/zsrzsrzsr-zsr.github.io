	$(".slide-trigger").tap(function(){
		$(this).css("display","none")
		$(".slide").css("display","block")
	})

	$(".pic>img").tap(function(){
		var src = $(this).attr("src")	
		if (src == "images/baoxian_01.png") {
			$(this).attr("src","images/weixuan_04.png")		
		} else {
			$(this).attr("src","images/baoxian_01.png")	
		}
	})

