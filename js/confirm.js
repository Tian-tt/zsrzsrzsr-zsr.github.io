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

	//总费用计算
	$(".pic img").tap(function(){
	var src = $(this).attr("src")
	var spanText = $(".footer span").text()
	if (src == "images/weixuan_04.png") {
		$(".footer span").text(spanText - 177*2)
	} else {
		$(".footer span").text(Number(spanText) + 177*2)
	}
})


