  const apiKey="79028009d091b0cd55768fed67b6d9af";
  const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";
  const weatherIcon=document.querySelector(".weather_icon");
   const input=document.querySelector("#city");
  
  function insert_data(){
       if(input.value === ''){
             alert('Please Enter The City Name!!');
       }else{
             checkWeather();
             input.value='';
       }
  }

  async function checkWeather(){
          const response=await fetch(apiUrl + `&appid=${apiKey}&q=${input.value}`);
          var data= await response.json();
          console.log(data);
         
         if(data.cod=="404"){
            alert('Sorry! City Not Found');
         }else{
           
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.weather_cond').innerHTML = data.weather[0].main;
            document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+ "°C";
            document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
            document.querySelector('.Wind').innerHTML=data.wind.speed + " km/hr";
            
            // var conditions=

          if(data.weather[0].main=='Clouds'){
            weatherIcon.src="png/005-cloudy-2.png";
          }else if(data.weather[0].main=='Clear'){
            weatherIcon.src="png/004-sun.png";
          }else if(data.weather[0].main=='Rain'){
            weatherIcon.src="png/011-rain.png";
          }else if(data.weather[0].main=='Drizzle'){
            weatherIcon.src="png/008-raining.png";
          }else if(data.weather[0].main=='Mist'){
            weatherIcon.src="png/022-foggy.png";
          }else if(data.weather[0].main=='Sunny'){
            weatherIcon.src="png/004-sun.png";
          }else if(data.weather[0].main=='Haze'){
            weatherIcon.src="png/004-sun.png";
          }




         }
        
        
  }
 