module.exports = function() {

  // begin menu

  $('#burger').click(function(){
    $(this).toggleClass('open');
    $('#header-menu').toggleClass('open');
  });

  $('.header-menu__link').click(function(){
    $('#burger, #header-menu').removeClass('open');
  });

  // end menu

};