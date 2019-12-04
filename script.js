
window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  $('.slider').slick({
    dots: true,
    nextArrow: '.slick-next',
    prevArrow: '.slick-prev'
  });

  $('.our-clients-slider').slick({
    dots: false,
    slidesToShow: 6,
    nextArrow: '.our-clients-next',
    prevArrow: '.our-clients-prev',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      ]
  });

});