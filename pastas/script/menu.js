let Hamburguer = document.querySelector(".menu-hamburguer");
let Sidebar = document.querySelector(".conteudo");
let lines = document.querySelectorAll('.line');
let home = document.querySelector('.home')

Hamburguer.addEventListener("click", () =>
    Sidebar.classList.toggle("show-menu")
);

function fecharSidebar() {
    Sidebar.className = Sidebar.className.replace(" show-menu", "");
}


window.addEventListener('scroll', () => {
    value = window.scrollY;
    if (value < window.innerHeight) {
        Hamburguer.style.color = "white";
        for (let i = 0; i < lines.length; i++) {
            lines[i].style.background = "white";
        }
    }
    if (value > (window.innerHeight - 50)) {
        Hamburguer.style.color = "black";
        for (let i = 0; i < lines.length; i++) {
            lines[i].style.background = "black";
        }
    }
    if (value > (window.innerHeight * 2)) {
        Hamburguer.style.color = "white";
        for (let i = 0; i < lines.length; i++) {
            lines[i].style.background = "white";
        }
    }
    if (value > ((window.innerHeight * 3) - 50)) {
        Hamburguer.style.color = "black";
        for (let i = 0; i < lines.length; i++) {
            lines[i].style.background = "black";
        }
    }
})

window.addEventListener('scroll', () => {
    value = window.scrollY;
    if (value > (window.innerHeight / 2)) {
        home.style.visibility = 'visible';
        home.style.color = "black";
    } else {
        home.style.visibility = 'hidden';
    }
    if (value > ((window.innerHeight) + 100)) {
        home.style.color = "white";
    }
    if (value > ((window.innerHeight * 2) + 100)) {
        home.style.color = "black";
    }
})