
var currentWeather = {
    humidity: 77,
    temp: 82.33,
    feels_like: 88.79,
    clouds: 75
}

// console.log(currentWeather.temp); // or you could write it like console.log(currentWeather["temp"]);
// console.log(currentWeather.humidity);
// console.log(currentWeather.feels_like);

console.log(currentWeather["temp"]);
var whatImInterestedIn = "humidity";
console.log(currentWeather[whatImInterestedIn]);