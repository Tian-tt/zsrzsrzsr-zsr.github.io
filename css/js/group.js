$('.load').tap(function(){
	if($(this).css('background-color')=='rgb(241, 241, 241)'){
		$(this).css('background-color','#50BBDB')
		$('.moreDown').css('display','block')
		$(this).css('display','none')
		$('.content').css('margin-bottom','0')
	}else{
		$(this).css('background-color','#f1f1f1')
	}
})