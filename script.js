
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