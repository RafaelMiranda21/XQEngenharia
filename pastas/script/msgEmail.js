export function Mensagem(msg, tipo) {
    let back;
    let cor;
    if (tipo == "erro") {
        back = "rgb(255 111 111 / 58%)";
        cor = "#a20404";
    } else {
        back = "rgb(158 245 148 / 58%)";
        cor = "rgb(8 82 0 / 58%)";
    }
    let mensagem = document.getElementById("mensagem");
    mensagem.classList.add('visible');;
    mensagem.style.background = back;
    mensagem.style.color = cor;
    mensagem.innerHTML += `
    <span id="msgForm">${msg}</span>   
    `;
    tempo();
}
let tempoind = 900;
let ind = 0;

function tempo() {
    ind++;
    if (ind < tempoind) {
        window.requestAnimationFrame(tempo);
    } else {
        mensagem.classList.remove('visible');
        mensagem.removeChild(document.getElementById('msgForm'))
    }
}