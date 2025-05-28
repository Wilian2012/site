// Coloque aqui o link do seu site final (após publicar)
const linkDoSite = "https://seusite.com"; // temporariamente pode usar "http://localhost"

QRious = window.QRCode;
QRCode.toCanvas(document.getElementById('qr-code'), linkDoSite, function (error) {
  if (error) console.error(error);
  console.log('QR code gerado!');
});

// Carrossel
let index = 0;
const imagens = document.querySelectorAll(".carrossel img");

setInterval(() => {
  imagens[index].classList.remove("active");
  index = (index + 1) % imagens.length;
  imagens[index].classList.add("active");
}, 3000); // Troca a cada 3 segundos


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
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 5 + 5 + "s";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(criarCoracao, 500); // Só esta linha!



function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem-secreta");
  const carrossel = document.getElementById("carrossel");

  mensagem.classList.remove("escondida");
  mensagem.classList.add("mostrar");

  carrossel.classList.remove("escondida");

  iniciarCarrossel();
}

function iniciarCarrossel() {
  const imagens = document.querySelectorAll(".carrossel img");
  let index = 0;

  // Ativa a primeira imagem apenas agora
  imagens[index].classList.add("active");

  setInterval(() => {
    imagens[index].classList.remove("active");
    index = (index + 1) % imagens.length;
    imagens[index].classList.add("active");
  }, 3000);
}


