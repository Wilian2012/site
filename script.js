// Coloque aqui o link do seu site final (após publicar)
const linkDoSite = "https://seusite.com"; // temporariamente pode usar "http://localhost"

QRious = window.QRCode;
QRCode.toCanvas(document.getElementById('qr-code'), linkDoSite, function (error) {
  if (error) console.error(error);
  console.log('QR code gerado!');
});

// Carrossel
let index = 0;
const fotos = document.querySelectorAll('.carrossel img');

setInterval(() => {
  fotos[index].classList.remove('active');
  index = (index + 1) % fotos.length;
  fotos[index].classList.add('active');
}, 3000);

// Digitação da mensagem
const mensagem = "Você é minha pessoa favorita no mundo. Te amo para sempre!";
let i = 0;
function digitar() {
  if (i < mensagem.length) {
    document.getElementById("mensagem").innerHTML += mensagem.charAt(i);
    i++;
    setTimeout(digitar, 60);
  }
}
digitar();

// Corações flutuando
function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('heart');
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.animationDuration = Math.random() * 5 + 5 + "s";

  // em dispositivos móveis, reduz a quantidade
  const isMobile = window.innerWidth < 600;
  if (!isMobile || Math.random() < 0.4) {
    document.querySelector('.hearts').appendChild(coracao);
    setTimeout(() => coracao.remove(), 10000);
  }
}

setInterval(criarCoracao, 300);


function mostrarMensagem() {
  const div = document.getElementById('mensagem-secreta');
  div.classList.remove('escondida');
  div.classList.add('mostrar');
}
