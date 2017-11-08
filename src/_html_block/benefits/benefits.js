if ($(".benefits").length) {
  $(".benefits__descr p").viewportChecker({
    classToAdd: "benefits__descr-gray",
    offset: "20%"
  });
}
// (function(){
//   var flag = 1;
//   $(window).on("scroll", function(){
//     if (flag) {
//       if ($(this).scrollTop() + window.innerHeight - $(".benefits").outerHeight()/2 > $(".benefits").offset().top) {
//         flag = 0;
//         $(".benefits").addClass("benefits__descr-gray");
//       }
//     }
//   });
// })();
