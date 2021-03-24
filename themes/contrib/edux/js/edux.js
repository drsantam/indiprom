/* Load jQuery.
--------------------------*/
jQuery(document).ready(function ($) {
  // header search
  $('.search-box-content .form-search').hover(function() {
    $('.header-search-close').css('top', '70%');
  }, function() {
    $('.header-search-close').css('top', 'calc(50% - 25px)');
  });
  // Homepage blocks
  $(".region-content-home-top .block, .region-content-home-bottom .block").wrapInner( '<div class="container"></div>' );
/* End document
--------------------------*/
});