// ------------------------ BOTÃO DE MENU -----------

document.addEventListener("DOMContentLoaded", function () {
  // Obtém o menu e o ícone do menu pelo seu ID e classe, respectivamente
  let menu = document.getElementById("menu-opcoes");
  let icon = document.querySelector(".bx-menu");

  // Adiciona um ouvinte de evento para o ícone do menu
  icon.addEventListener("click", function () {
    // Alterna a visibilidade do menu ao clicar no ícone
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block"; // Mostra o menu
    } else {
      menu.style.display = "none"; // Esconde o menu
    }
  });

  // Adiciona um ouvinte de evento para fechar o menu caso o clique seja fora dele
  document.addEventListener("click", function (event) {
    // Verifica se o clique foi fora do ícone e do menu, e se sim, esconde o menu
    if (!icon.contains(event.target) && !menu.contains(event.target)) {
      menu.style.display = "none";
    }
  });
});

// ---------------------------------------------------------------------------------------------------------
// ------------------------------------------FUNÇÃO PARA BUSCAR HISTÓRIA PELA PALAVRA-----------------------
// ---------------------------------------------------------------------------------------------------------

// Função assíncrona para buscar histórias com base na palavra digitada
async function buscarHistoria() {
  const palavra = document.getElementById("palavraHistoria").value.trim(); // Obtém a palavra inserida no campo de pesquisa, removendo espaços em branco

  // Verifica se a palavra está vazia e avisa o usuário
  if (!palavra) {
    alert("Digite uma palavra para buscar histórias.");
    return;
  }

  // Realiza uma requisição para o servidor buscando as histórias
  fetch(`http://localhost:3000/historia/${palavra}`)
    .then((response) => {
      // Verifica se a resposta foi bem-sucedida, caso contrário lança um erro
      if (!response.ok) {
        throw new Error("Erro ao buscar histórias.");
      }
      // Converte a resposta em formato JSON
      return response.json();
    })
    .then((historias) => {
      // Obtém o bloco onde as histórias serão exibidas
      const bloco = document.getElementById("blocoHistorias");
      bloco.innerHTML = ""; // Limpa qualquer conteúdo anterior

      // Verifica se não há histórias para exibir
      if (historias.length === 0) {
        bloco.innerHTML = `<p>Nenhuma história encontrada com a palavra ${palavra}.</p>`;
        return;
      }

      // Adiciona cada história ao bloco
      historias.forEach((Historia) => {
        // Cria um elemento para cada história
        const historiaElement = document.createElement("nav");
        historiaElement.classList.add("historia-item");
        historiaElement.innerHTML = `
                    <h3>História ${Historia.ID}</h3>
                    <br>
                    <p>${Historia.Historia}</p>
                    <img src=${Historia.ImagemURL} alt="Imagem da história" width="40%" height="40%">`;
        // Adiciona o elemento da história ao bloco
        bloco.appendChild(historiaElement);
        console.log(Historia.ImagemURL); // Exibe a URL da imagem no console (para debug)
      });
    })
    .catch((error) => {
      // Caso ocorra algum erro na requisição ou processamento, exibe uma mensagem de erro
      console.error("Erro:", error);
      alert("Ocorreu um erro ao buscar histórias.");
    });
}
