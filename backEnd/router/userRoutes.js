// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rota GET para listar todos os usuários
router.get("/mensagem", userController.getMensagem);

// Rota POST para criar um novo usuário
router.post("/mensagem", userController.createMensagem);

// Rota GET para buscar um usuário pelo ID
router.get("/mensagem/:tema", userController.getMensagemByTema);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////HISTÓRIAS MOTIVADORAS////////////////////////////////////////////////////////////////////

// Rota GET para listar todos os usuários
router.get("/historia", userController.getHistoria);

// Rota GET para buscar um usuário pelo ID
router.get("/historia/:historia", userController.getHistoriaByPalavra);

module.exports = router;