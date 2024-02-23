$(document).ready(function(){
    $('.carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 2.98,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),

    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
      