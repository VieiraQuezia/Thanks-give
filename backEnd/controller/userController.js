// controllers/userController.js

const userModel = require("..//model/userModel"); // Importa o model para interagir com o banco

// Função para lidar com a requisição de listagem de usuários
exports.getMensagemAleatoria = (req, res) => {
  userModel.getMensagensAleatorias((err, mensagem) => {
    if (err) {
      res.status(500).send("Erro ao buscar a mensagem"); // Retorna um erro 500 se algo deu errado
    } else {
      res.json(mensagem); // Retorna os usuários em formato JSON
    }
  });
};

// Função para lidar com a requisição de criação de usuário
exports.createMensagem = (req, res) => {
  const data = req.body; // Extrai o nome do corpo da requisição
  userModel.createMensagem(data, (err) => {
    if (err) {
      res.status(500).send("Erro ao criar mensagem"); // Retorna um erro 500 se algo deu errado
    } else {
      res.status(201).send("Mensagem adicionada com sucesso!"); // Retorna status 201 (criado) se bemsucedido
    }
  });
};


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////HISTÓRIAS MOTIVADORAS////////////////////////////////////////////////////////////////////
  
  // Função para buscar um aluno pelo Nome
  exports.getHistoriaByPalavra = (req, res) => {
      const { historia } = req.params; // Extrai o RM dos parâmetros da URL
    
      userModel.getMensagemByTema(mensagem, (err, historia) => {
        if (err) {
          res.status(500).send("Erro ao buscar historia"); // Erro no servidor
        } else {
          res.json(historia); // Retorna os dados do aluno em formato JSON
        }
      });
    };
  