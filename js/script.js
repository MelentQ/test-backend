$(document).ready(function () {
    $("input[name=PHONE]").mask("+7 (999) 999-9999");
    $('input, textarea').placeholder();
    $('.slider').addClass("usefull");
    $('.slider').bxSlider({
        auto: true,
        autoStart: true,
        autoHover: true,
        controls: true,
        pager: false,
        speed: 1000
    });
    /* Подключение формы */
    var MESSAGES = {
        'NAME_NOT_PROVIDED': 'Вы не указали своё имя',
        'PHONE_TOO_SHORT': 'Неправильно указан номер телефона',
        'NOT_HUMAN': 'Не пройдена проверка против роботов',
        'EMAIL_NOT_PROVIDED': 'Не указан E-mail',
        'EMAIL_NOT_VALID': 'Неверно указан E-mail',
        'TOPIC_NOT_PROVIDED': 'Не выбрана тема сообщения',
        'MESSAGE_NOT_PROVIDED': 'Пустое сообщение',
        'MESSAGE_TOO_SHORT': 'Слишком короткое сообщение',
    };
    $('form.async_form').ajaxForm({
        dataType: 'json',
        beforeSubmit: function(arr, $form, options){
        },
        success: function(data){
            if(data && data.status == "ok"){
                $('#'+data.form_id+' .status').fadeIn();
                $('#'+data.form_id+' input[type=submit]').hide();
                setTimeout(function(){
                    $('#'+data.form_id+' .status').hide();
                    $('#'+data.form_id+' input[type=submit]').show();
                    $('#'+data.form_id+' input[type=text]').each(function() {
                        $(this).val('');
                    });
                }, 3000);
                try{
                    //ga('send', 'pageview', '/virtual/form/ok');
                    //yaCounter24215812.reachGoal('landing_form_ok');
                }catch(e){}
            }else{
                for(i in data.errors){
                    $("#"+data.form_id+" input[name*='"+data.errors[i]+"']").addClass("error");
                }
                //ga('send', 'pageview', '/virtual/form/error');
            }
        },
        error: function(){
            //ga('send', 'pageview', '/virtual/form/error');
        }
    });
    $('input[type=text]').on('click', function() {
        $(this).removeClass('error');
    });
});


