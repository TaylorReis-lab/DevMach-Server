const mongoose = require('mongoose');
const connectDB = require('./index');
const User = require('./models/User');

const seedUsers = async () => {
  try {
    await connectDB();

    const users = [
      {
        name: 'Ana',
        email: 'ana@example.com',
        password: 'senha123',
        skills: ['React', 'Node.js'],
        bio: 'Frontend Dev apaixonada por design.',
      },
      {
        name: 'João',
        email: 'joao@example.com',
        password: 'senha456',
        skills: ['Python', 'Django'],
        bio: 'Backend Dev focado em APIs REST.',
      },
    ];

    await User.deleteMany(); // Limpa a coleção
    await User.insertMany(users);

    console.log('Seed de dados concluída!');
    process.exit();
  } catch (error) {
    console.error('Erro ao rodar o seed:', error.message);
    process.exit(1);
  }
};

seedUsers();
