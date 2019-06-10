module.exports = function () {

  // begin jquery-ui
  $(function () {
    $(".custom-select").selectmenu()
      .selectmenu( "menuWidget" )
      .addClass( "custom-select-list" );
  });
  // end jquery-ui

};