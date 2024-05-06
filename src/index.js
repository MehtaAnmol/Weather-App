
import './styles/index.css'
import { fetchWeatherForecast } from './pages/fetchWeatherForecast.js';

 

document.querySelector('.input').addEventListener('keypress' , async function searchEnterEventHandler(event) {
    if(event.key === 'Enter'){
    const input = document.querySelector('.input').value  
    try{
        const response = await fetchWeatherForecast(input);
        displayCurrentWeather(response);
        displayAdditionalInformation(response);
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
    // const cor = response.forecast.forecastday[0].day.daily_chance_of_rain;
    // const wind = response.current.wind_kph;
    // const uvIndex = response.current.uv;
    // const pressure = response.current.pressure_in;
    // const humidity = response.current.humidity;
    // const gust = response.current.gust_kph;
    // const sunrise = response.forecast.forecastday[0].astro.sunrise;
    // const sunset = response.forecast.forecastday[0].astro.sunset;
    // console.log(cor , wind , uvIndex , pressure, humidity, gust, sunrise, sunset)
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

