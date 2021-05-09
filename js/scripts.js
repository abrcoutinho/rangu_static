// Rangu js

// Scroll momentum
// butter.init({
//   wrapperId: 'search_results',
//	 wrapperDamper: 0.08,
//   cancelOnTouch: false
// });

// jQuery scripts
$(document).ready(function(){

  // Search filters
  $(".call_search_filters").click(function() {
    $(".window_search_filters").addClass("is-active");
  });
  $("#refine_search").click(function() {
    $(".window_search_filters").removeClass("is-active");
  });

  $(document).click(function(event) {
    if (!$(event.target).closest(".call_search_filters, .window_search_filters").length) {
      $("body").find(".window_search_filters").removeClass("is-active");
    }
  });

});