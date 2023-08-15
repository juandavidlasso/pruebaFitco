import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { createProdutc } from '../../services/axios/domain/product';

const CreateProduct: React.FC = () => {

	const navigate = useNavigate()
	const [product, setProdutc] = useState({
		name: '',
		price: '',
		amount: ''
	})
	const [isError, setIsError] = useState<boolean>(false)
	const [file, setFile] = useState<any>()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setProdutc({
			...product,
			[e.target.name]: e.target.value
		})
	}

	const { name, price, amount } = product

	const handleSubmit = async (e: any) => {
		e.preventDefault()

		if (!name || !price || !amount || !file) {
			setIsError(true)
			return
		}

		try {
			const formData = new FormData()
			formData.append('name', name)
			formData.append('price', price)
			formData.append('amount', amount)
			formData.append('image', file)

			const newProduct: any = await createProdutc(formData)

			Swal.fire({
				title: newProduct.message,
				text: 'Do you want to create other product ?',
				icon: 'success',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				confirmButtonText: 'Yes, Create',
				cancelButtonColor: '#d33',
				cancelButtonText: 'No, Back'
			  }).then((result) => {
				if (result.isConfirmed) {
					setProdutc({
						name: '',
						price: '',
						amount: ''
					})
					setFile(null)
				} else if (result.dismiss === Swal.DismissReason.cancel) {
					navigate('/profile')
				  }
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

	return (
		<div className="relative flex flex-col justify-center min-h-screen overflow-hidden mt-5 mb-5">
			<div className='w-full flex justify-start h-[50px] py-2'>
				<Link to='/profile' className="w-[10%] ml-8 flex items-center justify-center h-full px-3 py-4 text-lg font-bold tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
					Back
				</Link>
			</div>
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-blue-800">
                   Create Product
                </h1>
                <form className="mt-6" encType="multipart/form-data">
                    <div className="mb-2">
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input
							value={name}
							name='name'
							onChange={handleChange}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
						{isError && !name && (<p className='text-red-700 text-sm'>Name is required</p>)}
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="price"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Price
                        </label>
                        <input
							value={price}
							name='price'
							onChange={handleChange}
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
						{isError && !price && (<p className='text-red-700 text-sm'>Price is required</p>)}
                    </div>
					<div className="mb-2">
                        <label
                            htmlFor="amount"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Amount
                        </label>
                        <input
							value={amount}
							name='amount'
							onChange={handleChange}
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
						{isError && !amount && (<p className='text-red-700 text-sm'>Amount is required</p>)}
                    </div>
					<div className="mb-2">
                        <label
                            htmlFor="image"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Image
                        </label>
                        <input
							name='file'
							onChange={(e) => setFile(e.target.files![0])}
                            type="file"
                            className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
						{isError && !file && (<p className='text-red-700 text-sm'>Image is required</p>)}
                    </div>
                    <div className="mt-6">
                        <button
							onClick={handleSubmit}
							className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Create Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
	);
}
 
export default CreateProduct;
