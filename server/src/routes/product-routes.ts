import { Router } from 'express'
import { saveProduct, getProducts } from '../controllers/product-controller'
const router = Router()

router.post('/product', saveProduct)
router.get('/product', getProducts)

export default router