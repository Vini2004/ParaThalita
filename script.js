const conteudo1 = document.querySelector(".conteudo1");
const conteudo2 = document.querySelector(".conteudo2");
const conteudo3 = document.querySelector(".conteudo3");
const conteudo4 = document.querySelector(".conteudo4");
const conteudo5 = document.querySelector(".conteudo5");
const conteudo6 = document.querySelector(".conteudo6");
const conteudo7 = document.querySelector(".conteudo7");
const conteudo8 = document.querySelector(".conteudo8");
const conteudo9 = document.querySelector(".conteudo9");
const conteudo10 = document.querySelector(".conteudo10");
const conteudo11 = document.querySelector(".conteudo11");
const conteudo12 = document.querySelector(".conteudo12");
const conteudo13 = document.querySelector(".conteudo13");
const conteudo14 = document.querySelector(".conteudo14");
const conteudo15 = document.querySelector(".conteudo15");
const conteudo17 = document.querySelector(".conteudo17");
const conteudo18 = document.querySelector(".conteudo18");
const conteudo19 = document.querySelector(".conteudo19");
const conteudo20 = document.querySelector(".conteudo20");
const conteudo21 = document.querySelector(".conteudo21");
const conteudo22 = document.querySelector(".conteudo22");
const conteudo23 = document.querySelector(".conteudo23");

window.addEventListener('DOMContentLoaded', musicaOn);

const conteudo16 = document.querySelector(".conteudo16");



function mudarConteudo(){
    document.querySelector(".conteudo1").classList.add(".animacaoFaded")
    conteudo1.style.display = 'none';
    conteudo2.style.display = 'flex';
}

function naoToque(){
    alert("Nao toque!!! é uma obra de arte!!!");
}

function mostrarConteudo(){
    var display = document.getElementById("fotoGata").style.display;
    if(display == "none"){
        document.getElementById("fotoGata").style.display = 'block';
    }
    else{
        document.getElementById("fotoGata").style.display = 'none';
    }

    var mostrarTexto = document.getElementById("texto").style.display;
    if(mostrarTexto == "none"){
        document.getElementById("texto").style.display = 'block';
    }
    else{
        document.getElementById("texto").style.display = 'none';
    }
}
function musicaOn() {
    var audio = document.getElementById("player");
    audio.volume = 0.25; // Volume inicial (20%)
    audio.play();
}

function mudarFoto1(){
    if(conteudo2.style.display == 'block'){
        conteudo2.style.display = 'none';
        conteudo3.style.display = 'block';
    }else{
        conteudo2.style.display = 'block';
        conteudo3.style.display = 'none';
    }
} 

function mudarFoto2(){
    if(conteudo2.style.display == 'block'){
        conteudo2.style.display = 'none';
        conteudo4.style.display = 'block';
        
    }else{
        conteudo2.style.display = 'block';
        conteudo4.style.display = 'none';
    }
}

function mudarFoto3(){
    if(conteudo2.style.display == 'block'){
        conteudo2.style.display = 'none';
        conteudo5.style.display = 'block';
        
    }else{
        conteudo2.style.display = 'block';
        conteudo5.style.display = 'none';
    }
}

function mudarFoto4(){
    if(conteudo2.style.display == 'block'){
        conteudo2.style.display = 'none';
        conteudo6.style.display = 'block';
        
    }else{
        conteudo2.style.display = 'block';
        conteudo6.style.display = 'none';
    }
}

function mudarFoto5(){
    if(conteudo2.style.display == 'block'){
        conteudo2.style.display = 'none';
        conteudo7.style.display = 'block';
        
    }else{
        conteudo2.style.display = 'block';
        conteudo7.style.display = 'none';
    }
}

function mudarFoto6(){
    if(conteudo2.style.display == 'block'){
        conteudo2.style.display = 'none';
        conteudo8.style.display = 'block';
        
    }else{
        conteudo2.style.display = 'block';
        conteudo8.style.display = 'none';
    }
}

function mudarFoto7(){
    if(conteudo2.style.display == 'block'){
        conteudo2.style.display = 'none';
        conteudo9.style.display = 'block';
        
    }else{
        conteudo2.style.display = 'block';
        conteudo9.style.display = 'none';
    }
}

function mudarFoto8(){
    if(conteudo2.style.display == 'block'){
        conteudo2.style.display = 'none';
        conteudo10.style.display = 'block';
        
    }else{
        conteudo2.style.display = 'block';
        conteudo10.style.display = 'none';
    }
}

function mudarFoto9(){
    if(conteudo2.style.display == 'block'){
        conteudo2.style.display = 'none';
        conteudo11.style.display = 'block';
        
    }else{
        conteudo2.style.display = 'block';
        conteudo11.style.display = 'none';
    }
}

function mudarFotoFinal(){
    if(conteudo2.style.display == 'block'){
        conteudo2.style.display = 'none';
        conteudo16.style.display = 'block';
        
    }else{
        conteudo2.style.display = 'block';
        conteudo16.style.display = 'none';
    }
}