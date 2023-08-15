import axios from "axios";
import { GetProductProps } from "../../../models/state/product";

export const createProductInfrastrcuture = async (product: FormData): Promise<string> => {
	const newProduct = await axios({
		url: 'http://localhost:8080/product',
		method: 'POST',
		data: product,
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})
	
	return newProduct.data
}



export const getProductInfrastrcuture = async (): Promise<GetProductProps[]> => {
	const products = await axios.get('http://localhost:8080/product',{})
	return products.data
}