import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { saveItem, saveName } from './actions'
import { User } from '../../models/state/user'
import { ProductProps } from '../../models/state/order'

interface OrderState {
	user: User
	items: ProductProps[]
}

const initialState: OrderState = {
	user: {
		idUser: 0,
		firstName: '',
		lastName: '',
		rol: 0
	},
	items: [
		{
			name: '',
			productId: 0,
			amount: 0,
			total: 0
		}
	]
}

const appOrderReducer = createReducer(initialState, (builder) => {
	builder
	.addCase(saveName, (state, action: PayloadAction<User>) => {
		state.user = action.payload
	})
	.addCase(saveItem, (state, action: PayloadAction<ProductProps>) => {
		const array: ProductProps[] = []
		if (action.payload.productId === 0) {
			state.items = array
		} else {
			state.items.push(action.payload)
		}
	})
})


export default appOrderReducer