import React from 'react';
import { IRootState } from '../models/core/store';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveItem } from '../services/redux/actions';

const Header: React.FC = () => {

	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { firstName, lastName } = useSelector( (state: IRootState) => state.orderReducer.user)

	const handleLogout = () => {
		dispatch(saveItem({
			name: '',
			productId: 0,
			amount: 0,
			total: 0
		}))
		sessionStorage.removeItem('token')
		sessionStorage.clear()
		navigate('/signin')
	}

	return (
		<div className='w-full min-h-[80px] max-h-[80px] bg-blue-600 p-2 flex justify-center items-center'>
			<div className='grid grid-cols-2 w-full'>
				<div className='pl-5'>
					<h1 className='text-xl text-white capitalize font-bold'>Hola! {firstName} {lastName}</h1>
				</div>
				<div className='flex justify-end pr-5'>
					<button
						onClick={handleLogout}
						type='button'
						className='bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800'>Logout</button>
				</div>
			</div>
		</div>
	);
}
 
export default Header;
