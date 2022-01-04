var splash=$('.splash-main')
  splash.hover(function(){
    $(this).fadeOut(1500);
  });

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
// },3000);
// function move(tg, start, end){
//     tg.css('right', start).stop().animate({right:end},1000);
// }