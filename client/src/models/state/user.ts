export interface UserProps {
	idUser: number
	firstName: string
    lastName: string
    email: string
    rol: number
    accessToken: string
}

export interface UserRegisterProps {
	firstName: string
    lastName: string
    email: string
	password: string
}

export interface User {
	idUser: number
	firstName: string
	lastName: string
	rol: number
}