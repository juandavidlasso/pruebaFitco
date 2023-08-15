import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import SignIn from './modules/user/SignIn';
import SignUp from './modules/user/SignUp';

const App: React.FC = () => {
	
	return (
		<div className="w-full">
			<Routes>
				<Route path='/signin' element={<SignIn />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='*' element={<Navigate to='/signin' replace />} />
			</Routes>
		</div>
	);
}

export default App;
