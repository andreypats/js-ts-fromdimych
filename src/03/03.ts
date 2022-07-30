// export const sum = (a: number, b: number) => {
//     debugger
//     return a + b;
// }
//
// const res = sum(sum(1, 2), sum(3, 4))

import {student, StudentType} from "../02/02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
