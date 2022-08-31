<?
//$json_ar = array('status' => 'error', 'errors' => $errors, 'form_id' => $_REQUEST['FORM_ID']);
$errors = array();
if($_REQUEST['NAME'] == ""){
    $errors[] = 'NAME';
}
if($_REQUEST['PHONE'] == "" and !in_array($_REQUEST['FORM_ID'], array('consultation'))){
    $errors[] = 'PHONE';
}
if($_REQUEST['EMAIL'] == "" and !in_array($_REQUEST['FORM_ID'], array('callback-form', 'form-1', 'form-2', 'consultation'))){
    $errors[] = 'EMAIL';
}
if(count($errors) > 0){
    $json_ar = array('status' => 'error', 'form_id' => $_REQUEST['FORM_ID'], 'errors' => $errors);
}else {

    $to = "info@gefestlogistic.ru";

    $subject = "Gefest Logistic: ".$_REQUEST['FORM_NAME'];

    /* сообщение */
    $message = '<div style="color: black; font-size: 16px; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #EDEDED">Gefest Logistic</div>
    <div style="color: black;">Была заполнена форма обратной связи.</div>';

    if($_REQUEST['NAME'] != ''){
        $message .= '<div style="color: black;">
                    <p><b>Ваше имя</b>:
                    '.$_REQUEST['NAME'].'</p>
                    </div>';
    }
    if($_REQUEST['PHONE'] != ''){
        $message .= '<div style="color: black;">
                    <p><b>Телефон</b>:
                    '.$_REQUEST['PHONE'].'</p>
                    </div>';
    }
    if($_REQUEST['EMAIL'] != ''){
        $message .= '<div style="color: black;">
                    <p><b>Телефон или email</b>:
                    '.$_REQUEST['EMAIL'].'</p>
                    </div>';
    }
    if($_REQUEST['TIME'] != ''){
        $message .= '<div style="color: black;">
                    <p><b>Удобное время звонка</b>:
                    '.$_REQUEST['TIME'].'</p>
                    </div>';
    }


    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $headers .= "From: feedback@gefestlogistic.ru\r\n";
    mail($to, $subject, $message, $headers);

    $json_ar = array('status' => 'ok', 'form_id' => $_REQUEST['FORM_ID']);
}
echo json_encode($json_ar);
?>