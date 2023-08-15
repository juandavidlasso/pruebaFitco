import { UserProps, UserRegisterProps } from '../../../models/state/user'
import { loginUserInfrastrcuture, registerUserInfrastrcuture } from '../infrastructure/user'

export const signInUser = async (email: string, password: string): Promise<UserProps> => {
	return loginUserInfrastrcuture(email, password)
}


export const signUpUser = async (user: UserRegisterProps): Promise<string> => {
	return registerUserInfrastrcuture(user)
}