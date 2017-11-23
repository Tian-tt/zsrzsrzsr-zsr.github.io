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

$.fn.scrollTo =function(options){
  var defaults = {
      toT : 0,    //滚动目标位置
      durTime : 500,  //过渡动画时间
      delay : 30,     //定时器时间
      callback:null   //回调函数
  };
  var opts = $.extend(defaults,options),
      timer = null,
      _this = this,
      curTop = _this.scrollTop(),//滚动条当前的位置
      subTop = opts.toT - curTop,    //滚动条目标位置和当前位置的差值
      index = 0,
      dur = Math.round(opts.durTime / opts.delay),
      smoothScroll = function(t){
          index++;
          var per = Math.round(subTop/dur);
          if(index >= dur){
              _this.scrollTop(t);
              window.clearInterval(timer);
              if(opts.callback && typeof opts.callback == 'function'){
                  opts.callback();
              }
              return;
          }else{
              _this.scrollTop(curTop + index*per);
          }
      };
  timer = window.setInterval(function(){
      smoothScroll(opts.toT);
  }, opts.delay);
  return _this;
};
$('.feature .list ul li').eq(1).tap(function(){
	$('body,html').scrollTo({toT:1910})
})
$('.feature .list ul li').eq(2).tap(function(){
	$('body,html').scrollTo({toT:5180})
})