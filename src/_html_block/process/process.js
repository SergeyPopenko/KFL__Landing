if ($(".process").length) {
  if (window.innerWidth > 767) {
    // (function(){
    //   var flag = 1;
    //   $(window).on("scroll", function(){
    //     if (flag) {
    //       if ($(this).scrollTop() + window.innerHeight - $(".process").outerHeight()/2 > $(".process").offset().top) {
    //         flag = 0;
    //         $(".process").addClass("process--active");
    //       }
    //     }
    //   });
    // })();
    $(".process").viewportChecker({
      classToAdd: "process--active",
      offset: "50%"
    });
  }
}

