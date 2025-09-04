const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // 1. Obter o token do header 'Authorization'
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // 2. Verificar o token e decodificá-lo
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Anexar o ID do usuário à requisição
    req.user = { id: decoded.id };

    // 4. Continuar para a próxima função (o endpoint)
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido ou expirado.' });
  }
};

module.exports = authMiddleware;