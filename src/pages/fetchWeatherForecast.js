export function fetchWeatherForecast(location){
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