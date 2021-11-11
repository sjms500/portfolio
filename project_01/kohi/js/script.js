$(function(){

    //메뉴
    $('.menu>ul>li').hover(function(){
        $(this).find('>ul').stop().slideDown(1000);
    },function(){
        $(this).find('>ul').stop().slideUp(1000);
    });



    //슬라이드
    let current=0;//초기값 변수 설정

    function mainSlide(){ //이미지 슬라이드 함수
        $('.slide').css({zIndex:1,opacity:1}); //모든 슬라이드 공통 초기화
        $('.slide').eq(current).css({zIndex:2}); //다음 슬라이드
        $('.slide').eq(current==0 ? 2:current-1).css({zIndex:3}).stop().animate({opacity:0},1000);//현재 보이는 슬라이드 부드럽게 사라짐
    }
    function nextCount(){
        current++;
        if(current>2){current=0}
        mainSlide();
    }
    //자동 타이머
    setInterval(nextCount,3000)

    //공지사항/갤러리 탭메뉴
    $('.notice-btn').click(function(){
        $('.if-text1-1').stop().show();
        $('.if-text2-1').stop().hide();
        $('.if-text3-1').stop().hide();
        $('.notice-btn').removeClass('addbtn');
        $('.news-btn').removeClass('addbtn');
        $('.reference-btn').removeClass('addbtn');
    });
    $('.news-btn').click(function(){
        $('.if-text1-1').stop().hide();
        $('.if-text2-1').stop().show();
        $('.if-text3-1').stop().hide();
        $('.notice-btn').addClass('addbtn');
        $('.news-btn').addClass('addbtn');
        $('.reference-btn').removeClass('addbtn');
    });
    $('.reference-btn').click(function(){
        $('.if-text1-1').stop().hide();
        $('.if-text2-1').stop().hide();
        $('.if-text3-1').stop().show();
        $('.notice-btn').addClass('addbtn');
        $('.news-btn').removeClass('addbtn');
        $('.reference-btn').addClass('addbtn');
    });

     // TOP버튼
     $(".follow-btn").hide();
     $(".follow-btn").on("click", function(){
         $("html, body").animate({scrollTop:0}, 500);
         return false;
     });

    var f_offset = $("#footer").offset().top;
    var f_h = $("#footer").height();
    $(window).scroll(function(){
        if($(window).scrollTop() > 150){
            $(".follow-btn").fadeIn();
        } else{
            $(".follow-btn").fadeOut();
        }

        if($(window).scrollTop() + $(window).height() > f_offset+f_h-200){
            $(".follow-btn").addClass("position");
        } else {
            $(".follow-btn").removeClass("position");
        }
    });


     // 사이드바
     $(".follow-btn2").hide();
     $(".follow-btn2").on("click", function(){
         $("html, body").animate({scrollTop:0}, 500);
         return false;
     });

    var f_offset = $("#footer").offset().top;
    var f_h = $("#footer").height();
    var h_offset = $("#header").offset().top;
    var h_h = $("#header").height();
    $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $(".follow-btn2").stop();
        } else{
            $(".follow-btn2").show();
        }

        if($(window).scrollTop() + $(window).height() > f_offset+f_h-100){
            $(".follow-btn2").addClass("position");
        } else {
            $(".follow-btn2").removeClass("position");
        }
        if($(window).scrollTop() + $(window).height() < h_offset+h_h+500){
            $(".follow-btn2").hide();
        } else {
            $(".follow-btn2").show();
        }
    });


});