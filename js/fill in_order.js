$(".add").tap(function(){
	var val = $(".text").val()
	var num = Number(val) + 1
	$(".text").val(num)
})

$(".reduce").tap(function(){
	var val = $(".text").val()
	var num = Number(val) - 1
	if(num <= 1){
		num = 1
	}
	$(".text").val(num)
})

$(".tabs").tap(function(){
	var ind = $(this).index()
	$(".hover").css("left",0.26 + 1.36*ind + "rem")
})

//姓名
function name(ele1,str1){
	if (ele1.val() == "") {
		correct1 = false
			ele1.parents(".line").children(".prompt").text("请填写您的姓名")
		    ele1.parents(".line").children(".prompt").css("color","red");
		}else{
			correct1 = true
			ele1.parents(".line").children(".prompt").text("")
		}
	return correct1
}

$(".inp2").blur(function(){
		var str1 = $(this).val();
		name($(".inp2"),str1)
})

$(".inp3").blur(function(){
		var str2 = $(this).val();
		name($(".inp3"),str2)
})

//手机号码 正则
	var re = /^((13[0-9])|(14[5,7])|(15[0,1,2,3,5,6,7,8,9])|(17[3,6,7,8])|(18[0-9]))\d{8}$/;

		$(".phone").blur(function(){
			var str = $(this).val();
			if (re.test(str)) {   
			   $(this).parents(".line").children(".prompt").text("")		    
		    }
		    else {
		          $(this).parents(".line").children(".prompt").text("请输入正确的手机号码")
		          $(this).parents(".line").children(".prompt").css("color","red");
		    }
		})


//邮箱 正则
var reEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
var correct
var correct1
function email(ele,str){
	if (reEmail.test(str)) { 
		correct = true
		ele.parents(".line").children(".prompt").text("")	
	}else {
		correct = false
		ele.parents(".line").children(".prompt").text("请输入正确的邮箱")
		ele.parents(".line").children(".prompt").css("color","red");
	}
	return correct
}

$(".email").blur(function(){
	var str = $(this).val();
	email($(".email"),str)
})

//提交订单跳转
$(".footer>a").tap(function(){	
	var str = $(".email").val();
	var str1 = $(".inp2").val();	
	var str2 = $(".inp3").val();	
	if (name($(".inp2"),str1)==true&&name($(".inp3"),str2)==true&&email($(".email"),str)==true) {		
		window.location.href = "confirm.html"
	} else {
		// $(".line_1").children(".prompt").text("请填写您的姓名")
	}
})

//保险
$(".pic>img").tap(function(){
		var src = $(this).attr("src")	
		if (src == "images/baoxian_01.png") {
			$(this).attr("src","images/weixuan_04.png")		
		} else {
			$(this).attr("src","images/baoxian_01.png")	
		}
	})

//拼房
$(".pos>img").tap(function(){
	var src = $(this).attr("src")
	if (src == "images/tongyi_04.png") {
			$(this).attr("src","images/tongyi2_01.png").parent().siblings(".pos").find("img").attr("src","images/tongyi_04.png")
		} else {
			$(this).attr("src","images/tongyi_04.png").parent().siblings(".pos").find("img").attr("src","images/tongyi2_01.png")	
		}
})

//联系人 性别
$(".line:nth-child(3) p:nth-child(2) img").tap(function(){
	var src = $(this).attr("src")
	if (src = "images/tongyi_04.png") {
		$(this).attr("src","images/hui_02.png").siblings().attr("src","images/tongyi_04.png")
	} else {
		$(this).attr("src","images/tongyi_04.png").siblings().attr("src","images/hui_02.png")
	}
})

//游客信息 加载更多
$(".line:nth-child(4) a").tap(function(){
	$(this).css("display","none")
	$(".more").css("display","block")
})
$(".modify").tap(function(){
	window.location.href = "apply.html"
})

//总价格计算
$(".pic img").tap(function(){
	var src = $(this).attr("src")
	var text = $(".footer span").text()
	if (src == "images/weixuan_04.png") {
		$(".footer span").text(text - 177*2)
	} else {
		$(".footer span").text(Number(text) + 177*2)
	}
})

$('.links').tap(function(){
	console.log(1)
	window.location.href = "selectTourists.html"
})

$(".header a").click(function(event){
	event.preventDefault()
	history.back(1)
})