const User = require('../models/User');

// Obter todos os usuários
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuários.' });
  }
};

// Criar um novo usuário
const createUser = async (req, res) => {
  try {
    const { name, email, skills } = req.body;
    const user = new User({ name, email, skills });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar usuário.' });
  }
};

module.exports = { getUsers, createUser };
