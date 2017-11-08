if ($(".who").length) {
  $(".who").viewportChecker({
    classToAdd: "who--active",
    offset: "50%"
  });
}

// (function(){
//   var flag = 1;
//   $(window).on("scroll", function(){
//     if (flag) {
//       if ($(this).scrollTop() + window.innerHeight - $(".who").outerHeight()/2 > $(".who").offset().top) {
//         flag = 0;
//         $(".who").addClass("who--active");
//       }
//     }
//   });
// })();

