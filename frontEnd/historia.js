// ------------------------ BOTÃO DE MENU -----------

// Importando a função 'error' do módulo 'console' (não é utilizado no código atual)
const { error } = require("console");

document.addEventListener('DOMContentLoaded', function() {
    // Obtendo o menu e o ícone do menu pelo seu ID e classe, respectivamente
    let menu = document.getElementById('menu-opcoes');
    let icon = document.querySelector('.bx-menu');

    // Adicionando um ouvinte de evento para o ícone do menu
    icon.addEventListener('click', function() {
        // Alterna a exibição do menu ao clicar no ícone
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';  // Mostra o menu
        } else {
            menu.style.display = 'none';   // Esconde o menu
        }
    });

    // Adicionando um ouvinte de evento para fechar o menu caso o clique seja fora dele
    document.addEventListener('click', function(event) {
        // Verifica se o clique foi fora do ícone e do menu, e se sim, esconde o menu
        if (!icon.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = 'none';
        }
    });
});



// ---------------------------------------------------------------------------------------------------------
// ------------------------------------------FUNÇÃO PARA BUSCAR HISTORIA PELA PALAVRA-----------------------
// ---------------------------------------------------------------------------------------------------------


