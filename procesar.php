<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitizar entradas
    $nombre  = htmlspecialchars(trim($_POST['nombre']));
    $email   = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $asunto  = htmlspecialchars(trim($_POST['asunto']));
    $mensaje = htmlspecialchars(trim($_POST['mensaje']));

    // Dirección de destino
    $to = "contacto@turesponsive.com.ar";

    // Asunto del correo
    $subject = "Formulario de contacto: $asunto";

    // Cuerpo del mensaje
    $body = "Nombre: $nombre\n";
    $body .= "Email: $email\n\n";
    $body .= "Mensaje:\n$mensaje";

    // Cabeceras
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Enviar correo
    if (mail($to, $subject, $body, $headers)) {
        echo "✅ El mensaje ha sido enviado. ";
        echo '<button onclick="history.back();">Volver</button>';
    } else {
        echo "❌ Error al enviar el mensaje.";
    }
}
?>