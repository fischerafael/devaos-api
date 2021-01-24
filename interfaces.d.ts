interface IUser {
    github: string
    password: string
    email: string
    personal: {
        name: {
            first: string
            last: string
            birthYear: number
        }
        address: {
            city: string
            country: string
            location: IPointSchema
        }
    }
}

interface IPointSchema {
    type: string
    coordinates: [number, number]
}

interface ICreateUserBodyRequest {
    github: string
    password: string
    email: string
    firstName: string
    lastName: string
    birthYear: number
    city: string
    country: string
    latitude: number
    longitude: number
}
