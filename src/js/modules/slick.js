module.exports = function () {

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
    variableWidth: true
  });
  // end top-slider

  // begin why-we-slider
  $('#why-we-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1

        }
      }
    ]
  });
  // end why-we-slider

  // begin documents-slider
  $('#documents-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1

        }
      }
    ]
  });
  // end documents-slider

  // begin partners-sec__slider
  $('#partners-sec__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 500,
    // autoplay: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 761,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // end partners-sec__slider

  // begin reviews-slider
  $('#reviews-slider__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 500,
    // autoplay: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1021,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 671,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // end reviews-slider

};