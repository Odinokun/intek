module.exports = function () {

  // begin menu
  $('#burger').on('click', function () {
    $(this).toggleClass('active');
    $('#header__menu').toggleClass('active');
  });

  $('.header__menu-link').on('click', function () {
    $('#burger, #header__menu').removeClass('active');
  });
  // end menu

};