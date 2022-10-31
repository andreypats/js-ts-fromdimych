// promise - это объект, у которого нет свойств но есть следующие методы: then

//-----------------------------------------then-------------------------------------------------------------------------
// then (promise.then) - метод, с помощью которого мы подписываемся на момент, когда промис зарезолвится (выполнится)
const findUserInDB = (id) => {}
const promise1 = findUserInDB (1)  // запрос данных у findUserInDB, в ответ получаем обещание (promise1)
promise1.then ((user)=> {
    console.log(user)
})     //подписка на промис (promise1.then()) - функиция (user)=> { } выполнится, когда обещание (promise1) выполнится (зарезолвится)

// состояния промисов: pending (состояние ожидания), resolved или fulfilled (выполнено), reject (не выполнено)

//-----------------------------------------catch------------------------------------------------------------------------
// catch - метод, который выполнится в случае, если промис ссобщит об ошибке (зареджектится)
const promise2 = findUserInDB (22)  // запрос данных у findUserInDB, в ответ получаем обещание (promise2)
promise2.catch ((error)=> {
    console.log(error)
})     //подписка на промис (promise2.catch()) - функиция (error)=> { } выполнится, когда обещание (promise2) сообщит об ошибке (зареджектится)

// обычно then и catch используются последовательно
const promise3 = findUserInDB (33)  // запрос данных у findUserInDB, в ответ получаем обещание (promise3)
promise3
    .then ((user)=> {
    console.log(user)
})
    .catch ((error)=> {
    console.log(error)
})
// если user с id существует, то выполниться then, если нет - то catch

//-----------------------------------------finally----------------------------------------------------------------------
// finally - метод, который выполнится в любом случае, независимо от then и catch
const promise4 = findUserInDB (55)  // запрос данных у findUserInDB, в ответ получаем обещание (promise4)
promise4
    .then ((user)=> {
        console.log(user)
    })
    .catch ((error)=> {
        console.log(error)
    })
    .finally (()=> {
        console.log('выполнюсь всегда')
    })

//-----------------------------------------all--------------------------------------------------------------------------
// all - статический метод класса Promise, с помощью которого можно объеденить другие примисы, и который возвращает другой примис (может быть только у класса  Promise (с большой буквы))
const otherPromise = Promise.all([promise1, promise2])
otherPromise.then (()=> {
        console.log(user)
})
// otherPromise выполнится(зарезолвится) только тогда, когда выполнятся оба переданных в него promise1 и promise2

//-----------------------------------------async-await------------------------------------------------------------------
// await - функция ожидания, которая делает запрос без использования промисов, работает только внутри асинхронных функций (async)
async function run() {
    let user = await findUserInDB (1)
    console.log(user.name)
    let friend1 = await findUserInDB (1)
    console.log(friend1.name)
}
run()

//-----------------------------------------async-await-+-try-catch------------------------------------------------------
async function run() {
    let user = await findUserInDB (1)
    console.log(user.name)
    try {
        //выполняется при положительном сценарии на запрос в await
    }
    catch {
        //выполняется при отрицательном сценарии на запрос в await
    }
    let friend1 = await findUserInDB (1)
    console.log(friend1.name)
}
run()