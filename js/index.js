$('.nav .driving').tap(function(){	
	$('.nav .interact-active').addClass('interact')
	$('.nav .interact-active').removeClass('interact-active')
	$('.nav .driving-active').addClass('driving')
	$('.nav .driving-active').removeClass('driving-active')
})
$('.nav .interact').tap(function(){
	$(this).addClass('interact-active')
	$('.nav .driving').addClass('driving-active')
	$('.nav .driving').removeClass('driving')
	$(this).removeClass('interact')
})
$('.banner>a').tap(function(){
	var Val = $('.banner>input').val().trim()
	if(Val.indexOf('南京')!=-1){
		$('.banner>a').tap(function(){
			window.location.href="C:\Users\Administrator\Desktop\自驾游App/serp.html"
		})
	}else{
		alert('推荐南京')
	}
})