if ($(".present").length) {
  $(".present").viewportChecker({
    offset: "50%",
    callbackFunction: function(elem, action){
      elem.find(".present__img").addClass("present__img-animation");
    }
  });
  if (window.innerWidth < 768) {
    $(".present__form").viewportChecker({
      offset: "30%",
      classToAdd: "present__form-animation"
    });
  }
}

