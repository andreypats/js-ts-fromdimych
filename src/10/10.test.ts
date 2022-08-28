import {addNewBooksToUser, upgradeUserLaptop, UserWithBooksType, UserWithLaptopType} from "./10";

test ('upgrade laptop to macbook', ()=> {
    let user: UserWithLaptopType = {
        name: 'Andrey',
        hair: 20,
        address: {
            city: 'Orsha',
            house: 170
        },
        laptop: {
            title: 'Acer'
        }
    }

    const upgradedLaptop = upgradeUserLaptop (user, 'Macbook')

    expect(user).not.toBe(upgradedLaptop)
    expect(user.address).toBe(upgradedLaptop.address)
    expect(user.laptop).not.toBe(upgradedLaptop.laptop)
    expect(upgradedLaptop.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('Acer')
})

test ('add new books to user', ()=> {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Andrey',
        hair: 20,
        address: {
            city: 'Orsha',
            house: 170
        },
        laptop: {
            title: 'Acer'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser (user, ['ts','rest api'])

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books).toStrictEqual(['css', 'html', 'js', 'react','ts','rest api'])
})