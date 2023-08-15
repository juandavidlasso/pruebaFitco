import { Request, Response } from 'express'
import db from '../models'

// Create order
export const saveOrder = async (req: Request, res: Response) => {
	try {
		const arrayItems: string[] = []
		let totalOrder: number = 0
		// Create all items
		for (let index = 0; index < req.body.items.length; index++) {
			// Crate item
			const item = await db.Items.create({
				productId: req.body.items[index].productId,
				amount: req.body.items[index].amount,
				total: req.body.items[index].total
			})
			arrayItems.push(item.dataValues.idItem)
			totalOrder += item.dataValues.total

			// Get product
			const product = await db.Products.findOne({
				where: { idProduct: req.body.items[index].productId },
				attributes: ['idProduct','amount']
			})

			// Update amount for it product
			if (product) {
				await product.update({
					amount: product.dataValues.amount - req.body.items[index].amount,
				}, { where: { idProduct: req.body.items[index].productId } })
			}
		}

		// Create order
		const order = await db.Orders.create({
			itemIds: arrayItems,
			userId: req.body.idUser,
			total: totalOrder
		})

		if (order.dataValues) {
			// Return success
			res.status(200).send({ message: 'The order was sucessfully created.' })	
		}
	} catch (error: any) {
		res.status(500).send({ message: error.message });
	}
}


// Get all orders
export const getOrders = async (req: Request, res: Response) => {
	try {
		// Get all orders
		const orders = await db.Orders.findAll()

		// Return orders
		res.status(200).send(orders)
	} catch (error: any) {
		res.status(500).send({ message: error.message });
	}
}