export interface ILogin {
    email: string,
    password: string
}

export interface ILoginMaded {
	user: {
		id: number,
		idCompany: number,
		name: string,
		password: string,
		isAdmin: boolean,
		salt: string,
		email: string,
		createdAt: Date | string,
		updatedAt: Date | string,
		isActive: boolean
	},
	token: string,
	expires_date: Date | string
}