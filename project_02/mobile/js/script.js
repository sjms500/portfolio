//splash
var tab=$(".tab ul li");
var tabContent=$(".tab-content>div");

tab.click(function(){
    var tg=$(this);
    var i=tg.index();

    tabContent.css('display','none');
    tabContent.eq(i).css('display','block');
});

//swiper/header-section
// var swiper = new Swiper(".mySwiper", {
  
//     slidesPerView: 1,
//     spaceBetween: 0,
//     mousewheel: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
  //slide
// var slide=$('#slide>ul>li');
// var current=0;

// setInterval(function(){
//     var prev=slide.eq(current);
//     current++;
//     move(prev, 0, '100%');
//     if(current==slide.size()){current=0;}
//     var next=slide.eq(current);
//     move(next, '-100%', 0);
// },2000);
// function move(tg, start, end){
//     tg.css('left', start).stop().animate({left:end},500);
// }