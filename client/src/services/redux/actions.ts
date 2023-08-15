import { createAction } from '@reduxjs/toolkit'
import { User } from '../../models/state/user'
import { ProductProps } from '../../models/state/order'

export const saveName = createAction<User>('order/saveName')

export const saveItem = createAction<ProductProps>('order/saveItem')