const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");

function adjustTextAreaHeight(element) {
    element.style.height = 'auto';  // Resetea la altura para calcularla correctamente
    element.style.height = (element.scrollHeight) + 'px';
}

textArea.addEventListener('input', () => adjustTextAreaHeight(textArea));
mensaje.addEventListener('input', () => adjustTextAreaHeight(mensaje));

function btnEncriptar(){
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none"
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
  }

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado; // Es importante devolver el resultado
}

function copiar() {
  mensaje.select();
  document.execCommand('copy');
}


function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado; // Es importante devolver el resultado
}


document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal-reglas");
    const aceptarBtn = document.getElementById("aceptar-btn");
    const reglasBtn = document.getElementById("reglas-btn");

    aceptarBtn.addEventListener("click", function() {
        modal.style.display = "none";
        reglasBtn.style.display = "block";
        reglasBtn.classList.add("animate__animated", "animate__fadeIn");
    });

    reglasBtn.addEventListener("click", function() {
        modal.style.display = "flex";
    });
});

function adjustTextAreaHeight(element) {
    element.style.height = 'auto';
    element.style.height = (element.scrollHeight) + 'px';
}

document.querySelector(".textarea").addEventListener('input', function() {
    adjustTextAreaHeight(this);
});

document.querySelector(".mensaje").addEventListener('input', function() {
    adjustTextAreaHeight(this);
});
