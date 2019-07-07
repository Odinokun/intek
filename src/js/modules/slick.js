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
    infinite: false,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 601,
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
    infinite: false,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 601,
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

  // begin reviews-slider
  $('#service-top__slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    fade: true,
    autoplay: true,
    cssEase: 'linear'
  });
  // end reviews-slider

  // begin reviews-slider
  $('#service-deal__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1021,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 761,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 377,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // end reviews-slider


  // begin service-tarif__slider
  // отображаем общее кол-во слайдов
  $('#service-tarif__slider').on('init', function (event, slick) {
    var allSlide = slick.slideCount;
    $("#service-tarif__slider-counter--all").html(allSlide);
  });
  // отображаем текущий слайд в счетчике
  $('#service-tarif__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    var curSlide = currentSlide + 1;
    $("#service-tarif__slider-counter--current").html(curSlide);
  });
  // инициализируем слайдер
  $('#service-tarif__slider').slick({
    arrows: false,
    infinite: false,
    fade: true,
    autoplay: false,
    cssEase: 'linear',
    dots: false
  });
  $(".btn").on('click', function () {
    $("#service-tarif__slider").slick('slickNext');
  });
  // end service-tarif__slider
};
