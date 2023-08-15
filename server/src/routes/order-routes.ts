import { Router } from 'express'
import { saveOrder, getOrders } from '../controllers/order-controller'
const router = Router()

router.post('/order', saveOrder)
router.get('/order', getOrders)

export default router