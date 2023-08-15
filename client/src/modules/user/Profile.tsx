import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { GetProductProps } from '../../models/state/product';
import { getProducts } from '../../services/axios/domain/product';
import { useSelector } from 'react-redux';
import { IRootState } from '../../models/core/store';
import ListProducts from '../product/ListProducts';

const Profile: React.FC = () => {

	const { items, user } = useSelector( (state: IRootState) => state.orderReducer)
	const [listProducts, setListProducts] = useState<GetProductProps[]>([])
	console.log('111',items);
	

	useEffect(() => {
		const fetchProducts = async () => {
			const products = await getProducts()
			setListProducts(products)
		}

		fetchProducts()
	}, [])
	

	return (
		<div className='h-full w-full p-5'>
			<div className={`${user.rol === 1 ? 'grid-cols-2' : 'grid-cols-1'} grid min-h-[50px] max-h-[50px] mb-5`}>
				{user.rol === 1 ? (
					<div>
						<Link to='/product' className='bg-blue-900 text-white rounded-xl px-5 py-3 border-[1px] border-blue-900 font-bold hover:bg-blue-800'>Add New Product</Link>
					</div>
				): null }
				<div className='flex justify-end'>
					<Link to='/cart' className='text-red-500 font-bold flex'>
						<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
							<path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
						</svg>
						{items.filter((item) => item.productId !== 0).length === 0 ? 0 : items.length}
					</Link>
				</div>
			</div>
			{listProducts.length === 0 ?
			(
				<div className='grid grid-cols-1'>
					<h1 className='text-blue-900 text-xl font-bold'>Not Products Found</h1>
				</div>
			): (
				<ListProducts listProducts={listProducts} />
			)}
		</div>
	);
}
 
export default Profile;
