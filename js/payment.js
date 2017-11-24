$('.footer').tap(function(){
	window.location.href="index.html"
})

$(".header a:first-child").click(function(event){
	event.preventDefault()
	history.back(1)
})