//swiper/header-section
var swiper = new Swiper(".mySwiper", {
  
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$('.ani_box').click(function(){
  $(this).toggleClass('add');
});
// //메인슬라이드
// var mainShow=$('.main-show ul li');
// var current=0;

// setInterval(function(){
//     var prev=mainShow.eq(current);
//     current++;
//     move(prev, 1, 0)
//     if(current==mainShow.size()){
//         current=0;
//     }
//     var next=mainShow.eq(current);
//     move(next, 0 ,1);
// },3000);
// function move(tg, start,end){
//     tg.css('opacity',start).stop().animate({opacity:end},500);
// }

//wrap section별로 스르륵이동
var btn=$('.nav>ul>li');
var sect=$('#wrap>div.mu');

btn.click(function(){
  var btnth=$(this);
  var i=btnth.index();
  var sct=sect.eq(i);
  
  $('html, body').stop().animate({scrollTop:sct.offset().top},800)
   if(sct.eq(0)){
    $('.nav-wrap').stop().animate({right:0},500);
   } 
});
  
  $(window).scroll(function(){
  sect.each(function(){
    var tg=$(this);
    var i=tg.index();
    var wt=$(window).scrollTop();
          
    if(tg.offset().left <= wt){
      btn.removeClass('on');
      btn.eq(i-1).addClass('on');
    };
    
  });
  });
//nav
var trues=true;

$('.quick-toggle-mobile').on('click', function(){
  if(trues){
      $(this).addClass('.quick_open');
      $(this).stop().animate({right:0},500);
      $('.mobile-nav-wrap').stop().animate({right:'-170px'},500, function(){
          trues=false;
      });
  }else{
      $(this).removeClass('.quick_open');
      $(this).stop().animate({right:'170px'},500);
      $('.mobile-nav-wrap').stop().animate({right:0},500, function(){
          trues=true;
      });
  }
});

$('.quick-toggle').on('click', function(){
  if(trues){
      $(this).addClass('.quick_open');
      $(this).stop().animate({right:0},500);
      $('.nav-wrap').stop().animate({right:'-200px'},500, function(){
          trues=false;
      });
  }else{
      $(this).removeClass('.quick_open');
      $(this).stop().animate({right:'200px'},500);
      $('.nav-wrap').stop().animate({right:0},500, function(){
          trues=true;
      });
  }
});
//nav 스르륵 이동
$(function(){
  let wheelDelta=0; //휠 이벤트 발생시 반환값 확인 변수
  let browser=0; // 파이어 폭스 브라우저 판별 변수

  $('.scroll').each(function(index){
      $(this).on('mousewheel DOMMouseScroll',function(event){
          event.preventDefault();
          browser=window.navigator.userAgent.toLowerCase().indexOf('firefox');
          if(browser>=0){
              wheelDelta==event.detail*40;
          }else{
              wheelDelta=event.originalEvent.wheelDelta;
          }
          console.log(wheelDelta);

          if(wheelDelta<0){ //-120 or -150 값을 가지면 다음 섹션으로 이동
              if(index < $('.scroll').length -1){
                  $('html, body').stop().animate({scrollTop:$(this).next().offset().top},1000);
                  if(sect.eq(1)){
                    $('.nav-wrap').stop().animate({right:'-200px'},1000);
                  }
              }
          }else{//위로 섹션으로 이동
              if(index>0){
                  $('html, body').stop().animate({scrollTop:$(this).prev().offset().top},1000);
              }
          }
          
      });
  });
});
//section01
var upNone=$('.none');
var upClick=$('.panel>div');

upNone.click(function(){
    var tg=$(this);
    var i=tg.index();

    upNone.removeClass('active');
    tg.addClass('active');

    upClick.css('display','none');
    upClick.eq(i).css('display','block');
});
// SKILLBAR
// $(window).scroll(function () {
//   var sct = $(window).scrollTop(),
//       skill = $('.content03').offset();
//   if (sct > skill.top - 300) {
//     var leftMain = $('.skills>div');

//     leftMain.each(function () {
//       var progressWrap = $(this).find('.progress_bar');
//       var progressBar = progressWrap.find('.bar');
//       var progressText = progressWrap.find('.num');
//       var progressNum = progressText.attr('data-num');

//       //움직일대상.animate({속성:속성값},시간); - 애니메이트주는방법
//       progressBar.delay(500).css('width','25px').animate({
//         width: progressNum + "%"
//       }, 2000);

//       //setInterval(할일, 시간);
//       // % = 움직일려고 하는 넓이/전체넓이 * 100
//       setInterval(textNum, 1000 / 10);

//       function textNum() {
//         var currentWidth = progressBar.width() / progressWrap.width() * 100;
//         progressText.text(Math.ceil(currentWidth) + "%");
//       }

//     });
//   }
// });
//section02
//tab
var tab=$('.tab ul li');
var tabContent=$('.panel>div');

tab.click(function(){
    var tg=$(this);
    var i=tg.index();

    tab.removeClass('active');
    tg.addClass('active');

    tabContent.css('display','none');
    tabContent.eq(i).css('display','block');
});
//tab-이미지 확대.web-mobile
$('.pj01').hover(function(){
  $(this).stop().animate({width:1180},500);
},function(){
  $(this).stop().animate({width:280},500);//
});
$('.pj02').hover(function(){
  $(this).stop().animate({width:1180},500);
  $('.web-mobile>ul').stop().animate({left:-302},500);
},function(){
  $(this).stop().animate({width:280},500);
  $('.web-mobile>ul').stop().animate({left:0},500);//
});
$('.pj03').hover(function(){
  $(this).stop().animate({width:1180},500);
  $('.web-mobile>ul').stop().animate({left:-602},500);
},function(){
  $(this).stop().animate({width:280},500);
  $('.web-mobile>ul').stop().animate({left:0},500);//
});
$('.pj04').hover(function(){
  $(this).stop().animate({width:1180},500);
  $('.web-mobile>ul').stop().animate({left:-902},500);
},function(){
  $(this).stop().animate({width:280},500);
  $('.web-mobile>ul').stop().animate({left:0},500);//
});
//슬라이드.graphics
let banner=$('.graphics ul li');
let current=0;

setInterval(function(){
    let prev=banner.eq(current);
    current++;
    move(prev, 0, '-100%');
    if(current==banner.size()){
        current=0;
    }
    let next=banner.eq(current);
    move(next, '100%', 0);
},3000);
function move(tg,start,end){
  tg.css("left",start).stop().animate({left:end},2000);
}
//CONTACT 롤링효과 시작
$('.contact-roll > li').eq(0).siblings().hide();
var slide_in=0;
setInterval(function(){
    if(slide_in<3){
        slide_in++;
    } else {
        slide_in = 0;
    }
    $('.contact-roll >li').eq(slide_in).siblings().fadeOut();
    $('.contact-roll >li').eq(slide_in).fadeIn();
}, 2000);
//CONTACT 롤링효과 끝
$(window).scroll(function () {
var sct1 = $(window).scrollTop(),
headerTop = $('#header').offset();
      console.log(headerTop);
  if (sct1 == headerTop.top) {
    $('.up').hide();
  }else{
    $('.up').show();
  }
});