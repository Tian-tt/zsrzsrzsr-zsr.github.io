$('.akela .text-content .link a').tap(function(){
	$(this).attr('href','akela.html')
})
$('.akela .text-content .cont').tap(function(){
	window.location.href="group.html"
})
$('.contaner .date .link').tap(function(){
	window.location.href="apply.html"
})
$('.footer ul .heart').tap(function(){
	$('.footer ul .phone').find('span').css('color','#666')
	$('.footer ul .phone').find('img').attr('src','images/phone_03.png')
	$(this).find('span').css('color','#50bbdb')
	$(this).find('img').attr('src','images/heart-change_03.png')
})
$('.footer ul .phone').tap(function(){
	$('.footer ul .heart').find('span').css('color','#666')
	$('.footer ul .heart').find('img').attr('src','images/heart_03.png')
	$(this).find('span').css('color','#50bbdb')
	$(this).find('img').attr('src','images/phone-change_03.png')
})
$('.footer ul .join').tap(function(){
	window.location.href="apply.html"
})