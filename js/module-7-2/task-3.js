// Змінити фон елементу з id = "box" на жовтий, якщо користувач натискає клавішу y,
// та на зелений, якщо користувач натискає клавішу g, під час події keydown.

const box = document.querySelector('.box');
// console.log(box)



function onkeyDown(event) {
    event.preventDefault()
    // console.log(event.code)

    if (event.key === 'y') {
        box.style.backgroundColor = 'yellow';
        // console.log('yyyyyyyyyyyy')
    } else if (event.key === 'g') {
        box.style.backgroundColor = 'green';
        // console.log('gggggggggggg')
    } else {
        box.style.backgroundColor = 'aqua';
    }
}
    document.addEventListener('keydown', onkeyDown);