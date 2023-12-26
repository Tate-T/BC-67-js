/*
Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
*/

const input_value = prompt();

const weather = {
    temperature: input_value,
    humidity: 0,
    windSpeed: 0,
    isHigherThanZero(value = this.input_value) {
        if (value < 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

console.log(weather.isHigherThanZero());