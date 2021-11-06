var socket = io();
        socket.on('connect',function(){
            console.log('Conectado al servidor')
        })
        socket.on('disconnect',function(){
            console.log('Perdimos conexion con els ervidor')
        })
        socket.emit('Enviarmensaje',{
            usuario:'Alan',
            menssage:'hola mundo'
        },function(res){
            console.log(res)
        });

        socket.on('enviarMensaje',function(respuesta){
            console.log('Servidor: ',respuesta)
        })