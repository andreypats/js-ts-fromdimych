function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string,
    age: number,
}

test("array reference test", () => {

    let users = [
        {
            name: 'Andrey',
            age: 33,
        },
        {
            name: 'Andrey2',
            age: 35,
        }
    ]

    const admins = users

    admins.push({name: 'Vasya', age: 48});

    expect(users[2]).toEqual({name: 'Vasya', age: 48})
})

test("value type test", () => {

    let usersCount = 100;

    let adminsCount = usersCount

    adminsCount++

    expect(usersCount).toEqual(101)
})