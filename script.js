<<<<<<< HEAD

let btnMenu = document.getElementById('btnmenu')
let menuMobile = document.getElementById('menuMobile')
let orvelay =document.getElementById('orvelay-menu')

btnMenu.addEventListener('click', function() {
    menuMobile.classList.add('abrir-menu')
})
menuMobile.addEventListener('click', function() {
    menuMobile.classList.remove('abrir-menu')
})
orvelay.addEventListener('click', function() {
    menuMobile.classList.remove('abrir-menu')
})

//ENVIAR O FORMULARIO POR WHATSSAP

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('meuFormulario');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const numeroDoBarbeiro = '+5585996473206'; 

        // Obtenha os valores dos campos do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const celular = document.getElementById('celular').value;
        const mensagemTxt = document.getElementById('mensagem').value;


        // Construa o URL do WhatsApp com as informações do agendamento
        const mensagem = `Olá, meu nome é ${nome} com o e-mail: ${email} , numero de telefone ${celular}. Gostaria ${mensagemTxt}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${numeroDoBarbeiro}&text=${encodeURIComponent(mensagem)}`;

        // Redirecione o navegador para o URL do WhatsApp
        window.location.href = whatsappUrl;
    });
});
=======
let btnMenu = document.getElementById("btnmenu");
let menuMobile = document.getElementById("menuMobile");
let orvelay = document.getElementById("orvelay-menu");

btnMenu.addEventListener("click", function () {
  menuMobile.classList.add("abrir-menu");
});
menuMobile.addEventListener("click", function () {
  menuMobile.classList.remove("abrir-menu");
});
orvelay.addEventListener("click", function () {
  menuMobile.classList.remove("abrir-menu");
});

//ENVIAR O FORMULARIO POR WHATSSAP

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("meuFormulario");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const numeroDoBarbeiro = "+5585996473206";

    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const celular = document.getElementById("celular").value;
    const mensagemTxt = document.getElementById("mensagem").value;

    // Construa o URL do WhatsApp com as informações do agendamento
    const mensagem = `Olá, meu nome é ${nome} com o e-mail: ${email} , numero de telefone ${celular}. Gostaria ${mensagemTxt}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${numeroDoBarbeiro}&text=${encodeURIComponent(
      mensagem
    )}`;

    // Redirecione o navegador para o URL do WhatsApp
    window.location.href = whatsappUrl;
  });
});

// ANIMAÇAO DE HREF

const menuItens = document.querySelectorAll(".menu-dekstop a");

menuItens.forEach((item) => {
  item.addEventListener("click", scrollToIndOnclick);
});

function scrollToIndOnclick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute("href");
  const to = document.querySelector(id).offsetTop;
  console.log("section");

  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

// ANIMAÇAO SCROLL

window.sr = ScrollReveal({ reset: true });

sr.reveal(".topoSite", {
  rotate: { x: 80, y: 0, z: 0 },
  duration: 3000,
});

sr.reveal(".especialidade", {
  rotate: { x: 0, y: 80, z: 0 },
  duration: 3000,
});

sr.reveal(".sobre", {
  rotate: { x: 100, y: 0, z: 0 },
  duration: 3000,
});
>>>>>>> 70b3c26 (feito)
