import React from 'react';
import jwt_decode from 'jwt-decode'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import SignIn from './modules/user/SignIn';
import SignUp from './modules/user/SignUp';
import Profile from './modules//user/Profile';

const PrivateRoutes = () => {
	let token = sessionStorage.getItem('token')
    let auth = {'token': token ? jwt_decode(token) : false}
    return(
        auth.token ? <Outlet/> : <Navigate to="/signin" />
    )
}

const App: React.FC = () => {
	
	return (
		<div className="w-full">
			<Routes>
				<Route path='/signin' element={<SignIn />} />
				<Route path='/signup' element={<SignUp />} />
				<Route element={<PrivateRoutes />}>
					<Route path='/profile' element={<Profile />}/>
				</Route>
				<Route path='*' element={<Navigate to='/signin' replace />} />
			</Routes>
		</div>
	);
}

export default App;
