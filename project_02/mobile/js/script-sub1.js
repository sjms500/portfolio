//tab
var tab=$('.tab>ul>li');
var tabContent=$('.tab-content>div');

tab.click(function(){
    var tg=$(this);
    var i=tg.index();

    tab.removeClass('active');
    tg.addClass('active');

    tabContent.css('display', 'none');
    tabContent.eq(i).css('display', 'block');
});