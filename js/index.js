$( document ).ready(function() {
//get user location via ajax call
  $(".main-div").hide();
  var lat, lon;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      console.log(lat);
      lon = position.coords.longitude;
      console.log(lon)
      // delete get ip, copy and paste everything else in here
      //get weather info and modify dom with nested ajax call to deal with local/global scope variables
      $.getJSON('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=d7da77a602e1d794fb7db89eb3521990', function(weatherData) {
        $('#loading').fadeOut();
        $('.main-div').fadeIn('slow');
        // display city name
        $('#cityName').html(weatherData.name).fadeIn();
        // display weather description
        $('#description').html(weatherData.weather[0].description);
        var tempK = weatherData.main.temp;
        var tempF = Math.round(tempK * 9/5 - 459.67) + '°F';
        var tempC = Math.round(tempK - 273.15) + '°C';
        // if IP is in US show in fahrenheit, if not show in celsius
        var tempIsF = true;
        if (weatherData.sys.country === 'US') {
          $('#temp').html(tempF);
        } // close if
        else {
          $('#temp').html(tempC);
          tempIsF = false;
        } // close else
        //pressing button switches between fahrenheit and celsius
        $('#temp').click(function() {
          tempIsF ? $('#temp').html(tempC) : $('#temp').html(tempF)
          tempIsF = !tempIsF
        }) // close click function
                                  
       // I don't like open weather's icons so I changed them below.  Icon credit goes to http://dakirby309.deviantart.com/art/Weather-Dock-Icon-Set-16-Icons-512px-308405330
       if (weatherData.weather[0].icon === '01d') {
         $('#icon').html('<img src=https://res.cloudinary.com/devvzv96d/image/upload/v1476789565/day-clear_hf95jb.png>');
       } 
       else if (weatherData.weather[0].icon === '01n') {
         $('#icon').html('<img src=https://res.cloudinary.com/devvzv96d/image/upload/v1476789568/night-clear_gict6f.png>');    
       }
       else if (weatherData.weather[0].icon === '02d') {
         $('#icon').html('<img src=https://res.cloudinary.com/devvzv96d/image/upload/v1476789562/day-partly-cloudy_b8qjz3.png>'); 
       }
       else if (weatherData.weather[0].icon === '02n') {
         $('#icon').html('<img src=https://res.cloudinary.com/devvzv96d/image/upload/v1476789578/night-partly-cloudy_tcm1pc.png>'); 
       }
       else if (weatherData.weather[0].icon === '03d') {
         $('#icon').html('<img src=https://res.cloudinary.com/devvzv96d/image/upload/v1476786617/cloudy_ltwmxk.png>'); 
       }
       else if (weatherData.weather[0].icon === '03n') {
         $('#icon').html('<img src=https://res.cloudinary.com/devvzv96d/image/upload/v1476786617/cloudy_ltwmxk.png>'); 
       }
       else if (weatherData.weather[0].icon === '04d') {
         $('#icon').html('<img src=https://res.cloudinary.com/devvzv96d/image/upload/v1476789562/day-mostly-cloudy_vhozqx.png>'); 
       }
       else if (weatherData.weather[0].icon === '04n') {
         $('#icon').html('<img src=https://res.cloudinary.com/devvzv96d/image/upload/v1476789568/night-mostly-cloudy_od6yn2.png>'); 
       }
       else if (weatherData.weather[0].icon === '09d') {
         $('#icon').html('<img src=https://res.cloudinary.com/devvzv96d/image/upload/v1476789583/rainstorm_kafs7l.png>'); 
       }
       else if (weatherData.weather[0].icon === '09n') {
         $('#icon').html('<img src=https://res.cloudinary.com/devvzv96d/image/upload/v1476789583/rainstorm_kafs7l.png>'); 
       }
       else if (weatherData.weather[0].icon === '10d') {
         $('#icon').html('<img src=https://res.cloudinary.com/devvzv96d/image/upload/v1476789583/rainstorm_kafs7l.png>'); 
       }
       else if (weatherData.weather[0].icon === '10n') {
         $('#icon').html('<img src=https://res.cloudinary.com/devvzv96d/image/upload/v1476789583/rainstorm_kafs7l.png>'); 
       }
       else if (weatherData.weather[0].icon === '11d') {
         $('#icon').html('<img src=https://res.cloudinary.com/devvzv96d/image/upload/v1476789585/thunderstorm_onumld.png>'); 
       }
       else if (weatherData.weather[0].icon === '11n') {
         $('#icon').html('<img src=https://res.cloudinary.com/devvzv96d/image/upload/v1476789585/thunderstorm_onumld.png>'); 
       }
       else if (weatherData.weather[0].icon === '13d') {
         $('#icon').html('<img src=https://res.cloudinary.com/devvzv96d/image/upload/v1476789586/snowstorm_ts4fvz.png>'); 
       }
       else if (weatherData.weather[0].icon === '13n') {
         $('#icon').html('<img src=https://res.cloudinary.com/devvzv96d/image/upload/v1476789586/snowstorm_ts4fvz.png>'); 
       }
       else if (weatherData.weather[0].icon === '50d') {
         $('#icon').html('<img src=https://res.cloudinary.com/devvzv96d/image/upload/v1476789568/foggy_g8qkiq.png>'); 
       }
       else {
         $('#icon').html('<img src=https://res.cloudinary.com/devvzv96d/image/upload/v1476789568/foggy_g8qkiq.png>'); 
       }
       //show date
       var d = new Date();
       $('#time-and-date').html(d.toDateString());
    }); // close get weather data
      
    }); // close geolocation function
  } // close if 
  else {
    alert('Your browser does not support geolocation.');
  } // close else
    
}); // close document ready