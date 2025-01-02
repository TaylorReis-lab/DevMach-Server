import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import User from '../models/User';

class UserController {
  async store(req, res) {
    // Schema de validação com Yup
    const schema = Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(6, 'Password must have at least 6 characters').required('Password is required'),
      skills: Yup.string().required('Skills are required'),
      bio: Yup.string().required('Bio is required'),
    });

    try {
      // Validação dos dados da requisição
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const { name, email, password, skills, bio } = req.body;

    // Verificando se o usuário já existe
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Criando o usuário no banco
    const user = await User.create({
      id: uuidv4(),
      name,
      email,
      password,
      skills,
      bio,
      likes: [],
      dislikes: [],
    });

    return res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  }
}

export default new UserController();
