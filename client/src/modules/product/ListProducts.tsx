import React from 'react';
import { GetProductProps } from '../../models/state/product';
import Product from './Product';

interface ListProductsProps {
	listProducts: GetProductProps[]
}

const ListProducts: React.FC<ListProductsProps> = ({ listProducts }) => {
	return (
		<div className='grid grid-cols-1'>
			<div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
				{listProducts.map( (product) => (
					<Product key={product.idProduct} product={product} />
				))}
			</div>
		</div>
	);
}
 
export default ListProducts;
