module.exports = function() {

  // begin top-slider
  $('#index-top__slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '#index-top__slider-nav'
  });
  $('#index-top__slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '#index-top__slider',
    focusOnSelect: true,
    variableWidth:true
  });
  // end top-slider

  // begin why-we-slider
  $('#why-we-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 500,
    // autoplay: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 577,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1

        }
      }
    ]
  });
  // end why-we-slider

};