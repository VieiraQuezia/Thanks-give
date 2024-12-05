// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

// Rota POST para criar um novo usuário
router.post("/mensagem", userController.createMensagem);

// Rota GET para buscar um usuário pelo ID
router.get("/mensagem", userController.getMensagemAleatoria);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////HISTÓRIAS MOTIVADORAS////////////////////////////////////////////////////////////////////

// Rota GET para buscar um usuário pelo ID
router.get("/historia/:palavra", userController.getHistoriasByPalavras);

module.exports = router;