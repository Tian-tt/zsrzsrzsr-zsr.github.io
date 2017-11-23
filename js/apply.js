	// var money = $(this).parent().parent().children('.price').text().replace(/[^0-9]/ig,"")
	// var num = $(this).siblings('input').val()
	var money
	var num
$('.kind .order .less').tap(function(){
	 money = $(this).parent().parent().children('.price').text().replace(/[^0-9]/ig,"")
	 num = $(this).siblings('input').val()
	if(num>0){
		num--
		$(this).siblings('input').val(num)
		$(this).parent().parent().children('.price').text('￥'+money*num)
	}
})
$('.kind .order .more').tap(function(){
	 money = $(this).parent().parent().children('.price').text().replace(/[^0-9]/ig,"")
	 num = $(this).siblings('input').val()
	if(num>=0){
		num++ 
		$(this).siblings('input').val(num)
		$(this).parent().parent().children('.price').text('￥'+money*num)
	}
})
$('.time-join .right').tap(function(){
	 window.location.href="fill in_order.html"
})