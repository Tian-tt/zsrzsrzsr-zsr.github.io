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
$('.search-link').tap(function(){
	var Val = $('.search').val().trim()
	if(Val.indexOf('南京')!=-1){
			$(this).attr('href','serp.html')
			console.log($(this).attr('href'))
		$('search-link').tap(function(){
			
		})
	}else{
		alert('推荐南京地区')
	}
})
$('.banner .point >a').tap(function(){
	$(this).css('backgroundColor','#50bbdb')
	$(this).siblings().css('backgroundColor','#ccc')
	var ind = $(this).index()
	if(ind == 0){
		$('.banner>img').attr('src','images/area-banner_03.png')
	}else if(ind == 1){
		$('.banner>img').attr('src','images/banner_02.jpg')
	}else{
		$('.banner>img').attr('src','images/banner_03.jpg')
	}
})
$('.merch').tap(function(){
	window.location.href="detail.html"
})
$('.footer a').tap(function(){
	$(this).find('i').css('color','#5cc0dd')
	$(this).find('span').css('color','#5cc0dd')
	$(this).siblings().find('i').css('color','#7f7f7f')
	$(this).siblings().find('span').css('color','#7f7f7f')
})
$('.more1').tap(function(){
	console.log(1)
	$(this).css('background-color','#50BBDB')
	$('.more1Down').css('display','block')
	$(this).css('display','none')
})
$('.more2').tap(function(){
	$(this).css('background-color','#50BBDB')
	$('.more2Down').css('display','block')
	$('.more2Down').css('margin-bottom','1.5rem')
	$(this).css('display','none')
})


var time = null
var i=0
// var arr=['images/banner_01.png','images/banner_02.jpg','images/banner_03.jpg']
function fun(){
	clearTimeout(time)
	var Src = $('.banner>img').attr('src')
	if(i==0){
		$('.banner .point >a').css('backgroundColor','#ccc')
		$('.banner .point >a').eq(i).css('backgroundColor','#50bbdb')
		$('.banner>img').attr('src','images/banner_01.png')
		i++
	}else if(i==1){
		$('.banner .point >a').css('backgroundColor','#ccc')
		$('.banner .point >a').eq(i).css('backgroundColor','#50bbdb')
		$('.banner>img').attr('src','images/banner_02.jpg')
		i++
	}else if(i==2){
		$('.banner .point >a').css('backgroundColor','#ccc')
		$('.banner .point >a').eq(i).css('backgroundColor','#50bbdb')
		$('.banner>img').attr('src','images/banner_03.jpg')
		i++
	}else{
		i=0
		$('.banner .point >a').css('backgroundColor','#ccc')
		$('.banner .point >a').eq(i).css('backgroundColor','#50bbdb')
		$('.banner>img').attr('src','images/banner_01.png')
		i++
	}
	// for(var i=0;i<arr.length;i++){
	// 		$('.banner .point >a').css('backgroundColor','#ccc')
	// 		$('.banner .point >a').eq(i).css('backgroundColor','#50bbdb')
	// 	// console.log(arr[i])
	// 	if(i<arr.length){
			
			
	// 		// $('.banner>img').attr('src','arr[i]')
	// 		// console.log(arr[i])
	// 		// Src=arr[i]
	// 	}else{
	// 		i=0
	// 	}
	// }
	time = setTimeout(fun,1000)
}
	setTimeout(fun,1000)