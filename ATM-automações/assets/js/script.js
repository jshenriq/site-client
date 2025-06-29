document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            // Opcional: Adicionar/remover classe para ícone de "X" no toggle
            // menuToggle.classList.toggle('is-active'); 
        });

        // Opcional: Fechar o menu ao clicar em um link (para navegação de página única)
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Fechar o menu APENAS se estiver no mobile (verificando se o menu não é estático)
                // Uma forma simples é verificar se a classe 'active' está lá, ou se o menuToggle está visível
                if (nav.classList.contains('active') && window.getComputedStyle(menuToggle).display !== 'none') {
                    nav.classList.remove('active');
                    // menuToggle.classList.remove('is-active'); // Se estiver usando o opcional acima
                }
            });
        });
    } else {
        console.warn("Elemento .menu-toggle ou .nav não encontrado no DOM.");
    }
});