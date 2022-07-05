<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$messT = $_POST['messText'];

function processigData($nameData){
    $nameData = htmlspecialchars($nameData);
    $nameData = urldecode($nameData);
    $nameData = trim($nameData);
}

processigData($name);
processigData($phone);
processigData($messT);

$to = 'kaskad-com@mail.ru';
$sub = 'Поступил заказ от ' . $name;
$rece = 'Сайт <каскад-тара@mail.ru>';
$mess = '
<html>
<head>
    <title>Письмо от ' . $name . '</title>
</head>
<body>
    <table>
        <tr>
            <td><h1>Вам поступило письмо от: ' . $name . '</h1></td>
        </tr>
        <tr>
            <td><i>Вы можете связаться с клиентом по телефону</i> <a href="tel: '.$phone.'">' . $phone . '</a></td>
        </tr>
        <tr>
            <td><p style="color:#000; opacity="0.5"> Или связаться по другому отправив сообщение на почту ' . $email . '</p></td>
        </tr>
        <tr>
            <td><p style="color: #000; ">Сообщение с пожеланиями: ' . $messT . '</p></td>
        </tr>
    </table>
</body>        
</html>';
$headers = 'Content-type: text/html; charset=utf8' . "\r\n";
$headers .= 'From: Каскад-тара <kaskad-com@timeweb.ru>' . "\r\n";
mail($to, $sub, $mess, $headers, $rece);
header('Location: ../index.html');

?>