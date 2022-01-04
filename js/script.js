
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

// 화면 우측 쪼끄만 쿠키
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

//section02
//tab
var tab=$('.tabs>ul>li');
var tabContent=$('.panel>div');

tab.click(function(){
    var tg=$(this);
    var i=tg.index();

    tab.removeClass('active');
    tg.addClass('active');

    tabContent.css('display','none');
    tabContent.eq(i).css('display','block');
});
//tab
var tabs=$('.tabs-tablet-mobile>ul>li');
var tabContents=$('.panel-tablet-mobile>div');

tabs.click(function(){
    var tg=$(this);
    var i=tg.index();

    tabs.removeClass('active');
    tg.addClass('active');

    tabContents.css('display','none');
    tabContents.eq(i).css('display','block');
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

//tab-이미지 확대.web-mobile-tablet&mobile버전
$('.pj01-responsive').hover(function(){
  $(this).stop().animate({width:920},500);
},function(){
  $(this).stop().animate({width:200},500);//
});

$('.pj02-responsive').hover(function(){
  $(this).stop().animate({width:920},500);
  $('.web-mobile-responsive>ul').stop().animate({left:-235},500);
},function(){
  $(this).stop().animate({width:200},500);
  $('.web-mobile-responsive>ul').stop().animate({left:0},500);//
});

$('.pj03-responsive').hover(function(){
  $(this).stop().animate({width:920},500);
  $('.web-mobile-responsive>ul').stop().animate({left:-463},500);
},function(){
  $(this).stop().animate({width:200},500);
  $('.web-mobile-responsive>ul').stop().animate({left:0},500);//
});

$('.pj04-responsive').hover(function(){
  $(this).stop().animate({width:920},500);
  $('.web-mobile-responsive>ul').stop().animate({left:-682},500);
},function(){
  $(this).stop().animate({width:200},500);
  $('.web-mobile-responsive>ul').stop().animate({left:0},500);//
});

//CONTACT 롤링효과 시작
$('.contact-roll > li').eq(0).siblings().hide();
var slide_in=0;
setInterval(function(){
    if(slide_in<4){
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
  // console.log(headerTop);

  if (sct1 == headerTop.top) {
    $('.up').hide();
  }else{
    $('.up').show();
  }

});

//all-popup
$('.skill-pop').click(function(){
  $('#popup-skill').fadeIn();
});
$('.btn').click(function(){
  $('#popup-skill').fadeOut();
});
$('.pop1').click(function(){
  $('#popup1').fadeIn();
});
$('.pop2').click(function(){
  $('#popup2').fadeIn();
});
$('.pop3').click(function(){
  $('#popup3').fadeIn();
});
$('.pop4').click(function(){
  $('#popup4').fadeIn();
});
$('.btn').click(function(){
  $('.popup').fadeOut();
});
$('.popup img').click(function(){
  $('.popup').fadeOut();
});
$('.btn').click(function(){
  $('#update').fadeOut();
});
$('#update').click(function(){
  $('#update').fadeOut();
});
