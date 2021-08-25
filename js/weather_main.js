$(document).ready(function() {


let startingCoordinates = [-106.4850, 31.7619]

    //displays the map
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    var map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-106.4850, 31.7619], // starting position [lng, lat]
        zoom: 10 // starting zoom
    });
    var memorialPopup = new mapboxgl.Popup()
        .setHTML('<h1>Lincoln Memorial</h1>');
    var memorialMarker = new mapboxgl.Marker({draggable: true})
        .setLngLat([-106.4850, 31.7619])
        .setPopup(memorialPopup)
        .addTo(map);

    memorialMarker.on('dragend', function() {
        var markerCoordinates = memorialMarker.getLngLat();
        // document.querySelector('#coordinates').innerHTML = markerCoordinates.lng;
        memorialPopup.setHTML(markerCoordinates.lng);
    });




//ajax
function getWeather(coordinatesArray) {
    console.log(coordinatesArray);
    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        appid: WEATHER_APP_ID,
        // lat: 31.7619,
        lat: coordinatesArray[1],
        // lon: -106.4850,
        lon: coordinatesArray[0],
        units: 'imperial',
        exclude: 'minutely,hourly'
    }).done(function(data) {
        console.log(data);
        $("#current-weather-container").html(renderWeatherCurrent(data));
        $("#daily-weather-container").html(renderWeatherWeekly(data));
    }).fail(function(error) {
        console.log(error);
    });
}

//initial weather call
getWeather(startingCoordinates);


//for the find button
$("#submit").on("click", function(e) {
    e.preventDefault();
    let input = $("#search");
    let searchValue = input[0].value;
    geocode(searchValue, MAPBOX_API_TOKEN).then(r => {
        getWeather(r);
        console.log(r);
    });
});


//for current weather
function renderWeatherCurrent(data) {
    return `
        <div class="card text-center">
            <div class="card-header row">
                ${dateConverter(data.current.dt)}
            </div>
            <div class="card-body">
                <h5 class="card-title">Today's Weather</h5>
                <p class="card-text">Current temp: ${data.current.temp}</p>
                <p class="card-text">Humidity: ${data.current.humidity}</p>
                <p class="card-text">Wind speed: ${data.current.wind_speed}</p>
                <p class="card-text">Sunrise: ${timeConverter(data.current.sunrise)} / Sunset: ${timeConverter(data.current.sunset)}</p>
                <p class="card-text">Description: ${data.current.weather[0].description}</p>
            </div>
        </div>
    `
}

//for weekly (or daily) weather
function renderWeatherWeekly(data) {
    return `
        <div class="card text-center">
            <div class="card-header row">
                Date/Time
            </div>
            <div class="card-body">
                <h5 class="card-title">Weekly Forecast</h5>
                ${weeklyForecast(data)} 
            </div>
        </div>
    `
}

function weeklyForecast(data) {
    let html = '';
    for (var i = 0; i < data.daily.length; i++) {
        html += `<p class="card-text">High/Low: ${data.daily[i].temp.max} / ${data.daily[i].temp.min}</p>`
    }
    return html;
}

//shows the date
function timeConverter(unix_timestamp) {
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
// Hours part from the timestamp
    var hours = date.getHours();
// Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
//     var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2);

    return formattedTime;
}

function dateConverter(unix){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d = new Date(unix * 1000);
    let year = d.getFullYear();
    let month = d.getMonth();
    let m = months[month];
    let day = d.getDate();
    return `${m} ${day}, ${year}`;
}


//we need these functions in order for everything to work
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}

function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });
}
})

