type ManType = {
    name: string,
    age: number,
    lessons: Array<{title: string}>
}

let props: ManType;
beforeEach(()=>{
    //данные
    props = {
        name: "Andrey",
        age: 32,
        lessons: [{title: '1'}, {title: '2'}]
    }
})


test('', () => {

    //действие
    const {age, lessons} = props;
    //деструктуризация объекта!!!
    // const age = props.age;
    // const lessons = props.lessons;

    //ожидаемый результат
    expect(age).toBe(32);
    expect(lessons.length).toBe(2);

})

test('fgjjsj', () => {

    //действие

    const [lesson1, lesson2] = props.lessons;
    // деструктуризация массива
    // const lesson1 = props.lesson[0];
    // const lesson2 = props.lesson[1];

    //ожидаемый результат
    expect(lesson1.title).toBe(1)
    expect(lesson2.title).toBe(2)

})