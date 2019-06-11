module.exports = function() {

  // begin top-slider
  $('#index-top__slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    // autoplay: true,
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

};