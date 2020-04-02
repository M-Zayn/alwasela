
$(window).on("load", function () {
  $('body,html').scrollTop(0)
  $(".pre-loader").fadeOut(500, function () {
      $(this).remove();
      $('html, body').css("overflow-y", "visible");


  });
});

  AOS.init();

  
$(function() {


  $(window).scroll(function () {
      if ($(window).scrollTop() > $(".header").innerHeight() ) {
        $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
  });
  $(".scroll-top").on("click", function() {
    $("html, body").animate({ scrollTop: 0});
  });

  
  // $('a[data-scroll]').on("click",function (e){
  //   e.preventDefault();    
    
  //   $("html, body").animate({
  //     scrollTop: $($(this).attr("data-scroll")).offset().top
  //   }, 1000);
  // });

    $('.carousel .owl-Carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:5,
      dots:true,
      navs:false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
      }
    });

    $('.most-searched .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:0,
      dots:true,
      navs:false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:2,
          },
          1000:{
              items:6,
          }
      }
    });

    if ($(window).width() < 992) {
        $(".newest .dynamic-tabs .content .content-one .card").wrapAll(".owl-carousel");
        $(".newest .dynamic-tabs .content .content-two .card").wrapAll(".owl-carousel");
        $(".newest .dynamic-tabs .content .content-three .card").wrapAll(".owl-carousel");
        $(".newest .dynamic-tabs .content .content-four .card").wrapAll(".owl-carousel");
        
        $('.content-one .owl-carousel').owlCarousel({
          rtl: document.dir == 'rtl' ? true : false,
          autoplay:true,
          loop:true,
          margin:0,
          dots:true,
          navs:false,
          responsiveClass:true,
          responsive:{
              0:{
                  margin:30,
                  items:1,
                },
                600:{
                  items:2,
              },
              1000:{
                  items:6,
              }
          }
        });
        
    } else {
        
    }
  
  // $( ".owl-prev").html('<img src="images/arrow-left.png">');
  // $( ".owl-next").html('<img src="images/arrow-right.png">');


  $(".tabs li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".content > div").hide();
    $($(this).data("content")).fadeIn();
    $($(this).data("content")).addClass("active").siblings().removeClass("active");
    // $('.content-one .owl-carousel').owlCarousel();
    // let $owl = $(".content-one .owl-carousel");
    // $owl.trigger("refresh.owl.carousel");
  });

  


  
  
  if($(window).width() < 992) {
    $(".footer .slide").removeAttr("data-aos");
    $(".footer .slide .list-header-slide").on("click", function () {
      $(this).toggleClass("active");
      $(this).siblings("ul").slideToggle();
    });
  } else {
    
  }
  
  
  // menu - search
  
  $(".nav-bar .zx-container .icons .search-icon").on("click", function() {
    $(".nav-bar .zx-container .search").toggleClass("search-show");
    $(".header").toggleClass("on-search-show");
  });


  
  $(".nav-bar .zx-container .icons .menu-icon").on("click", function() {
    $(".fixed-menu").fadeIn();
    $(".fixed-menu .overlay .menu").addClass("menu-show");
    $(".fixed-menu .overlay .menu .main-list li").addClass("li-show");
  });
  $(".fixed-menu .overlay .menu .menu-header .close").on("click", function() {
    $(".fixed-menu").fadeOut();
    $(".fixed-menu .overlay .menu").removeClass("menu-show");
    $(".fixed-menu .overlay .menu .main-list li").removeClass("li-show");
  });
  $(".fixed-menu").on("click", function() {
    $(".fixed-menu").fadeOut();
    $(".fixed-menu .overlay .menu").removeClass("menu-show");
    $(".fixed-menu .overlay .menu .main-list li").removeClass("li-show");
  });
  $(".fixed-menu .overlay .menu").on("click", function(e) {
      e.stopPropagation();
  });
  


  $(".fixed-menu .overlay .menu .main-list .list").on("click", function() {
    $(this).toggleClass("active")
    $(".fixed-menu .overlay .menu .main-list .list ul").slideToggle();
  });

  
});