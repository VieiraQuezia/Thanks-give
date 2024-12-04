// models/userModel.js

const createConnection = require("../db"); // Importa a função para criar a conexão com o banco de dados
const { Request, TYPES } = require("tedious"); // Importa as classes necessárias do tedious

// Função para buscar todos os usuários no banco de dados
exports.getMensagensAleatorias = (callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados
  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }
    const query = `SELECT top 1 * FROM MensagensCurtas order by NEWID()`; // SQL para buscar todos os usuários
    const request = new Request(query, (err, rowCount) => {
      if (err) {
        return callback(err, null); // Trata erros de execução da consulta
      }
      if (rowCount === 0) {
        return callback(null, []); // Retorna um array vazio se não houver registros
      }
    });

    const result = [];
    request.on("row", (columns) => {
      result.push({
        id: columns[0].value,
        Mensagem: columns[1].value,
        Tema: columns[2].value
      });
    });

    // Ao completar a consulta, retorna o array com todos os usuários
    request.on("requestCompleted", () => {
      callback(null, result); // Retorna o array de resultados
    });

    connection.execSql(request); // Executa a consulta
  });
  connection.connect(); // Inicia a conexão
};

// Função para criar um novo usuário
exports.createMensagens = (data, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados
  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }
    const query = `INSERT INTO MensagensCurtas (Mensagem, Tema) VALUES (@Mensagem, @Tema)`; // SQL para inserir um novo usuário
    const request = new Request(query, (err) => {
      if (err) {
        callback(err); // Retorna erro se houver falha
      } else {
        callback(null, { message: "Mensagem inserida com sucesso!" });
      }
    });

    // Adiciona os parâmetros necessários para a inserção
    request.addParameter("Mensagem", TYPES.VarChar, data.Mensagem);
    request.addParameter("Tema", TYPES.VarChar, data.Tema)
    connection.execSql(request); // Executa a consulta
  });
  connection.connect(); // Inicia a conexão
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////HISTÓRIAS MOTIVADORAS////////////////////////////////////////////////////////////////////
//MODEL
  // Função para buscar um usuário pelo nome
exports.getHistoriaByPalavra = (palavra, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Se houver erro de conexão
    }

    // Consulta SQL para buscar um aluno pelo RM
    const query = `SELECT * FROM HistorasInspiradoras WHERE Historia LIKE @palavra`;

    const request = new Request(query, (err, rowCount) => {
      if (err) {
        return callback(err, null); // Se houver erro na execução da consulta
      }

      if (rowCount === 0) {
        return callback(null, []); // Se nenhum aluno for encontrado
      }
    });

    // Variável para armazenar os resultados da consulta
    const result = [];

    // Evento 'row' para capturar todas as linhas de resultados
    request.on("row", (columns) => {
      result.push({
        ID: columns[0].value, // Captura o valor da primeira coluna
        Historia: columns[1].value, // Captura o valor da segunda coluna
        ImagemURL: columns[2].value, // Captura o valor da terceira coluna
      });
    });

    // Evento 'requestCompleted' para retornar o resultado após a execução
    request.on("requestCompleted", () => {
      callback(null, result); // Retorna o aluno encontrado ou null
    });

    // Executa a consulta SQL
    request.addParameter("palavra", TYPES.VarChar, `%${palavra}%`); // Adiciona o RM como parâmetro
    connection.execSql(request); // Executa a consulta
  });

  connection.connect(); // Inicia a conexão com o banco de dados
};