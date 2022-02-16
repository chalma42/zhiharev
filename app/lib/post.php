<?php

$formtype = $_POST['form_type'];
$printerName = $_POST['printerName'];
$phone = $_POST['tel'];
$name = $_POST['name'];
$org = $_POST['org'];
$file = $_FILES['file'];
$err = $_POST['error'];


//Проверка поля


$message = '';
$message .= 'ФИО: ';
$message .= $name;
$message .= '<br>';
$message .= 'Телефон: ';
$message .= $phone;
$message .= '<br>';
if($formtype == 'bePartner') {
    $message .= 'Название организации: ';
    $message .= $org;
} else {
    $message .= 'Название принтера: ';
    $message .= $printerName;
}



// Файлы phpmailer
require 'src/PHPMailer.php';
require 'src/SMTP.php';
require 'src/Exception.php';



// Формирование самого письма
if ($formtype == 'refilling') {
    $title = "Заправка картриджей";
} elseif ($formtype == 'repair') {
    $title = "Ремонт оргтехники";
    $message .= '<br>';
    $message .= 'Неисправность: ';
    $message .= $err;
} elseif ($formtype == 'bePartner') {
    $title = "Стать партнером";
}


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username = 'chalma123@yandex.ru';    
    $mail->Password = 'ufpgnkxtydfwmwwl';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('chalma123@yandex.ru', 'ИП Жихарев'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('Zapravka-print.73@yandex.ru');  
    $mail->addAddress('chalma123@yandex.ru'); 
    //$mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

   // Прикрепление файлов
     for ($ct = 0; $ct < count($_FILES['file']['tmp_name']); $ct++) {
         $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['file']['name'][$ct]));
         $filename = $_FILES['file']['name'][$ct];
         if (move_uploaded_file($_FILES['file']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
         } else {
            $msg .= 'Failed to move file to ' . $uploadfile;
         }
     } 
    

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $message;    
 

// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "<span style='color:green;'>Ваша заявка принята!</span>";
} 
else {echo "<span style='color:red;'>Ошибка</span>";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
//echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
?>