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

  // begin product-tab
  $('.product-tab__header').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).siblings('.product-tab__body').slideUp();
    } else {
      $('.product-tab__header').removeClass('active');
      $('.product-tab__body').slideUp();
      $(this).addClass('active');
      $(this).siblings('.product-tab__body').slideDown();
    }
  });
  // end product-tab

  // begin bitum-bottom-tab
  $('.bitum-bottom-tab__header').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).siblings('.bitum-bottom-tab__body').slideUp();
    } else {
      $('.bitum-bottom-tab__header').removeClass('active');
      $('.bitum-bottom-tab__body').slideUp();
      $(this).addClass('active');
      $(this).siblings('.bitum-bottom-tab__body').slideDown();
    }
  });
  // end bitum-bottom-tab

};