import { UserModel } from '../models/UserModel';
import { SecurityService } from '../services/SecurityService';
import jwt from 'jsonwebtoken';

export class AuthController {
    constructor() {
        this.security = new SecurityService();
    }

    login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await UserModel.findOne({ email });

            if (!user || !await this.security.verifyPassword(password, user.password)) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const token = jwt.sign(
                { userId: user._id, email: user.email, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            res.json({ token, user: { id: user._id, email: user.email, role: user.role } });
        } catch (error) {
            res.status(500).json({ error: 'Login failed' });
        }
    };

    register = async (req, res) => {
        try {
            const { email, password } = req.body;
            const existingUser = await UserModel.findOne({ email });

            if (existingUser) {
                return res.status(400).json({ error: 'Email already registered' });
            }

            const user = await UserModel.create({ email, password });
            const token = jwt.sign(
                { userId: user._id, email: user.email, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            res.status(201).json({ token, user: { id: user._id, email: user.email, role: user.role } });
        } catch (error) {
            res.status(500).json({ error: 'Registration failed' });
        }
    };
}
