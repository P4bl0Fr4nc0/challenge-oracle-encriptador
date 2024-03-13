


// declaracion de variables de botones
let boton1 = document.querySelector(".btn-encriptar");
boton1.onclick = encriptar;

let boton2 = document.querySelector(".btn-desencriptar");
boton2.onclick = descencriptar;

let boton3 = document.querySelector(".btn-copiar");
boton3.onclick = copiar;


// let mensaje = document.querySelector(".mensaje");



// Funcion para encriptar
function encriptar(){    
    
    let TextArea_e = document.querySelector(".area-texto").value;

    TextArea_e=TextArea_e.toLowerCase();
    
    console.log(TextArea_e);

    let textoCifrado = TextArea_e.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    
    console.log(textoCifrado);
    
    //Quitar imagen de fondo del area de texto de mensaje 
    document.querySelector(".mensaje").value = textoCifrado;
    document.querySelector(".mensaje").style.backgroundImage ="none";   

    /* remueve el atributo de disponibilidad del boton no necesario si el boton esta oculto con la propiedad visibility se deja para recordar su funcionamient */
    boton3.removeAttribute('disabled');
    // se usa la propiedad visibilidad para mostrar el boton copiar 
    boton3.style.visibility="visible";
  
}

// Funcion para descencriptar
function descencriptar() {

    let TextArea_d = document.querySelector(".area-texto").value;
    TextArea_d=TextArea_d.toLowerCase();
    

    let textoDescifrado =  TextArea_d.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");

    document.querySelector(".mensaje").value = textoDescifrado;
    document.querySelector(".mensaje").style.backgroundImage ="none"; 

      /* remueve el atributo de disponibilidad del boton no necesario si el boton esta oculto con la propiedad visibility se deja para recordar su funcionamient */
      boton3.removeAttribute('disabled');
      // se usa la propiedad visibilidad para mostrar el boton copiar 
      boton3.style.visibility="visible";
    

}


function copiar() {
    let copiar = document.querySelector(".mensaje");

    copiar.select();
    document.execCommand('copy');

    let desktop = window.matchMedia('(min-width: 768px)');

    if (desktop.matches){
        document.querySelector(".mensaje").style.backgroundImage='url("img/Muneco.png")'; 
    }
    
    copiar.value = "";
    alert("Copiado al portapapeles");

    document.querySelector(".area-texto").value="";
    boton3.setAttribute('disabled','true');
    boton3.style.visibility="hidden";

}


