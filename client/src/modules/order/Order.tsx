import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from '../../models/core/store';
import { createOrder } from '../../services/axios/domain/order';
import Swal from 'sweetalert2'
import { useNavigate, Link } from 'react-router-dom'
import { saveItem } from '../../services/redux/actions';

const Order: React.FC = () => {

	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { items, user } = useSelector( (state: IRootState) => state.orderReducer)

	const handleSubmit = async (e: any) => {
		e.preventDefault()

		try {
			const newItems = items.filter((item) => item.productId !== 0)

			const itemsSave = newItems.map( ({ name, ...rest}) => {
				return rest
			})

			const newOrder = {
				idUser: user.idUser,
				items: itemsSave
			}
			
			const order: any = await createOrder(newOrder)

			Swal.fire({
				icon: 'success',
				title: 'Sucessfully',
				text: order.message,
				confirmButtonText: 'Acept',
				confirmButtonColor: '#070B8A'
			}).then( () => {
				dispatch(saveItem({
					name: '',
					productId: 0,
					amount: 0,
					total: 0
				}))
				navigate('/profile')
			})
		} catch (error: any) {
			Swal.fire({
				icon: 'error',
				title: 'Error',
				text: error.response.data.message,
				confirmButtonText: 'Acept',
				confirmButtonColor: '#070B8A'
			})
		}
	}

	useEffect(() => {
		const itemsFiltered = items.filter( (item) => item.productId !== 0)
		
		if (itemsFiltered.length === 0) {
			Swal.fire({
				icon: 'warning',
				title: 'Attention',
				text: 'Items not found',
				confirmButtonText: 'Acept',
				confirmButtonColor: '#070B8A'
			}).then( () => {
				navigate('/profile')
			})
		}
	}, [])
	
	return (
		<div className='h-full w-full p-5'>
			{items.filter((item) => item.productId !== 0).length === 0 ?
			(
				<div className='grid grid-cols-1 justify-center items-center'>
					<h1 className='text-blue-900 text-2xl font-bold text-center'>No Items selected</h1>
				</div>
			): (
				<div className='grid grid-cols-1'>
					<div className='w-[30%] p-2 border-2 border-blue-900 rounded-xl'>
						<div className='w-full p-3 flex justify-center'>
							<h1 className='font-bold text-lg text-black'>Items</h1>
						</div>
						<div className='w-full py-2 px-0'>
							{items.filter( (item) => item.productId !== 0).map( (item, index) => (
								<div key={index} className='w-full border-[1px] border-gray-300 rounded-md pl-3 mb-2'>
									<h1 className='font-bold text-md text-black'>Name: {item.name}</h1>
									<h1 className='font-bold text-md text-black'>Amount: {item.amount}</h1>
									<h1 className='font-bold text-md text-black mb-4'>Total: $ {item.total.toFixed(2)}</h1>
								</div>
							))}
						</div>
						<div className='w-full flex justify-center items-center mt-5 mb-5'>
							<Link to='/profile' className='bg-red-900 text-white rounded-xl px-5 py-3 w-[40%] border-[1px] border-red-900 font-bold hover:bg-red-800 mr-5 text-center'>Edit Order</Link>
							<button onClick={handleSubmit} type='button' className='bg-blue-900 text-white rounded-xl px-5 py-3 w-[40%] border-[1px] border-blue-900 font-bold hover:bg-blue-800'>Pay</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
 
export default Order;
