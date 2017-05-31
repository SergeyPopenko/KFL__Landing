if ($(".reviews").length) {
  $(".reviews__slider-inner").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".reviews__button--prev"),
    nextArrow: $(".reviews__button--next")
  });
}
