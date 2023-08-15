import axios from "axios"
import { OrderProps } from "../../../models/state/order"

export const createOrderInfrastrcuture = async (order: OrderProps): Promise<string> => {
	const newOrder = await axios.post('http://localhost:8080/order',order)
	return newOrder.data
}