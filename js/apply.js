
	var num
$('.kind .order .less').tap(function(){
	 num = $(this).siblings('input').val()
	if(num>0){
		num--
		$(this).siblings('input').val(num)
		$(this).parent().parent().children('.price').text('￥'+5280*num)
	}
})
$('.kind .order .more').tap(function(){
	 num = $(this).siblings('input').val()
	if(num>=0){
		num++ 
		$(this).siblings('input').val(num)
		$(this).parent().parent().children('.price').text('￥'+5280*num)
	}
})
$('.time-join .right').tap(function(){
	 window.location.href="fillinOrder.html"
})

$(".header a").click(function(event){
	event.preventDefault()
	history.back(1)
})