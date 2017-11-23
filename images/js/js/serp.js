$('.footer ul li').tap(function(){
	$(this).find('span').css('color','#50BBDB')
	$(this).siblings().find('span').css('color','#363636')
})
$('.footer ul li:first-child').tap(function(){
	$('.mask').css('display','block')
})
$('.mask .masking .mask-top a').tap(function(){
	$('.mask').css('display','none')
})
$('.mask .masking .choose .right ul li img').tap(function(){
	$(this).parents('li').siblings('li').find('img').attr('src','images/choose-2_03.png')
	$(this).parents('li').siblings('li').find('a').css('color','#333')
	$(this).attr('src','images/choose-1_03.png')
	$(this).parent().find('a').css('color','#50bbdb')
})
$('.mask .masking .choose .left ul li').tap(function(){
	$(this).siblings().css('background-color','#ebebeb')
	$(this).siblings().find('a').css('color','#333')
	$(this).css('background-color','#fff')
	$(this).find('a').css('color','#50bbdb')
})