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






const apiUrl = "http://localhost:3000/mensagem"; // URL da API

// Exibe o spinner enquanto carrega os dados
function showLoading(target) {
  target.innerHTML = `<div class="spinner show"></div>`;
}




// Função para adicionar um novo usuário
async function addMensagem() {
  const MensagemInput = document.getElementById("Mensagem");
  const TemaInput = document.getElementById("Tema");
  

  const Mensagem = MensagemInput.value.trim();
  const Tema = TemaInput.value.trim();
 

  // Validação dos campos
  if (!Mensagem || !Tema) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }



  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Mensagem, Tema }),
  });

  if (response.ok) {
    alert("Frase adicionada com sucesso!");
    // Limpa os campos do formulário
    MensagemInput.value = "";
    TemaInput.value = "";
  
    fetchUsers(); // Atualiza a lista de usuários
  } else {
    const error = await response.json();
    alert(`Erro ao adicionar frase: ${error.message}`);
  }
}











// Função para buscar um usuário por ID
async function fetchUserById() {
  const MensagemIdInput = document.getElementById("MensagemId");
  const MensagemId = MensagemIdInput.value.trim();

  if (!MensagemId || isNaN(MensagemId) || MensagemId <= 0) {
    alert("Por favor, insira um  válido.");
    return;
  }

  showLoading(userDetails);

  try {
    const response = await fetch(`${apiUrl}/${MensagemId}`);
    if (response.status === 404) {
      userDetails.innerHTML = `<p>Usuário não encontrado.</p>`;
    } else if (!response.ok) {
      const error = await response.json();
      alert(`Erro: ${error.error || "Erro desconhecido ao buscar usuário"}`);
    } else {
      const user = await response.json();
      userDetails.innerHTML = `
        <h2>Detalhes do Usuário</h2>
        <p><strong>ID:</strong> ${user.id}</p>
        <p><strong>Nome:</strong> ${user.Mensagem}</p>
        <p><strong>Idade:</strong> ${user.age}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Contato:</strong> ${user.contact}</p>
      `;
    }
  } catch (error) {
    alert("Erro ao buscar usuário. Verifique sua conexão.");
    userDetails.innerHTML = "";
  }
}



// Carrega a lista de usuários ao carregar a página
fetchUsers();