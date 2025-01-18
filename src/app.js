// Importações principais
import express from 'express';
import connectDB from './database/index.js'; // Conexão com o banco de dados
import dotenv from 'dotenv'; // Carregar variáveis de ambiente

dotenv.config();  // Carrega variáveis de ambiente do .env

// Inicialização do app
const app = express();

// Middlewares globais
app.use(express.json()); // Permite lidar com JSON
app.use(express.urlencoded({ extended: true })); // Permite lidar com formulários codificados

// Rotas principais
import UserRoutes from './routes/UserRoutes.js';  // Importando as rotas de usuários
app.use('/users', UserRoutes);  // Usando as rotas no caminho /api/users

// Conectar ao banco de dados
connectDB();  // Conectar ao banco

// Porta e inicialização do servidor
const PORT = process.env.PORT || 3000;  // Usa a porta do ambiente ou 3000 como padrão
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
