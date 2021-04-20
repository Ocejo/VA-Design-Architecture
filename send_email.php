<?php
if ($_POST) {
 header('Content-Type: application/json', '', 200);
 $destinatario = "ocejojimenezjorgeluis@gmail.com";
 $asunto       = "Contacto página web VA";
 $cuerpo       = '
<html>
<head>
   <title>Contacto</title>
</head>
<body>
<h1>Prospectación</h1>
<ul>
    <li>Nombre: ' . $_POST['name'] . ' </li>
    <li>Correo: ' . $_POST['email'] . '</li>
    <li>Mensaje: ' . $_POST['message'] . '</li>
</ul>
</body>
</html>
';

//para el envío en formato HTML
 $headers = "MIME-Version: 1.0\r\n";
 $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

//dirección del remitente
 $headers .= "From: Miguel Angel Alvarez <pepito@desarrolloweb.com>\r\n";

//dirección de respuesta, si queremos que sea distinta que la del remitente
 $headers .= "Reply-To: mariano@desarrolloweb.com\r\n";

//ruta del mensaje desde origen a destino
 $headers .= "Return-path: holahola@desarrolloweb.com\r\n";

//direcciones que recibián copia
 $headers .= "Cc: maria@desarrolloweb.com\r\n";

//direcciones que recibirán copia oculta
 //$headers .= "Bcc: pepe@pepe.com,juan@juan.com\r\n";
try {
    mail($destinatario, $asunto, $cuerpo, $headers);
    echo json_encode(['success' => true]);
} catch (\Throwable $th) {
    throw $th;
}

} else {
 header('Content-Type: application/json', '', 401);
 echo json_encode(['error' => 'invalid petition', 'code' => 401]);
}
