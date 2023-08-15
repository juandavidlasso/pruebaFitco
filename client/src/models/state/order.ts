export interface ProductProps {
	name: string
	productId: number
	amount: number
	total: number
	image: string
}

export interface ItemsProps {
	productId: number
	amount: number
	total: number
}

export interface OrderProps {
	idUser: number
	items: ItemsProps[]
}