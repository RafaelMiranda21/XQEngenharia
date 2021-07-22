let assunto = document.getElementById('input-assunto');
let input = document.querySelectorAll('.input-group');

function desc() {
    let option = document.getElementById('opcao');
    if (option.value == 'Outro') {
        assunto.innerHTML += `
            <input type="text" placeholder="Digite o Assunto *" id="input-desc" name="assunto-desc" required />
        `;
        input[3].style.padding = ".9rem 0px 0px 0px";
    } else {
        if (document.getElementById('input-desc')) {
            document.getElementById('input-assunto').removeChild(document.getElementById('input-desc')); //remove a div
            input[3].style.padding = ".2rem 0px 0px 0px";
        }
    }
}