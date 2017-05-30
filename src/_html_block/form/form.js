// Validation form
  function validEmpty(el) {
    var regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
        type = el.attr("type"),
        $parent = el.parent(),
        val = el.val(),
        name = el.attr("name"),
        messageText = [
          'Name must be more than 1 symbols',
          'Incorrect email'
        ];
    $parent.find(".form__text-invalid").remove();
    if (type == "email") {
      if (val.search(regEmail) != 0) {
        invalidField(el, messageText[1], $parent);
      } else {
        validField(el, $parent);
      }
    } else if (type == "text") {
      if (name == "name") {
        if (val.length < 2) {
          invalidField(el, messageText[0], $parent);
        } else {
          validField(el, $parent);
        }
      }
    }
  }
  function validField(el, parent){
    el.removeClass("form__input--invalid").addClass("form__input--valid");
    parent.find(".form__text-invalid").remove();
  }
  function invalidField(el, mess, parent){
    $('<p class="form__text-invalid">' + mess + '</p>').appendTo(parent);
    el.removeClass("form__input--valid").addClass("form__input--invalid");
  }
// ----------------------------------------------------

// Submit on form
  // Search keyup on input
    $(".form :required").on("keyup change", function(){
      validEmpty($(this));
    });
  // ----------------------------------------------------
  $(".form [type='submit']").on("click", function(e){
    var $form = $(this).closest("form");
    $form.find(":required").each(function(){
      validEmpty($(this));
    });
    if ($form.find(".form__text-invalid").length != 0) {
      e.preventDefault();
    }
  });
  $(".form").on("submit", function(e){
    e.preventDefault();
    if ($(this).find(".form__text-invalid").length == 0) {
      $.ajax({
        url: $(this).attr("action"),
        type: $(this).attr("method"),
        data: $(this).serialize(),
        success: function(data) {
          console.log(data);
        }
      });
    }
  });
  $(".form .form__input").on("blur", function(){
    if(!$(this).val().length) {
      $(this).siblings(".form__label").removeClass("form__label--focus");
    } else {
      $(this).siblings(".form__label").addClass("form__label--focus");
    }
  });
// ----------------------------------------------------
