module.exports = function () {

  // begin car
  var target = $('.footer');
  // var target = $('#car-ancore');
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight - 200;
  $(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
      $('.index-form-section').addClass('active');
    }
  });
  // end car

};