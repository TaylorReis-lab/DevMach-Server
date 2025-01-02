import { Router } from 'express';
import UserController from './controllers/UserController.js';

// Cria uma instância do Router
const router = Router();

// Rota para criar usuário
router.post('/', UserController.store);  // Chama o método store do controlador

export default router;
