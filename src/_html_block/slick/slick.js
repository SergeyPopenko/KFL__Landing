if ($(".arendators__slider").length) {
  $(".arendators__slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: $(".btn-arrow--prev"),
    nextArrow: $(".btn-arrow--next"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}
if ($(".slider__init").length) {
  $(".slider__init").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $(".btn-arrow__slider--prev"),
    nextArrow: $(".btn-arrow__slider--next"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}