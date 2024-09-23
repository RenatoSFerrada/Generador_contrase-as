let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
let contrasena = document.getElementById("contrasena");

function generar() {

    let numeroDigitado = parseInt(cantidad.value);  

    if (numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return;
    }

    let password = "";

    for (let i = 0; i < numeroDigitado; i++) {
        
        let caracterAleatoreo = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatoreo;

    }

    contrasena.value = password;

    setTimeout(function() {
        if (!validar(password)){
            alert("La contraseña generada no es segura, deberia tener almenos una mayuscula y un numero.");
        }
    }, 100);
  
    
}

function validar(password) {
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /\d/.test(password);
    return tieneMayuscula && tieneNumero;
}

function limpiar(){
    contrasena.value = "";
}









