import { compareAsc, format } from "date-fns";
import './styles/index.css';


 



document.querySelector('.search').addEventListener('click', onButtonClick);

async function onButtonClick(){  
    const input = document.querySelector('.input')  
    try{
        const forecast = await fetchWeatherForecast(input.value);
        displayForeCast(forecast);
    }catch(error){
        console.log(`ERROR: ${error}`)
    }
}
function displayForeCast(futureWeather){
    console.log(futureWeather)
    futureWeather.forecast.forecastday.forEach(day =>{
        console.log(day.date);
    })

    
}
   

function fetchWeatherForecast(location){
    return new Promise((resolve , reject) =>{
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=7fe00839801248baa93112333240105&q=${location}&days=3&aqi=yes&alerts=yes`,{mode : 'cors'})
        .then(response => {
            if(!response.ok){
               return reject('Invalid location');
            }    
            resolve(response.json());
        })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
}
