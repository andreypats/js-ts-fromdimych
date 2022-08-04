import {ManType} from "./05";

let people: Array<ManType> = [
    {name: "Andrey Ivanov", age: 33},
    {name: "Alex Petrov", age: 24},
    {name: "Dima Sidorov", age: 18},
]

beforeEach(() => {
    people = [
        {name: "Andrey Ivanov", age: 33},
        {name: "Alex Petrov", age: 24},
        {name: "Dima Sidorov", age: 18},
    ]
})

test ("should get array of greeting messages", () => {
    const messages = people.map(man => 'Hello ' + man.name.split(" ")[0] + '. Welcome to IT!')

    expect (messages.length).toBe(3)
    expect (messages[0]).toBe('Hello Andrey. Welcome to IT!')
    expect (messages[1]).toBe('Hello Alex. Welcome to IT!')
    expect (messages[2]).toBe('Hello Dima. Welcome to IT!')

})