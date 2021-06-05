$('.figures').click(function(){
    let sideBarWidth = $('.container-side').innerWidth();
  
    if($('.sideBar').css('left') === '0px'){
        $('.sideBar').animate({left: `-${sideBarWidth}px`},700);
      
    }else{
        $('.sideBar').animate({left: '0'},700);
    }
    
});

$('nav a').click(function(e){
    let href = $(e.target).attr('href');
    let sectionTop = $(href).offset().top;
    $(window).scrollTop(sectionTop,2000);
});

let navHeight = $('nav').innerHeight();


$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    if(scrollTop > navHeight + 20){
        $('nav').addClass('change-nav');
        $('.nav-link').css('color','#333');
        $('.navbar-nav>li.active>.nav-link').css('color','#f25454');
        $('.navbar-brand img').attr('src','images/logo-red.png');
       
    }else{
        $('nav').removeClass('change-nav');
        $('.nav-link').css('color','#fff');
        $('.navbar-brand img').attr('src','images/logo-white.png');
    }
});

$('.topBtn').click(function(){
    $('html,body').animate({scrollTop:0} ,1000);

});


$('.color-box li').click(function(e){
    let bgColor = $(e.target).css('background-color');

    $('.progress-bar').css('background-color', bgColor);
    $('.contact-btn').css('background-color', bgColor);
    $('#services i').css('color', bgColor);
    $('#services h4').mouseenter(function(event){
        $(event.target).css('color', bgColor);
    });
    $('#services h4').mouseleave(function(event){
        $(event.target).css('color', "#333")
    });

    $('#contact i').css('color',bgColor);

    $('#contact h4').mouseenter(function(event){
        $(event.target).css('color', bgColor);
    });
    $('#contact h4').mouseleave(function(event){
        $(event.target).css('color', "#333")
    });

});
