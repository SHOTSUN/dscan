jQuery(document).ready(function() {
  jQuery('.from_left').addClass("hhh").viewportChecker({
    classToAdd: 'vvv animated fadeInLeftBig',
    offset: 100
  });
});

jQuery(document).ready(function() {
  jQuery('.from_right').addClass("hhh").viewportChecker({
    classToAdd: 'vvv animated fadeInRight',
    offset: 100
  });
});
