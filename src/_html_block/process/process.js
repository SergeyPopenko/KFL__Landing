if ($(".process").length) {
  if (window.innerWidth > 767) {
    $(".process").viewportChecker({
      classToAdd: "process--active",
      offset: "50%"
    });
  }
}

