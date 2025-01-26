const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Conectado ao MongoDB com sucesso!')
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error.message)
    process.exit(1) // Encerra a aplicação caso o banco não conecte
  }
}

module.exports = connectDB
