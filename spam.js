var mensagem = prompt("Digite a mensagem");
var cont = prompt("Quantas vezes?");
var divTexto = document.getElementsByClassName("_13NKt copyable-text selectable-text")[1];
var event = new InputEvent("input", {bubbles: true});

window.InputEvent = window.Event || window.InputEvent;


for(let i = 0; i < cont; i++) {
  enviar(mensagem);
}

function enviar(mensagem) {
  divTexto.innerHTML = mensagem;
  divTexto.dispatchEvent(event);
  document.getElementsByClassName("_4sWnG")[0].click();
}