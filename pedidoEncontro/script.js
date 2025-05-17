// Declaração das variáveis.
const buttonYes = document.querySelector('.yes');
const buttonNo = document.querySelector('.no');
const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const title = document.querySelector('.title1 h1');
const heart = document.querySelector('.heart');

window.addEventListener('DOMContentLoaded', musicaOn);

function musicaOn() {
    var audio = document.getElementById("player");
    audio.volume = 0.2; // Volume em 20%
    audio.play();
}

buttonYes.addEventListener('click',()=>{
    // Mensagem personalizada
    const numero = '43996000295'; // Exemplo: 5511999999999
    const mensagem = encodeURIComponent('Sim viddaa, aceito sair com vocêêê! ');
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');

    content1.style.display = 'none';
    content2.style.display = 'block';
    title.textContent = 'NÂO ESQUEÇA DE AVISAR SEU AMOR DA SUA REPOSTA, \nSAIBA QUE ELE ESPERA POR VOCÊ E VOCÊ É MUITO ESPECIAL PARA ELE!';
    title.style.fontSize = '3rem';
}); 
 

// Função de animação do coração.
function heartBeat(){
    if(heart.style.width == '320px' && heart.style.height == '300px'){
        heart.style.width = '270px';
        heart.style.height = '250px';
        heart.style.transition = 'ease .5s';
    }else{
        heart.style.width = '320px';
        heart.style.height = '300px';
        heart.style.transition = 'ease .5s';
    }
} 

//Array para as posições que o Button "Não" deve fugir do mouse
const positions = ['-360', '388', '-299', '336', '-255', '220', '233', '266', '-315', '300']; 

//Eixo Y 
function runButtonY(){  
    let randomArray = parseInt(Math.random() * positions.length);
    this.style.transform = `translateY(${positions[randomArray]}px)`;
    this.style.transition = 'ease .1s';
}
//Eixo X
function runButtonX(){  
    let randomArray = parseInt(Math.random() * positions.length);
    this.style.transform = `translateX(${positions[randomArray]}px)`;
}
// Declaração/Ativação das funções.
buttonNo.addEventListener('mouseover', runButtonY);
buttonNo.addEventListener('mouseout', runButtonX);
setInterval(heartBeat, 300);


