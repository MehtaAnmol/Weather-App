
import './styles/index.css'
import { fetchWeatherForecast } from './pages/fetchWeatherForecast.js';

 

document.querySelector('.input').addEventListener('keypress' , async function searchEnterEventHandler(event) {
    if(event.key === 'Enter'){
    const input = document.querySelector('.input').value  
    try{
        const response = await fetchWeatherForecast(input);
        displayCurrentWeather(response);
    }catch(error){
        console.log(`ERROR: ${error}`)
    }
}
});


const currentTemp = document.querySelector('.cw-temp')


function displayCurrentWeather(response){
    console.log(response)
    const cTemp = response.current.temp_c;
    const cCondition = response.current.condition.text;
    const currMin = response.forecast.forecastday[0].day.mintemp_c
    const currMax = response.forecast.forecastday[0].day.maxtemp_c;
    const currentWeatherCode = response.current.condition.code;
    const dayOrNight = response.current.is_day;

    document.querySelector('.cw-icon').setAttribute('src',`/src/images/weather/${currentWeatherCode}-${dayOrNight}.svg`)
    document.querySelector('.cw-temp').innerHTML = `${cTemp}<sup>o</sup>C`;
    document.querySelector('.cw-weather').innerHTML = `${cCondition}`
    document.querySelector('.cw-min-info-temp').innerHTML = `${currMin}<sup>o</sup>C`
    document.querySelector('.cw-max-info-temp').innerHTML = `${currMax}<sup>o</sup>C`
}
   


