
//Function for open popup overlay
  function popupOpen(){
    $(".popup").slideDown();
  };
//---------------------------------------------


//Function for close popup overlay
  function popupClose(){
    $(".popup").slideUp(10);
    $(".popup__recover-ok").removeClass("active");
    $(".popup__recover-error").removeClass("active");
    $("#popup-form").fadeOut();
    $("body").css("overflow", "");
  };
//---------------------------------------------


//Function for open popup__recover-ok
    function popupRecOkOpen(){
        $(".popup").slideDown();
        $(".popup__container").addClass("active");
        $(".popup__recover-ok").addClass("active");
    };
//---------------------------------------------
//Function for open popup__recover-error
    function popupRecErrorOpen(){
        $(".popup").slideDown();
        $(".popup__container").addClass("active");
        $(".popup__recover-error").addClass("active");
    };
//---------------------------------------------

//Close popup__recover-ok/ popup__recover-error
$(".btn__recover-close").on("click", function(e){
    e.preventDefault();
    popupClose();
});
//---------------------------------------------


//Push btn ESC
$(window).keydown(function(e){
  if (e.which == "27") {
    popupClose();
  }
});
//---------------------------------------------



//Validation form wedding
    function formValid(form){
    form.find('input[name=name], input[name=email], input[name=tel], textarea').on("keyup", function(e){
        var id = $(this).attr('name');
        var val = $(this).val();
       switch(id){
            // Проверка поля "Имя"
            case 'name':
                var rv_name = /^[a-zA-Zа-яА-ЯіїІЇєЄ'][a-zA-Zа-яА-ЯіїІЇєЄ' ]+[a-zA-Zа-яА-ЯіїІЇєЄ']?$/; 
                if(val.length > 1 && val.length < 21 && val != '' && rv_name.test(val)){
                   $(this).addClass('not_error');
                   $(this).next('.error-box').text('OK')
                                             .css('color','green').clearQueue()
                                             .animate({'paddingLeft':'10px'},400)
                                             .animate({'paddingLeft':'5px'},400);
                }else{
                   $(this).removeClass('not_error').addClass('error');
                   $(this).next('.error-box').html('Только буквы, (от 2 до 20).')
                                              .css('color','red').clearQueue()
                                              .animate({'paddingLeft':'10px'},400)
                                              .animate({'paddingLeft':'5px'},400);
                }
            break;

            // Проверка поля "Email"
            case 'email':
                var rv_mail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
                if(val == '' || rv_mail.test(val)){
                   $(this).addClass('not_error');
                   $(this).next('.error-box').text('ОК')
                                             .css('color','green')
                                             .animate({'paddingLeft':'10px'},400)
                                             .animate({'paddingLeft':'5px'},400);
                }else{
                   $(this).removeClass('not_error').addClass('error');
                   $(this).next('.error-box').text('Введите действующий E-mail.')
                                              .css('color','red')
                                              .animate({'paddingLeft':'10px'},400)
                                              .animate({'paddingLeft':'5px'},400);
                }
            break;

            // Проверка поля "Телефон"
            case 'tel':
                var rv_tel = /^\d+$/;
                if(val.length > 6 && val.length < 14 && val != '' && rv_tel.test(val)){
                   $(this).addClass('not_error');
                   $(this).next('.error-box').text('OK')
                                             .css('color','green')
                                             .animate({'paddingLeft':'10px'},400)
                                             .animate({'paddingLeft':'5px'},400);
                }else{
                   $(this).removeClass('not_error').addClass('error');
                   $(this).next('.error-box').html('Только цифры, (От 7 до 13).')
                                              .css('color','red')
                                              .animate({'paddingLeft':'10px'},400)
                                              .animate({'paddingLeft':'5px'},400);
                }
            break;
            
        } // end switch(...)
    }); 
}

$(".form-submit").on("click", function(e) {
  e.preventDefault();
    var closestForm = $(this).closest("form"),
        dataSubj = closestForm.attr("data-subj"),
        inp = closestForm.find("input"),
        inpEmail = closestForm.find("input[name=email]"),
        inpEmailError = closestForm.find("input[name=email].error"),
        inpEmailNoterror = closestForm.find("input[name=email].not_error"),
        inpName = closestForm.find("input[name=name]"),
        inpNameError = closestForm.find("input[name=name].error"),
        inpNameNoterror = closestForm.find("input[name=name].not_error"),
        inpDate = closestForm.find("input[name=date]"),
        inpDateError = closestForm.find("input[name=date].error"),
        inpDateNoterror = closestForm.find("input[name=date].not_error");
        inpTel = closestForm.find("input[name=tel]"),
        inpTelError = closestForm.find("input[name=tel].error"),
        inpTelNoterror = closestForm.find("input[name=tel].not_error"),
        textarea = closestForm.find("textarea"),
        textareaError = closestForm.find("textarea.error"),
        textareaNoterror = closestForm.find("textarea.not_error");
    // if(inpEmailError.length == 0 && inpEmailNoterror.length == 0){
    //     // inpEmail.addClass("not_error");
    //     inpEmail.next('.error-box').text('')
    //                                  .css('color','red').clearQueue()
    //                                  .animate({'paddingLeft':'10px'},400)
    //                                  .animate({'paddingLeft':'5px'},400);
    //                                  console.log("email==true");
    // }

    if(inpNameError.length == 0 && inpNameNoterror.length == 0){
      inpName.next('.error-box').text('Только буквы, (от 2 до 20).')
                                     .css('color','red').clearQueue()
                                     .animate({'paddingLeft':'10px'},400)
                                     .animate({'paddingLeft':'5px'},400);
                                     console.log("name==true");
    }

   

    if(inpTelError.length == 0 && inpTelNoterror.length == 0){
      inpTel.next('.error-box').text('Только цифры, (От 7 до 13).')
                                     .css('color','red')
                                     .animate({'paddingLeft':'10px'},400)
                                     .animate({'paddingLeft':'5px'},400);

    }
    
    var store_form = $(this).closest("form");
    var btn = $(this).closest(".btn");
    var data = new FormData(store_form[0]);
        data.append('from', location.href);
        data.append('subj', dataSubj);
    if($(this).closest("form").find(".not_error").length >=2){
       
        btn.prop("disabled", true);
        $.ajax({
              url: store_form.attr("action"),
              type: "POST",
              data: data,
              cache: false,
              contentType: false,
              processData: false,
            success: function(){
                popupClose();
                popupRecOkOpen();
                inp.removeClass("error not_error");
                textarea.removeClass("error not_error");
                store_form.find("input:not([type=hidden]), textarea").val("");
                store_form.find(".error-box").text("");
                btn.prop('disabled', false);
            },
            error: function(){
                  btn.prop('disabled', false);
                  popupRecErrorOpen();
            }
        });
        return false;
    };
});


$("form").each(function(){
    
    formValid($(this));
});

// $(document).ready(function(){  
//   $('input[name=tel]').mask('+1 000 000 00 00');  
//   $('input[name=date]').mask('00/00/0000');  
// });

