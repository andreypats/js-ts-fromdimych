type CityType = {
    title: string
    country: string
}

type AddressType = {
    street: string
    city: CityType
}

type TechnologiesType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

const student: StudentType = {
    id: 1,
    name: "Andrey",
    age: 33,
    isActive: false,
    address: {
        street: "Nepokorennyh 69",
        city: {
            title: "Mogilev",
            country: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}