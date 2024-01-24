// Отримати список користувачів з GitHub API Опис:
// Використайте публічне API GitHub для отримання списку користувачів.Зробіть GET - запит
//  за адресою https://api.github.com/users та перегляньте отримані дані щодо користувачів.

// import {fetchData} from "./fetchData";

// console.log(fetchData)

const usersElem = document.querySelector('.user');

const URL = 'https://api.github.com/users';

function markup(data) {
    const mark = data.map(({ login,avatar_url }) => {
        return ` <li>
            <img src="${avatar_url}" alt="" />
            <p>${login}</p>
        </li>`
    })
    usersElem.innerHTML = mark;
}

function fetchData(URL) {
    const data = fetch(URL).then((response) => response.json())
    return data
}


fetchData(URL).then(data => markup(data)).catch(error => {console.log(error)});