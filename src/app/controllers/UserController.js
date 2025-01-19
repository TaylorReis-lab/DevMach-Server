import * as Yup from 'yup'
import { v4 } from 'uuid'
import User from '../models/User.js'

class UserController {
  async store(req, res) {
    // Schema de validação com Yup
    const schema = Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must have at least 6 characters')
        .required('Password is required'),
      gender: Yup.string()
        .oneOf(['Masculino', 'Feminino'], 'Genero must be "Masculino" or "Feminino"')
        .required('Genero is required'),
      skills: Yup.string().required('Skills are required'),
      bio: Yup.string().required('Bio is required'),
    })

    try {
      // Validação dos dados da requisição
      await schema.validate(req.body, { abortEarly: false })
    } catch (err) {
      return res.status(400).json({ error: err.errors })
    }

    const { name, email, password, gender, skills, bio } = req.body

    // Verificando se o usuário já existe
    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.status(409).json({ error: 'User already exists' })
    }

    // Validação para garantir que o gênero seja fornecido e válido
    if (!gender || !['Masculino', 'Feminino'].includes(gender)) {
      return res.status(400).json({ message: 'Gênero é obrigatório e deve ser "Masculino" ou "Feminino".' });
    }

    // Criando o usuário no banco
    const user = await User.create({
      id: v4(),
      name,
      email,
      password,
      gender,
      skills,
      bio,
    })

    return res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      sexo: user.sexo,
      skills: user.skills,
      bio: user.bio,
    })
  }
  async getAllUsers(req, res) {
    try {
      const users = await User.find(); // Busca todos os usuários no banco
      return res.status(200).json(users); // Retorna os usuários em formato JSON
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      return res.status(500).json({ message: 'Erro ao buscar usuários' });
    }
  }
}

export default new UserController()
