module.exports = function () {

  // begin documents-tab
  $('.documents-tab__header').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).siblings('.documents-tab__body').slideUp();
    } else {
      $('.documents-tab__header').removeClass('active');
      $('.documents-tab__body').slideUp();
      $(this).addClass('active');
      $(this).siblings('.documents-tab__body').slideDown();
    }
  });
  // end documents-tab

  // begin vacancies-tab
  $('.vacancies-tab__header').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).siblings('.vacancies-tab__body').slideUp();
    } else {
      $('.vacancies-tab__header').removeClass('active');
      $('.vacancies-tab__body').slideUp();
      $(this).addClass('active');
      $(this).siblings('.vacancies-tab__body').slideDown();
    }
  });
  // end vacancies-tab

};