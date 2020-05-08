// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 0px";
    document.getElementById("navbar").style.background = "white";
  } else {
    document.getElementById("navbar").style.padding = "5px 0px";
    document.getElementById("navbar").style.background = "white";
  }
}


$('.news').slick({
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: '.next_news',
  prevArrow: '.previous_news',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.teacher').slick({
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '.next_teacher',
  prevArrow: '.previous_teacher',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.burger-menu').click (function(){
  $('.navbar__menu-mobile').toggleClass('open');
});