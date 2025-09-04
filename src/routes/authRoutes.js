const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota para o login
router.post('/login', authController.login);

// Rota protegida para retornar os dados do usuário autenticado
router.get('/me', authMiddleware, authController.getMe);

module.exports = router;