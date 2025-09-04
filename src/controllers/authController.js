const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Função de Login do Usuário
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Verificar se o usuário existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Credenciais inválidas.' });
    }

    // 2. Comparar a senha fornecida com a senha criptografada
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Credenciais inválidas.' });
    }

    // 3. Gerar o Access Token (com tempo de expiração curto)
    const accessToken = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '15m' } // Expira em 15 minutos
    );

    // 4. Gerar o Refresh Token (com tempo de expiração longo)
    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' } // Expira em 7 dias
    );

    // 5. Retornar os tokens e os dados do usuário
    res.status(200).json({
      message: 'Login bem-sucedido!',
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};