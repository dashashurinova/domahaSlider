<?php

$headers = 'Content-type: text/plain; charset="utf-8" ';

$username = $_POST['username'];
$username = $_POST['usermail'];
$username = $_POST['usertel'];
$username = $_POST['usertg'];

$headers = 'MiME-Version:1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset="utf-8" ';

$to = 'dasha.shurinova@yandex.ru';
$subject = 'message from site';
$message = "
<html>
    <table>
        <tr>
            <td>Name</td>
            <td>$username</td>
        </tr>
        <tr>
            <td>Mail</td>
            <td>$usermail</td>
        </tr>
        <tr>
            <td>Tel</td>
            <td>$usertel</td>
        </tr>
        <tr>
            <td>TG</td>
            <td>$usertg</td>
        </tr>
    </table>
</html>";

mail($to, $subject, $message, $headers);
// $ to - 
// $ subject - topik;
// $ message - body of the letter;
// $headers - spesial header, don't touch.

echo 'отправка формы';

// header("Location:/success.html")

?>

// if last header does not work use this:

    <script>
        window.location.href="/success.html";
    </script>