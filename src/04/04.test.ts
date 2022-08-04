test ("should take old man older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test ("should take courses chipper 160", () => {
    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 150}
    ]

    const chipCourses = courses.filter(course => course.price < 160);

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("CSS");
    expect(chipCourses[1].title).toBe("REACT");
})

const tasks = [
    {id: 1, title: "Bread", isDone: false},
    {id: 2, title: "Milk", isDone: true},
    {id: 3, title: "Solt", isDone: false},
    {id: 4, title: "Sugar", isDone: true},
]

test ("get only completed tasks", ()=> {

    const completedTasks = tasks.filter (task => task.isDone);
    //task.isDone === true

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe("Milk");
    expect(completedTasks[1].title).toBe("Sugar");
})

test ("get only uncompleted tasks", ()=> {
    const uncompletedTasks = tasks.filter (task => !task.isDone);
    //task.isDone === false

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].title).toBe("Bread");
    expect(uncompletedTasks[1].title).toBe("Solt");
})



