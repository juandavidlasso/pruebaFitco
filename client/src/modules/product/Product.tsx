import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { GetProductProps } from '../../models/state/product';
import { saveItem } from '../../services/redux/actions';
import Swal from 'sweetalert2'

interface ProductProps {
	product: GetProductProps
}

const Product: React.FC<ProductProps> = ({ product }) => {

	const dispatch = useDispatch()
	const { name, image, price, amount, idProduct } = product
	const [cantity, setCantity] = useState<number>(0)

	const handleOrder = () => {
		if (cantity === 0) {
			Swal.fire({
				icon: 'error',
				title: 'Error',
				text: 'You have to add 1 item minimun',
				confirmButtonText: 'Acept',
				confirmButtonColor: '#070B8A'
			})
			return
		}
		dispatch(saveItem({
			name,
			image,
			productId: idProduct,
			amount: cantity,
			total: price * cantity
		}))
		Swal.fire({
			icon: 'success',
			title: 'Sucessfully',
			text: 'The item was sucessfully added',
			confirmButtonText: 'Acept',
			confirmButtonColor: '#070B8A'
		})
		setCantity(0)
	}
	
	
	return (
		<div
			key={idProduct}
			className='p-2 border-[1px] rounded-lg w-[90%] mx-auto mt-4 mb-4'>
				<div className='w-full flex justify-center items-center mb-4 min-h-[40px] max-h-[40px]'>
					<h1 className='text-black text-3xl font-extrabold capitalize'>{name}</h1>
				</div>
				<div className='w-full flex justify-center items-center min-h-[300px] max-h-[300px]'>
					<img src={`http://localhost:8080/images/${image}`} alt={name} height='200px' width='200px' />
				</div>
				<div className='w-full flex justify-start items-center mt-5'>
					<h1 className='text-black text-xl pl-5 font-bold'>Price: $ {price}</h1>
				</div>
				<div className='w-full flex justify-start items-center mt-5'>
					<h1 className='text-black text-xl pl-5 font-bold'>Amount:  {amount}</h1>
				</div>
				<div className='w-full flex justify-start items-center mt-5'>
					<label htmlFor='cantity' className='text-black text-xl pl-5 font-bold'>Add</label>
					<input
						min={0}
						max={amount}
						type="number"
						name='cantity'
						value={cantity}
						onChange={(e) => setCantity(Number(e.target.value))}
						className="block w-[40%] ml-3 px-4 py-1 mt-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
					/>
				</div>
				<div className='w-full flex justify-center items-center mt-5 mb-5'>
					<button
						onClick={handleOrder}
						type='button'
						className='bg-blue-900 text-white rounded-xl px-5 py-3 border-[1px] border-blue-900 font-bold hover:bg-blue-800'
					>
						Add to car
					</button>
				</div>
		</div>
	);
}
 
export default Product;
