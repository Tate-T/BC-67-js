//  короткий запис властивостей
 
// const user = {
//     name: "Vasya",
//     age: 25,
// }

//  виносимо значення об'єкта у змінні
// const userName = "Vasya";
// const userAge = 25;

// const user = {
//     userName: userName,
//     userAge: userAge,
// }
//  в такому випадку можно сократити пару ключа і знчення
 
// const user = {
//     userName,
//     userAge,
// }

// вичисляючи властивости (коли ми робимо ключ змінною)
 
// const user = {
//     name: "Vasya",
//     age: 25,
// }
const userName = "name";
const userAge = "age";

// зробимо ключі об'єкта змінними
const user = {
    [userName]: "Vasya",
    [userAge]: 25,
}

