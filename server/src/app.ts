import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import path from 'path';
import authRoutes from './routes/auth-routes'
import productsRoutes from './routes/product-routes'
import orderRouts from './routes/order-routes'

const app: Application = express();

// Parse requests of content-type - application/json
app.use(express.json());

// Cors
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

// Authentication routes
app.use(authRoutes)
// Products routes
app.use(productsRoutes)
// Order routes
app.use(orderRouts)

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Simple initial route
app.get("/", (req: Request, res: Response) => {
	res.json({ message: "Welcome to FITCO test." });
});

export default app