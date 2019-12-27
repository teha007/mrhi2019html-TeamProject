  $( document) .ready(function() {
    var navOffset = $('nav').offset();
      $( window ).scroll(function() {
        if( $(document).scrollTop() > navOffset.top) {
          $('nav').addClass('active');
        }
        else{
          $('nav').removeClass('active');
        }
      });
  });
//   nav{   동일작동(css)
//     /* position: sticky;
//     top: 0; */
//     width: 100%;
//     background:yellow; padding:2px;
// }
