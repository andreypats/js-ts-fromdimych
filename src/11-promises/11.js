// promise - это объект, у которого нет свойств но есть следующие методы: then
// then (promise.then) - метод, с помощью которого мы подписываемся на момент, когда промис зарезолвится (выполнится)
const findUserInDB = (id) => {}
const promise1 = findUserInDB (1)  // запрос данных у findUserInDB, в ответ получаем обещание (promise1)
promise1.then ((user)=> {
    console.log(user)
})     //подписка на промис (promise1.then()) - функиция (user)=> { } выполнится, когда обещание (promise1) выполнится (зарезолвится)
//


// состояния промисов: pending (состояние ожидания), resolved (выполнено), reject (не выполнено)

//24:40
