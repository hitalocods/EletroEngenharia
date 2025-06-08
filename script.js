document.addEventListener('DOMContentLoaded', () => {
    console.log('Site de Energia Solar carregado!');

    // Exemplo de como você pode adicionar alguma interatividade básica, se desejar.
    // Por exemplo, um efeito de "scroll suave" para âncoras.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Você pode adicionar validação de formulário aqui, se não for usar um serviço externo
    // ou se o serviço externo tiver uma validação simples.
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Exemplo de validação simples para o WhatsApp
            const whatsappInput = document.getElementById('whatsapp');
            const whatsappPattern = /^[0-9]{10,11}$/; // Ex: 86988120804 (11 dígitos com DDD)

            if (!whatsappPattern.test(whatsappInput.value.replace(/\D/g, ''))) {
                alert('Por favor, insira um número de WhatsApp válido (somente números, com DDD).');
                event.preventDefault(); // Impede o envio do formulário
            }
            // Para um formulário de contato real, você enviaria os dados para um backend
            // ou usaria um serviço como Formspree/Netlify Forms.
            // A 'action' do formulário em index.html precisa ser configurada para isso.
        });
    }
});