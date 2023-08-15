import { Router } from 'express'
import { signIn, signUp } from '../controllers/auth-controller'
const router = Router()

router.post('/auth/signin', signIn)
router.post('/auth/signup', signUp)

export default router