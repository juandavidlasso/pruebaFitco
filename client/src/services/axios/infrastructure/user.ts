import axios from "axios";
import { UserProps, UserRegisterProps } from "../../../models/state/user";

export const loginUserInfrastrcuture = async (email: string, password: string): Promise<UserProps> => {
	const user = await axios.post(
		'http://localhost:8080/auth/signin',
		{
			email,
			password
		}
	)
	
	return user.data
}



export const registerUserInfrastrcuture = async (user: UserRegisterProps): Promise<string> => {
	const userData = await axios.post(
		'http://localhost:8080/auth/signup',
		{
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			password: user.password
		}
	)
	
	return userData.data
}