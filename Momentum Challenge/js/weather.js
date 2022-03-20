const API_KEY = "5ec0bfd6f8bddcf0174ba85f11a283a6";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then((response) => response.json()).then((data) => {
        const weather = document.querySelector("#weather span");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}ºC / ${data.name}`;
    });
}
function onGeoError(){
    console.log("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);



