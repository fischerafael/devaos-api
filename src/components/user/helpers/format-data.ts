export const formatData = {
    user(data: ICreateUserBodyRequest) {
        const createData: IUser = {
            github: data.github,
            password: data.password,
            email: data.email,
            personal: {
                name: {
                    first: data.firstName,
                    last: data.lastName,
                    birthYear: data.birthYear
                },
                address: {
                    city: data.city,
                    country: data.country,
                    location: {
                        type: 'Point',
                        coordinates: [data.longitude, data.latitude]
                    }
                }
            }
        }

        return createData
    }
}
