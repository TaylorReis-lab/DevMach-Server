const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb://admin:admin123@localhost:27017/devmach?authSource=admin`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    console.log('Conectado ao MongoDB com sucesso!')
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error.message)
    process.exit(1)
  }
}

module.exports = connectDB
