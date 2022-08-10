type usersType = {
    [key: string] : {id: number, name: string}
}

export const users: usersType = {
    '101': {id: 101, name: 'Andrey'},
    '1025': {id: 1025, name: 'Maksim'},
    '14503': {id: 14503, name: 'Stanislav'},
    '1304': {id: 1304, name: 'Artem'},
}

let user = {id: 125598, name: 'Anastasiya'}
users[user.id] = user
//добавляем нового пользователя в массив users
delete users[user.id]
//удалить пользователя из массива users
users[user.id].name = 'Elena'
//обновить имя пользователя


export const usersArray = [
    {id: 101, name: 'Andrey'},
    {id: 1025, name: 'Maksim'},
    {id: 14503, name: 'Stanislav'},
    {id: 1304, name: 'Artem'},
]
//с массивом без ключей всё сложно!