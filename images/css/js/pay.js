
$("span").tap(function(){
	$(this).parent().siblings().find(".Selected").css("display","none")
})

$("span").tap(function(){
	$(this).parent().find(".Selected").css("display","block")
})

//倒计时
var tagetHour = 24,tagetMinute = 40,tagetSecond = 0
function time(){
	var date = new Date()
	var hour = date.getHours()
	var minute = date.getMinutes()
	var second = date.getSeconds()
	var showHour = tagetHour - hour
	var showMinute = tagetMinute - minute
	var showSecond = tagetSecond - second
	if (showSecond < 0) {
		showMinute--
		showSecond = showSecond + 60
	}

	if (showMinute < 0) {
		showSecond--
		showMinute = showMinute +60
	}

	if (showHour < 10) {
		$(".tm>p").eq(0).text("0" + showHour)
	} else {
		$(".tm>p").eq(0).text(showHour)
	}

	if (showMinute < 10) {
		$(".tm>p").eq(1).text("0" + showMinute)
	} else {
		$(".tm>p").eq(1).text(showMinute)
	}

	if (showSecond < 10) {
		$(".tm>p").eq(2).text("0" + showSecond)
	} else {
		$(".tm>p").eq(2).text(showSecond)
	}
}
time()
setInterval(time,200)