import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express();

// Parse requests of content-type - application/json
app.use(express.json());

// Cors
app.use(cors())

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Simple initial route
app.get("/", (req: Request, res: Response) => {
	res.json({ message: "Welcome to FITCO test." });
});

export default app