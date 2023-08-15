import { OrderProps } from "../../../models/state/order"
import { createOrderInfrastrcuture } from "../infrastructure/order"


export const createOrder = async (order: OrderProps): Promise<string> => {
	return createOrderInfrastrcuture(order)
}