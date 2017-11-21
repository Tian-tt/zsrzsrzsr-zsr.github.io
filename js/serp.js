$('.footer ul li').tap(function(){
	$(this).find('span').css('color','#50BBDB')
	$(this).siblings().find('span').css('color','#363636')
})