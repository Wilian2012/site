const imagens = document.querySelectorAll(".carrossel img");
const mensagensRomanticas = [
  "Você é a razão do meu sorriso diário. 💖",
  "Cada momento contigo é único. 🌹",
  "Meu amor por você só cresce. 💕",
  "Contigo o mundo fica mais bonito. 🌸",
  "Você ilumina meus dias. ☀️",
  "Te amar é minha melhor escolha. 💘",
  "Nosso amor é infinito. 🔗",
  "Você é meu sonho realizado. ✨",
  "Ao seu lado sou completo. 🥰",
  "Você é tudo para mim. 💓",
  "Com você, tudo faz sentido. 💌",
  "Para sempre nós. 💍"
];

let index = 0;

const mensagemElemento = document.createElement("p");
mensagemElemento.classList.add("mensagem-romantica");
mensagemElemento.style.display = "none"; // começa invisível
document.querySelector(".container").appendChild(mensagemElemento);

const mensagemFinal = "Todas essas fotos foi tirada em algum momento especial que passamos juntos, são tantas fotos, tantos momentos que se fosse colocar todos iria virar um album gigante, bom, quero pedir desculpa não poder te dar um presente top, mas saiba que fiz esse pequeno site/página como demonstração do amor que sinto por você. Te amo muito! O melhor presente do mundo eu já tenho, que é você.";

function atualizarCarrossel() {
  // Se for a última imagem, mostrar mensagem final
  if (index === imagens.length) {
    document.querySelector(".carrossel").style.display = "none"; // Esconde carrossel
    mensagemElemento.textContent = mensagemFinal;
    mensagemElemento.style.display = "block"; // Mostra mensagem final
    return; // Para o carrossel
  }

  imagens.forEach(img => img.classList.remove("active"));
  imagens[index].classList.add("active");

  mensagemElemento.textContent = mensagensRomanticas[index % mensagensRomanticas.length];
  mensagemElemento.style.display = "block"; // Garante que vai aparecer

  index++;
}

function iniciarCarrossel() {
  atualizarCarrossel(); // Primeira imagem e mensagem
  setInterval(() => {
    atualizarCarrossel();
  }, 10000);
}


const audio = document.getElementById("audioPlayer");
const botaoPlayer = document.getElementById("botaoPlayer");

function toggleMusica() {
  if (audio.paused) {
    audio.play();
    botaoPlayer.textContent = "⏸️ Pausar";
  } else {
    audio.pause();
    botaoPlayer.textContent = "🔊 Aumente o volume";
  }
}

function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem-secreta");
  const carrossel = document.getElementById("carrossel");
  const botao = document.querySelector(".botao-surpresa");

  mensagem.classList.remove("escondida");
  mensagem.classList.add("mostrar");

  carrossel.classList.remove("escondida");

  botao.style.display = "none";

  // Mostra o botão player
  botaoPlayer.classList.remove("escondida");
  iniciarCarrossel();
}

// Digitação da mensagem inicial (vazia neste caso)
const mensagemInicial = "";
let i = 0;
function digitar() {
  if (i < mensagemInicial.length) {
    document.getElementById("mensagem-secreta").innerHTML += mensagemInicial.charAt(i);
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
setInterval(criarCoracao, 500);
