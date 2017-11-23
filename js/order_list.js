
		$(".nav>div").tap(function(){
			$(this).siblings().children("div").css("display","none")
			$(this).children("div").toggle()
		})

		$('.footer > select').change(function(){
			var val = $(this).val()
			var list = {
				"取消":"待出行", 
				"点评":"待评价", 
				"查看":"已取消", 
				"付款":"待支付"
			}
			$(this).siblings("span").text(list[val]);
		})

		$(".main").tap(function(){
			window.location.href = "orderDetails.html"
		})

	