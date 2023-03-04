<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
    <title>Confirmación de reserva</title>
</head>
<body>
    <p>Hola! Se ha recibido una nueva reserva {{ $order->created_at }}.</p>
    <p>Estos son los datos del usuario que ha realizado la reserva:</p>
    <ul>
        <li>Nombre: {{ $order->user->name }}</li>
    </ul>
    <p>Estos son los datos de su viaje reservado:</p>
    <ul>
        <li>Identificador: {{ $order->travel_id }}</li>
        <li>Origen: {{ $order->travel->origin }}</li>
        <li>Destino: {{ $order->travel->destination }}</li>
        <li>Fecha: {{ $order->travel->date }}</li>
     
    </ul>
</body>
</html>