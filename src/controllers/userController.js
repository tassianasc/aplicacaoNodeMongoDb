const User = require('../models/User');
const bcrypt = require('bcryptjs');

//lista usuários - GET
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: "erro ao tentar listar usuários" });
  }
};

//cria usuário - POST
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Gerar um "salt" (valor aleatório) e criptografar a senha
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Criar o novo usuário com a senha criptografada
    const newUser = new User({
      name,
      email,
      password: hashedPassword // Use a senha criptografada
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//atualiza um usuário existente pelo id - PUT
exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const updates = req.body;

  try {
    const user = await User.findById(userId);
    Object.assign(user, updates);
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message:"erro ao tentar atualizar um usuário"  });
  }
};

//exclui usuário pelo id- DELETE
exports.deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(400).json({ message: "erro ao tentar excluir usuário"  });
  }
};
