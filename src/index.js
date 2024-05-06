
import './styles/index.css'
import { fetchWeatherForecast } from './pages/fetchWeatherForecast.js';



document.querySelector('.input').addEventListener('keypress' , async function searchEnterEventHandler(event) {
    if(event.key === 'Enter'){
    const input = document.querySelector('.input').value  
    try{
        const response = await fetchWeatherForecast(input);
        displayCurrentWeather(response);
        displayAdditionalInformation(response);
        displayForecast(response);
    }catch(error){
        console.log(`ERROR: ${error}`)
    }
}
});


function displayCurrentWeather(response){
    console.log(response)
    const cTemp = response.current.temp_c;
    const cCondition = response.current.condition.text;
    const currMin =Math.floor( response.forecast.forecastday[0].day.mintemp_c);
    const currMax = Math.floor( response.forecast.forecastday[0].day.maxtemp_c);
    const currentWeatherCode = response.current.condition.code;
    const dayOrNight = response.current.is_day;

    document.querySelector('.current__primary__image').setAttribute('src',`/src/images/weather/${currentWeatherCode}-${dayOrNight}.svg`)
    document.querySelector('.current__temperature').innerHTML = `${cTemp}<sup>o</sup>C`;
    document.querySelector('.current__weather').innerHTML = `${cCondition}`
    document.querySelector('.current__min__temperature').innerHTML = `${currMin}<sup>o</sup>C`
    document.querySelector('.current__max__temperature').innerHTML = `${currMax}<sup>o</sup>C`
}
   
function displayAdditionalInformation(response){
    const {current ,forecast, location} = response;
    const {forecastday} = forecast;
    const [day1] = forecastday;

    const {wind_kph, uv, pressure_in, humidity, gust_kph, condition ,is_day} = current;
    const {code} = condition;
    const {astro} = day1;
    const {sunset, sunrise} = astro;

    document.querySelector('.additional-info-rain').innerHTML = day1.day.daily_chance_of_rain;
    document.querySelector('.additional-info-wind').innerHTML = wind_kph;
    document.querySelector('.additional-info-sunrise').innerHTML = sunrise;
    document.querySelector('.additional-info-sunset').innerHTML = sunset;
    document.querySelector('.additional-info-uv').innerHTML = uv;
    document.querySelector('.additional-info-pressure').innerHTML = pressure_in;
    document.querySelector('.additional-info-humidity').innerHTML = humidity;
    document.querySelector('.additional-info-gust').innerHTML = gust_kph;
}

function displayForecast(response){
    var d = new Date();
    const now = new Date();
    let currentHour = now.getHours();
    let minutes = now.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
    let hourlyHTML = "";
    const {forecast, current} = response;
    const {is_day} = current;
    const {forecastday} = forecast;
    const [day1 ,day2, day3] = forecastday;
    const {hour} = day1;
   
    // const {condition} = hour;
    // const {code} = condition;
    
    const amPm = currentHour >= 12 ? 'PM' : 'AM';
    let code;
    for(let i = currentHour; i <= 23 ; i++){
        code = hour[i].condition.code;
        console.log(hour[i].temp_c);
        hourlyHTML += `
        <div class="forecast__hourly">
            <img src="/src/images/weather/${code}-${is_day}.svg" alt="">
            <div>
                <h3>${i}:${minutes}${amPm}</h3>
                <h3 class="hourly__temperature">${hour[i].temp_c}</h3>
            </div>
        </div>
    `
    document.querySelector('.forecast').innerHTML = hourlyHTML;
    }
   
}