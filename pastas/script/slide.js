let slides;
let pontoIndicador;
let imgAtual;
let tempoTroca;
let Intervalo;

function inicia(){
    slides = document.getElementsByClassName("slide");
    pontoIndicador = document.getElementsByClassName("ponto-indicador-slide");
    imgAtual = 0;
    tempoTroca = 0;
    Intervalo = 200;
    carregaImg(imgAtual);
    tempo();
}

function carregaImg(img){
   for(let i=0; i < slides.length; i++){
       slides[i].style.display = "none";
       pontoIndicador[i].className = pontoIndicador[i].className.replace(" ativo", "");
   }
   slides[img].style.display = "block";
   pontoIndicador[img].className += " ativo";
}

function tempo(){
    tempoTroca++;
    if(tempoTroca >= Intervalo){
        tempoTroca = 0;
        troca(1); //sempre vai receber 1 para passar para a prox imagem
    }
    window.requestAnimationFrame(tempo);
}

function troca(n){
    tempoTroca = 0;
    imgAtual+=n;
    if(imgAtual > slides.length-1){
        imgAtual = 0;
    }else if(imgAtual < 0){
        imgAtual = slides.length-1;
    }
    carregaImg(imgAtual);
}


 
function TrocaIndicador(img){
    imgAtual = img;
    tempoTroca = 0;
    carregaImg(imgAtual);
}

     window.addEventListener("load",inicia);  //chama a função inicia quando carrega a pagina
