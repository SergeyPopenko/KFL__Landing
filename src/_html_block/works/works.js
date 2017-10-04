if ($(".works").length) {
  if (window.innerWidth > 767) {
    // $(".works").viewportChecker({
    //   classToAdd: "works--animation",
    //   offset: "20%"
    // });
    (function(){
      var flag = 1;
      $(window).on("scroll", function(){
        if (flag) {
          if ($(this).scrollTop() + window.innerHeight - $(".works").outerHeight()/2 > $(".works").offset().top) {
            flag = 0;
            $(".works").addClass("works--animation");
          }
        }
      });
    })();
  } else {
    $(".works__list").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    });
  }
}
