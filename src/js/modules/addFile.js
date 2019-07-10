module.exports = function () {

  // begin addFile
  $('input[type=file]').change(function(){
  // $('.vacancies-form__input').change(function(){
    console.log($(this).val());
  //   var path = $(this).val();
    var path = $('input[type=file]').val();
    var fileName = path.replace('C:\\fakepath\\', '');
    $('.vacancies-form__item--left').append('<span class="addedFile">' + fileName + '</span>');
  });
  // end addFile

};