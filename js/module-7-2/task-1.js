// Написати скрипт в якому користувач друкує на клавіатурі текст який відображається на сторінці.
//  При натисканні на кнопку “Очистити” очищувати надрукований текст.Використати можна наступну розмітку
// <button class="js-clear">Очистити</button>
//     <p class="output js-output"></p>
const body = document.querySelector('body');
const box = document.querySelector('div');


const elemBtn = document.createElement('button');
const elemInput = document.createElement('input');
const elemText = document.createElement('p');

elemText.style.height = '20px';


function onInput(event) {
    const inputVal = event.target.value
    // console.log(event.target.value);
    elemText.textContent = inputVal;
}

function onBtnClick(event) {
    elemText.textContent = '';
    elemInput.value = '';
    // console.log(event)
}

elemInput.addEventListener('input', onInput);
elemBtn.addEventListener('click', onBtnClick)



elemText.classList.add('js-output', 'output');
elemBtn.textContent='Очистити';



box.append(elemInput, elemText, elemBtn);
// console.log(body)

// console.log(elemText)
