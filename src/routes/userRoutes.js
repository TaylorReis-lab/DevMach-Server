const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');

// Rota para listar usuários
router.get('/', getUsers);

// Rota para criar usuário
router.post('/', createUser);

module.exports = router;
