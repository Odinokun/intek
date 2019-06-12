module.exports = function() {

  // begin popup open
  $('.btn-popup').on('click', function(e) {
    e.preventDefault();
    var dataPopup = $(this).data('popup');
    var popup = '#' + dataPopup;
    $(popup).fadeIn();
    $('.popup__layer').fadeIn();
  });
  // end popup open

  // begin popup close
  $('.popup__layer, .popup__close').on('click', function() {
    $('.popup, .popup__layer').fadeOut();
  });
  // end popup close

};