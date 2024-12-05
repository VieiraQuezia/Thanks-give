// ------------------------ BOTÃO DE MENU -----------

document.addEventListener('DOMContentLoaded', function() {
  let menu = document.getElementById('menu-opcoes');
  let icon = document.querySelector('.bx-menu');

  icon.addEventListener('click', function() {
      if (menu.style.display === 'none' || menu.style.display === '') {
          menu.style.display = 'block';
      } else {
          menu.style.display = 'none';
      }
  });

  // Fecha o menu se clicar fora dele
  document.addEventListener('click', function(event) {
      if (!icon.contains(event.target) && !menu.contains(event.target)) {
          menu.style.display = 'none';
      }
  });
});


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

// --------------------------------------------------------------------------
// ------------------------ SEÇÃO DE MENSAGENS ----------------------------
// --------------------------------------------------------------------------

// URL da API para buscar e adicionar mensagens
const apiUrl = "http://localhost:3000/mensagem"; 

// Função para mostrar um "spinner" enquanto os dados são carregados
function showLoading(target) {
  target.innerHTML = `<div class="spinner show"></div>`; // Exibe um "spinner" de carregamento
}


// Função assíncrona para buscar uma mensagem da API
async function buscarMensagem() {
  try {
    const response = await fetch('http://localhost:3000/mensagem'); // Fazendo a requisição à API
    if (!response.ok) {
      throw new Error("Mensagem não encontrada"); // Lança um erro se a resposta não for bem-sucedida
    }
    const data = await response.json();  // Converte a resposta em JSON
    console.log("Dados", data);  // Exibe os dados no console

    // Exibe a mensagem e o tema no HTML
    document.getElementById("blocoTextoAleatorio").innerHTML = data[0].Mensagem;
    document.getElementById("temaDaMensagem").innerHTML = `Tema: ${data[0].Tema}`;
    document.querySelector(".blocoAleatorio").style.display = "block";  // Mostra a área com o texto aleatório
    document.getElementById("erroMensagem").style.display = "none";  // Esconde a área de erro

  } catch (error) {
    // Se ocorrer um erro, exibe a mensagem de erro
    document.getElementById("erroMensagem").innerHTML = error.message;
    document.getElementById("erroMensagem").style.display = "block";
    document.querySelector(".blocoAleatorio").style.display = "none";  // Esconde o bloco de mensagem aleatória em caso de erro
  }
}





// Função assíncrona para adicionar uma nova mensagem via API
async function addMensagem() {
  const mensagemInput = document.getElementById("mensagemGratidao"); // Obtém o valor do campo de mensagem
  const temaInput = document.getElementById("temaMensagem");  // Obtém o valor do campo de tema
  
  const Mensagem = mensagemInput.value.trim();  // Remove espaços extras
  const Tema = temaInput.value.trim();  // Remove espaços extras

  // Valida os campos para garantir que estão preenchidos
  if (!Mensagem || !Tema) {
    alert("Por favor, preencha todos os campos.");  // Exibe um alerta se algum campo estiver vazio
    return;
  }

  try {
    // Fazendo a requisição POST para adicionar a mensagem na API
    const response = await fetch("http://localhost:3000/mensagem", {
      method: "POST",  // Método POST para adicionar dados
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Mensagem, Tema }), // Corpo da requisição com os dados em formato JSON
    });

    if (response.ok) {
      alert("Mensagem adicionada com sucesso!");  // Exibe sucesso
      mensagemInput.value = "";  // Limpa os campos após sucesso
      temaInput.value = "";
    } else {
      const error = await response.json();  // Se falhar, captura o erro retornado pela API
      alert(`Erro ao adicionar mensagem: ${error.Message}`);  // Exibe o erro
    }
  } catch (error) {
    alert(error.Message);  // Exibe erro caso algo dê errado com a requisição
  }
}
