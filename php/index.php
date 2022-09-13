<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Успешная регистрация</title>
</head>
<body>
    <h1>Ваши данные успешно обработаны!</h1>
    <?php
        /* at the top of 'check.php' */
        if ( $_SERVER['REQUEST_METHOD']=='GET' && realpath(__FILE__) == realpath( $_SERVER['SCRIPT_FILENAME'] ) ) {
            /* 
                Up to you which header to send, some prefer 404 even if 
                the files does exist for security
            */
            header( 'HTTP/1.0 403 Forbidden', TRUE, 403 );

            /* choose the appropriate page to redirect users */
            die( header( 'location: /error.php' ) );

        }
    ?>
</body>
</html>