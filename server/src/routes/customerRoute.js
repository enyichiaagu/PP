import { Router } from 'express';
import { register, login, verify, recoverPassword, updateProfile,updatePassword } from '../controllers/customers';
import { multerUploads } from '../middlewares/mutler';
import { ensureIsAuthenticated } from '../middlewares/isAuth';

const router = Router();


router.post('/register', multerUploads, register)
router.post('/update-profile', multerUploads, ensureIsAuthenticated, updateProfile)
router.post('/update-password',  ensureIsAuthenticated, updatePassword)


router.post('/login', login)
router.get('/verify', verify)
router.post('/recovery', recoverPassword)

export default router;