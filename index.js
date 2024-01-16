// // Створити графік з використанням Chart.js для відображення
// // статистики продажів за останній місяць.
// // <canvas id="sales-chart"></canvas>

// // JavaScript код:

// const chartData = {
//   labels: [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "11",
//     "12",
//     "13",
//     "14",
//     "15",
//     "16",
//     "17",
//     "18",
//     "19",
//     "20",
//     "21",
//     "22",
//     "23",
//     "24",
//     "25",
//     "26",
//     "27",
//     "28",
//     "29",
//     "30",
//   ],
//   datasets: [
//     {
//       label: "Продажі за останній місяць",
//       data: [
//         150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
//         600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
//         1250, 1300, 1350,
//       ],
//       backgroundColor: "#2196f3",
//       borderColor: "#2196f3",
//       borderWidth: 1,
//     },
//   ],
// };

// // const salesChart = new Chart();
// // 1) потрібно створити графік типу "line" за допомогою Chart.js. Для відображення даних використати об'єкт chartData, який містить масив міток для осі X та масив даних для осі Y. Також задається колір графіка та його ширина.
// // 2) Для створення графіка використати конструктор Chart, який отримує два аргументи: елемент canvas, до якого буде додано графік, та об'єкт конфігурації, який містить дані для відображення та налаштування графіка.

// const canvasEl = document.querySelector("canvas");
// const canvasBar = document.getElementById("barChart");
// console.log(canvasBar);
// console.log(canvasEl);
// const config = {
//   type: "line",
//   data: chartData,
//   options: {},
// };
// const salesChart = new Chart(canvasEl, config);

// const configBar = {
//   type: "bar",
//   data: chartData,
//   options: {},
// };
// const barChart = new Chart(canvasBar, configBar);
