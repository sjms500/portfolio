var trues=true
$('.bar').click(function(){

  if(trues==true){
    $('.nav-moblie').show().animate({left:'-6%'},500);
    $(this).find('i').attr("class", "fas fa-times");
    trues=false;
  }else{
    $('.nav-moblie').show().animate({left:'-100%'},700);
    $(this).find('i').attr("class", "fas fa-bars");
    trues=true;
  }
});

//배너 슬라이드
var slideBanner=$('.slide-wrap .slider'),
slideList=$('.slide-wrap .slider .slide'),
slideWidth=slideList.innerWidth(),
slideHeight=slideList.innerHeight(),
setIntervalId;

bannerSlide();
function bannerSlide(){
setIntervalId=setInterval(() => {
	slideBanner.stop().animate({left:-(slideWidth)},800, function(){
		$('.slide-wrap .slider .slide:first').insertAfter('.slide-wrap .slider .slide:last');
		slideBanner.css({left:0});
	});
}, 2000);
} 


function rightBtn(){
slideBanner.stop().animate({left:-(slideWidth)},800, function(){
	$('.slide-wrap .slider .slide:first').insertAfter('.slide-wrap .slider .slide:last');
	slideBanner.css({left:0});
});
}
function leftBtn(){
$('.slide-wrap .slider .slide:last').insertBefore('.slide-wrap .slider .slide:first');
slideBanner.css({left:-(slideWidth)}).stop().animate({left:0},800);
}

$('.slide-prev, .slide-next, .slide-wrap').on('mouseover focus', function(){
clearInterval(setIntervalId);
});
$('.slide-prev, .slide-next, .slide-wrap').on('mouseout leave', function(){
bannerSlide();
});

$('.slide-next').click(function(){
rightBtn();
});
$('.slide-prev').click(function(){
leftBtn();
});


// $( window ).resize(function(){
// 	if($(window)<=795){
// 		clearInterval(setIntervalId);
// 	}else{
// 		bannerSlide();
// 	}
//  });
