// Створіть блок з текстом та кнопкою "Розгорнути / Згорнути",
//     яка змінює видимість блока при натисканні.Використовуйте insertAdjacentHTML.
// <div class=’js-container’>
// <h2>Заголовок</h2>
//   <p>Текст блоку</p>
// </div>

const body = document.querySelector('body');
const container = document.querySelector('.js-container');

// console.log(container)


const elemBtn = document.createElement('button');
elemBtn.textContent = 'Розгорнути / Згорнути';

// const elemTitle = document.createElement('h1');
// elemTitle.textContent = 'Title';

// const elemText = document.createElement('p');
// elemText.textContent = 'Текст блоку';
// console.log(elemText)

const markup = `<h2>Заголовок</h2>
<p>Текст блоку</p>` 

container.insertAdjacentHTML('beforeend', markup)



function onBtnClick(event) {
    container.classList.toggle('is-close')

    // container.insertAdjacentHTML('beforeend', '')
}

elemBtn.addEventListener('click', onBtnClick);



body.prepend(elemBtn);