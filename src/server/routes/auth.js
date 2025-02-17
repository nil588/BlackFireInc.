import express from 'express';
import { AuthController } from '../controllers/AuthController';
import { validateAuth } from '../middleware/validateAuth';

const router = express.Router();
const authController = new AuthController();

router.post('/login', validateAuth, authController.login);
router.post('/register', validateAuth, authController.register);
router.post('/logout', authController.logout);
router.get('/verify', authController.verifyToken);

export default router;
