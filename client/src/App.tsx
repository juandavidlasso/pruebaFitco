import React from 'react';
import jwt_decode from 'jwt-decode'
import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom'
import SignIn from './modules/user/SignIn';
import SignUp from './modules/user/SignUp';
import Profile from './modules/user/Profile';
import Header from './modules/Header';
import CreateProduct from './modules/product/CreateProduct';
import Order from './modules/order/Order';

const PrivateRoutes = () => {
	let token = sessionStorage.getItem('token')
    let auth = {'token': token ? jwt_decode(token) : false}
    return(
        auth.token ? <Outlet/> : <Navigate to="/signin" />
    )
}

const App: React.FC = () => {

	const location = useLocation()
	
	return (
		<div className="w-full">
			{location.pathname === '/signin' || location.pathname === '/signup' ? null : <Header />}
			<Routes>
				<Route path='/signin' element={<SignIn />} />
				<Route path='/signup' element={<SignUp />} />
				<Route element={<PrivateRoutes />}>
					<Route path='/profile' element={<Profile />}/>
					<Route path='/product' element={<CreateProduct />} />
					<Route path='/cart' element={<Order />} />
				</Route>
				<Route path='*' element={<Navigate to='/signin' replace />} />
			</Routes>
		</div>
	);
}

export default App;
