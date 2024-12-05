// ------------------------ BOTÃO DE MENU -----------


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

async function buscarHistoria() {
    const palavra = document.getElementById("palavraHistoria").value.trim();

    if (!palavra) {
        alert("Digite uma palavra para buscar histórias.");
        return;
    }

    fetch(`http://localhost:3000/historia/${palavra}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar histórias.");
            }
            return response.json();
        })
        .then(historias => {
            const bloco = document.getElementById("blocoHistorias");
            bloco.innerHTML = "";  

            if (historias.length === 0) {
                bloco.innerHTML = `<p>Nenhuma história encontrada com a apalvra ${palavra}.</p>`;
                return;
            }

            // Adiciona cada história ao bloco
            historias.forEach(Historia => {
                const historiaElement = document.createElement("nav");
                historiaElement.classList.add("historia-item");
                historiaElement.innerHTML = `
                    <h3>História ${Historia.ID}</h3>
                    <br>
                    <p>${Historia.Historia}</p>
                    <img src=${Historia.ImagemURL} alt=Imagem da história>`;
                bloco.appendChild(historiaElement);
                console.log(Historia.ImagemURL)
            });
        })

        .catch(error => {
            console.error("Erro:", error);
            alert("Ocorreu um erro ao buscar histórias.");

        });
};

