// ------------------------ BOTÃO DE MENU -----------

const { error } = require("console");

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






const apiUrl = "http://localhost:3000/mensagem"; // URL da API

// Exibe o spinner enquanto carrega os dados
function showLoading(target) {
  target.innerHTML = `<div class="spinner show"></div>`;
}


async function buscarMensagem() {
  try {
    const response = await fetch('http://localhost:3000/mensagem');
    if (!response.ok) {
      throw new Error("Mensagem não encontrada");
    
    }
    const data = await response.json();
    console.log("Dados", data);
    document.getElementById("blocoTextoAleatorio").innerHTML = data[0].Mensagem;
    document.getElementById("temaDaMensagem").innerHTML = `Tema: ${data[0].Tema}`;
    document.querySelector(".blocoAleatorio").style.display = "block";
    document.getElementById("erroMensagem").style.display = "none";
  } catch (error) {
    document.getElementById("erroMensagem").innerHTML = error.message;
    document.getElementById("erroMensagem").style.display = "block";
    document.querySelector(".blocoAleatorio").style.display = "none";
  }
}







async function addMensagem() {
  const mensagemInput = document.getElementById("mensagemGratidao");
  const temaInput = document.getElementById("temaMensagem");
  
  const Mensagem = mensagemInput.value.trim();
  const Tema = temaInput.value.trim();

  // Validação dos campos
  if (!Mensagem || !Tema) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/mensagem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Mensagem, Tema }),
    });

    if (response.ok) {
      alert("Mensagem adicionada com sucesso!");
      mensagemInput.value = "";
      temaInput.value = "";
    } else {
      const error = await response.json();
      alert(`Erro ao adicionar mensagem: ${error.Message}`);
    }
  } catch (error) {
    alert(error.Message);
  }
}


