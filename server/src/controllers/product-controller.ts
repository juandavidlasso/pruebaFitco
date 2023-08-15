import { Request, Response } from 'express'
import multer from 'multer'
import path from 'path'
import db from '../models'

// Folder images destination
const diskStorage = multer.diskStorage({
	destination: path.join(__dirname, '../public/images'),
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
	}
})

// Route function to allow single file
export const fileUpload = multer({
	storage: diskStorage
}).single('image')

// Create new produc
export const saveProduct = async (req: Request, res: Response) => {
	try {
		// Valid required fields
		if (!req.body.name || !req.body.price || !req.body.amount || !req.file) return res.status(404).send({ message: "The name, price, amount and image are required." });

		// Create product
		const product = await db.Products.create({
			name: req.body.name,
			price: req.body.price,
			amount: req.body.amount,
			image: req.file.filename
		})

		// Return product information
		if (product.dataValues) {
			res.status(200).send({
				message: 'The product was sucessfully created.'
			});
		}		
	} catch (error: any) {
		res.status(500).send({ message: error.message });
	}
}


// Get all products
export const getProducts = async (req: Request, res: Response) => {
	try {
		// Get all products
		const products = await db.Products.findAll()

		// Return products information
		res.status(200).send(products);

	} catch (error: any) {
		res.status(500).send({ message: error.message });
	}
}