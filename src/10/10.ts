export type UserType = {
    name: string,
    hair: number,
    address: AddressType
}

export type AddressType = {
    city: string,
    house: number
}

export type LaptopType = {
    title: string,
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export const upgradeUserLaptop = (user: UserWithLaptopType, laptop: string) => {
    return {
        ...user,
        laptop: {               // передаем свойство, которое хотим изменить
            ...user.laptop,
            title: laptop
        }
    }
}

export const addNewBooksToUser = (user: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) => {
    return {
        ...user,
        books: [...user.books].concat(newBooks)
    }
}