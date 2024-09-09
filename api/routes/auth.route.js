import express from 'express';
import { signin, signup, google, signout, verifyToken } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', google);
router.get('/signout', signout);
router.get('/verify', verifyToken);  // New route for token verification

export default router;
