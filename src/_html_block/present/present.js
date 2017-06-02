if ($(".present").length) {
  $(".present").viewportChecker({
    offset: "50%",
    callbackFunction: function(elem, action){
      elem.find(".present__img").addClass("present__img-animation");
    }
  });
}

