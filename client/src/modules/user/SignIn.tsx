import React, { useState } from 'react';
import { signInUser } from '../../services/axios/domain/user'
import Swal from 'sweetalert2'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { saveName } from '../../services/redux/actions';

const SignIn: React.FC = () => {

	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [user, setUser] = useState({
		email: '',
		password: ''
	})
	const [isError, setIsError] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}

	const { email, password} = user

	const handleSubmit = async (e: any) => {
		e.preventDefault()

		if (!email || !password) {
			setIsError(true)
			return
		}

		try {
			const user = await signInUser(email, password)
			sessionStorage.setItem('token', user.accessToken)
			dispatch(saveName({
				idUser: user.idUser,
				firstName: user.firstName,
				lastName: user.lastName,
				rol: user.rol
			}))
			navigate('/profile')
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
		<div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-blue-800">
                   Sign In
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
							value={email}
							name='email'
							onChange={handleChange}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
						{isError && !email && (<p className='text-red-700 text-sm'>Email is required</p>)}
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
							value={password}
							name='password'
							onChange={handleChange}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
						{isError && !password && (<p className='text-red-700 text-sm'>Password is required</p>)}
                    </div>
                    <div className="mt-6">
                        <button
							onClick={handleSubmit}
							className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="font-medium text-blue-600 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
	);
}
 
export default SignIn;
