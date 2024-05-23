import './styles/index.css';
import { fetchWeatherForecast } from './pages/fetchWeatherForecast.js';
import { getMinutes } from 'date-fns';
 
    document.addEventListener('DOMContentLoaded', function(){
        displayDefault();
    
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
            document.querySelector('.input').value = "";
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
        const now = new Date();
        console.log(now)
        let currentHour = now.getHours();
        let minutes = now.getMinutes();
            if (minutes < 10) {
                minutes = '0' + minutes;
            }

        console.log(typeof(currentHour))
        console.log(minutes)
        
        
        let hourlyHTML = "";
        const {forecast, current} = response;
        const {is_day} = current;
        const {forecastday} = forecast;
        const [day1] = forecastday;
        const {hour} = day1;
        // const {condition} = hour;
        // const {code} = condition;
        const amPm = currentHour >= 12 ? 'PM' : 'AM';
        let code;
        for(let j = 0, i = currentHour; j < 5; j++, i++ ){
        if(i<=23){    code = hour[i].condition.code;
            // console.log(hour[i].temp_c);
            hourlyHTML += `
                <div class="forecast__hourly">
                    <img src="/src/images/weather/${code}-${is_day}.svg" alt="">
                    <div>
                        <h3>${i}:${minutes}${amPm}</h3>
                        <h3 class="hourly__temperature">${hour[i].temp_c}<sup>o</sup>C</h3>
                    </div>
                </div>
            `
        document.querySelector('.forecast__hourly__today').innerHTML = hourlyHTML;}
        }

       //------------------------------------------------
        forecastThisWeek(response);
    }

    function forecastThisWeek(response){
        const {forecast, current} = response;
        const {forecastday} = forecast;
        const {is_day} = current;
        let forecastHTML = "";
        const date = new Date();
        let today = date.getDate();
            if(today < 10 ) today = "0" + today;
        let month = date.getMonth();
            if(month < 10) month = '0' + month;
           
        console.log(month)
        let j= 0;
        for(let i of forecastday){
            forecastHTML +=`
                <div class="forecast__day">
                    <img src="/src/images/weather/${i.day.condition.code}-${is_day}.svg" alt="">
                    <div class="day_info">
                        <h4>${+today +j}-${month}</h4>
                        <div class="day__minmax">
                            <div class="day__min">
                                <h4>min</h4>
                                <h4>${i.day.mintemp_c}</h4>
                            </div>
                            <div class="day__max">
                                <h4>max</h4>
                                <h4>${i.day.maxtemp_c}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            `
            document.querySelector('.forecast__this__week').innerHTML = forecastHTML;
        j++}
    }
    
    async function displayDefault(){
        try{
            const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=7fe00839801248baa93112333240105&q=$New_Delhi')
            const weather = await response.json();
            displayCurrentWeather(weather);
            displayAdditionalInformation(weather);
            displayForecast(weather);
            forecastThisWeek(weather);
        } catch(error){
            console.log(`ERROR: ${error}`);
        }
    }; 
} )