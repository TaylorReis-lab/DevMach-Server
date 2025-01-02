// Importações principais
const express = require('express');
const connectDB = require('./database/index'); // Conexão com o banco de dados
require('dotenv').config();

// Inicialização do app
const app = express();

// Middlewares globais
app.use(express.json()); // Permite lidar com JSON
app.use(express.urlencoded({ extended: true })); // Permite lidar com formulários codificados

// Rotas principais
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Conectar ao banco de dados
connectDB();

// Porta e inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
