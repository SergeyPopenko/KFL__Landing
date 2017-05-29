$(".who").viewportChecker({
  classToAdd: "who--active",
  offset: "50%",
  callbackFunction: function(elem, action){
    elem.find(".who__descr").addClass("who__descr--active");
  }
});
