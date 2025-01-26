import express from 'express'
import connectDB from './database/index.js' // Conexão com o banco de dados
import dotenv from 'dotenv' // Carregar variáveis de ambiente
import routes from '../src/routes/routes.js'

dotenv.config() // Carrega variáveis de ambiente do .env

class App {
  constructor() {
    this.app = express()

    // Conectar ao banco de dados
    connectDB()

    // Inicializar middlewares e rotas
    this.middlewares()
    this.routes()
  }

  middlewares() {
    // Middlewares globais
    this.app.use(express.json()) // Permite lidar com JSON
    this.app.use(express.urlencoded({ extended: true })) // Permite lidar com formulários codificados
  }

  routes() {
    // Rotas principais
    this.app.use(routes)
  }
}

const PORT = process.env.PORT || 3001 // Usa a porta do ambiente ou 3000 como padrão
const server = new App().app

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
