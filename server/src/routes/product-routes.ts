import { Router } from 'express'
import { saveProduct, fileUpload, getProducts } from '../controllers/product-controller'
const router = Router()

router.post('/product', fileUpload, saveProduct)
router.get('/product', getProducts)

export default router