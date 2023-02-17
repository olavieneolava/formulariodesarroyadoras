// Funciones JS práctica final

function comprobarDatos(){
    //Check name:
    nombre = document.getElementById('nombre')
    span_nombre = document.getElementById('span_nombre')
    span_nombre_texto = document.getElementById('span_nombre_texto')
    if (/\d/.test(nombre.value)){
        // El nombre tiene números
        nombre.className = "input-error"
        span_nombre.style.display = "none"
        span_nombre_texto.style.display = "block"
    }else if(nombre.value.length==''){
        // No se ha introducido un valor o se ha dejado en blanco
        nombre.className = "input-error"
        span_nombre.style.display = "block"
        span_nombre_texto.style.display = "none"
    }else{
        //El nombre es válido
        nombre.className = "input-success"
        span_nombre.style.display = "none"
        span_nombre_texto.style.display = "none"
    }

    //Check email: Solo se aceptan emails en minúsculas. No debería ser un problema.
    regex_email = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    email = document.getElementById('email')
    span_email = document.getElementById('span_email')
    if (regex_email.test(email.value)){
        email.className = "input-success"
        span_email.style.display = "none"
    }else{
        email.className = "input-error"
        span_email.style.display = "block"
    }

    //Check password:
    clave = document.getElementById('clave')
    span_clave = document.getElementById('span_clave')
    span_clave_len = document.getElementById('span_clave_len')
    if (clave.value.length>=8){
        // Se ha introducido una clave válida
        clave.className = "input-success"
        span_clave.style.display = "none"
        span_clave_len.style.display = "none"
    }else if( !clave.value) {
        // No se ha introducido nada
        clave.className = "input-error"
        span_clave.style.display = "block"
        span_clave_len.style.display = "none"
    }else{
        // La clave no es válida porque no tiene mínimo 8 caracteres
        clave.className = "input-error"
        span_clave.style.display = "none"
        span_clave_len.style.display = "block"
    }

    //Check password confirmation:
    clave_confirmar = document.getElementById('clave_confirmar')
    span_clave_confirmar = document.getElementById('span_clave_confirmar')
    span_clave_confirmar_coinciden = document.getElementById('span_clave_confirmar_coinciden')
    if (clave_confirmar.value==''){
        //Caso no se introduce una clave
        clave_confirmar.className = "input-error"
        span_clave_confirmar.style.display = "block"
        span_clave_confirmar_coinciden.style.display = "none"
    }else if (clave_confirmar.value == clave.value){
        // Caso se introduce una clave y coinciden
        clave_confirmar.className = "input-success"
        span_clave_confirmar.style.display = "none"
        span_clave_confirmar_coinciden.style.display = "none"
    }else{
        // Caso que introducimos una clave pero no coinciden
        clave_confirmar.className = "input-error"
        span_clave_confirmar.style.display = "none"
        span_clave_confirmar_coinciden.style.display = "block"

    }

    if(document.getElementsByClassName('input-success').length == 4){
        alert('Se han registrado correctamente los datos.')
    }
}