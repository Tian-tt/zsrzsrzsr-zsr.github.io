//手机号码 正则
	var re = /^((13[0-9])|(14[5,7])|(15[0,1,2,3,5,6,7,8,9])|(17[3,6,7,8])|(18[0-9]))\d{8}$/;
	var correct
	var correct1
		$(".inp2").blur(function(){
			var str = $(this).val();
			if (re.test(str)) { 
				correct = true
			    $(this).parent(".content").children(".prompt").text("")		    
		    }
		    else {
		    	correct = false
		        $(this).parent(".content").children(".prompt").text("请输入正确的手机号码")
		        $(this).parent(".content").children(".prompt").css("color","red");
		    }
		})

//姓名
		$(".inp1").blur(function(){
			if ($(this).val() == "") {
				correct1 = false
				$(this).parent(".content").children(".prompt").text("请填写您的姓名")
		        $(this).parent(".content").children(".prompt").css("color","red");
			}else{
				correct1 = true
				$(this).parent(".content").children(".prompt").text("")
			}
		})

//点击保存跳转
		$(".save").tap(function(){
			var str = $(".inp1").val();
			var str1 = $(".inp2").val();
			if (correct == true && correct1 == true) {
				window.location.href = "selectTourists.html"
			} else {

			}
		})