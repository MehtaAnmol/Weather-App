
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

    document.querySelector('.cw-icon').setAttribute('src',`/src/images/weather/${currentWeatherCode}-${dayOrNight}.svg`)
    document.querySelector('.cw-temp').innerHTML = `${cTemp}<sup>o</sup>C`;
    document.querySelector('.cw-weather').innerHTML = `${cCondition}`
    document.querySelector('.cw-min-info-temp').innerHTML = `${currMin}<sup>o</sup>C`
    document.querySelector('.cw-max-info-temp').innerHTML = `${currMax}<sup>o</sup>C`
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

    document.querySelector('.ai-cor-info').innerHTML = day1.day.daily_chance_of_rain;
    document.querySelector('.ai-w-info').innerHTML = wind_kph;
    document.querySelector('.ai-sr-info').innerHTML = sunrise;
    document.querySelector('.ai-ss-info').innerHTML = sunset;
    document.querySelector('.ai-uv-info').innerHTML = uv;
    document.querySelector('.ai-p-info').innerHTML = pressure_in;
    document.querySelector('.ai-h-info').innerHTML = humidity;
    document.querySelector('.ai-g-info').innerHTML = gust_kph;
}

