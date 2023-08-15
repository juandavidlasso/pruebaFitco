import { Request, Response } from 'express'
import db from '../models'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { secret } from '../utils/consts'
require('dotenv').config()

// Login user
export const signIn = async (req:Request, res:Response) => {
	try {
		// Valid required fields
		if (!req.body.email || !req.body.password) return res.status(400).send({ message: 'Email and password are required.'})

		// Get user by email
		const user = await db.Users.findOne({ where: { email: req.body.email }})
		
		// If user not found return
		if (!user) {
			return res.status(404).send({ message: "User Not found." });
		}
		
		// If user found valid password if correct
		const passwordIsValid = await bcryptjs.compare(
			req.body.password,
			user.password
		);

		// If password incorrect return
		if (!passwordIsValid) {
			return res.status(401).send({
				accessToken: null,
				message: "Invalid Password!"
			});
		}

		// Create token for session
		const expiresIn = '24hr'
		const token = jwt.sign({ id: user.idUser, firstName: user.firstName, lastName: user.lastName, email: user.email }, secret, {expiresIn})

		// Return user information
		res.status(200).send({
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			rol: user.rol,
			accessToken: token,
			idUser: user.idUser
		});	
	} catch (error: any) {
		res.status(500).send({ message: error.message });
	}
}

// Register user
export const signUp = async (req:Request, res:Response) => {
	try {
		// Valid required fields
		if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password) {
			return res.status(404).send({ message: "The firstName, lastName, email and password are required." });
		}

		// Get user
		const user = await db.Users.findOne({ where: { email: req.body.email }})

		// If user exists return
		if (user) {
			return res.status(404).send({ message: "User already exists." });
		}

		// Create new user
		const newUser = await db.Users.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: bcryptjs.hashSync(req.body.password, 8),
			rol: 2
		})

		// Return message information
		if (newUser.dataValues) {
			res.status(200).send({
				message: 'The user was sucessfully created.'
			});
		}	
	} catch (error: any) {
		res.status(500).send({ message: error.message });
	}
}