import { GetProductProps } from '../../../models/state/product'
import { createProductInfrastrcuture, getProductInfrastrcuture } from '../infrastructure/product'

export const createProdutc = async (product: FormData): Promise<string> => {
	return createProductInfrastrcuture(product)
}


export const getProducts = async (): Promise<GetProductProps[]> => {
	return getProductInfrastrcuture()
}