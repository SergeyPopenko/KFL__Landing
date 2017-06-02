if ($(".works").length) {
  if (window.innerWidth > 767) {
    $(".works").viewportChecker({
      classToAdd: "works--animation",
      offset: "20%"
    });
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
