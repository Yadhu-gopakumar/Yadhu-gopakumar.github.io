let img_container=document.getElementById("img_container");
let temp = document.getElementById("temp");
let date = document.getElementById("date");
let city_name = document.getElementById("city_name");
let weather = document.getElementById("weather");
let Cloudy_val = document.getElementById("Cloudy_val");
let Humidity_val = document.getElementById("Humidity_val");
let Wind_val = document.getElementById("Wind_val");
let Rain_val = document.getElementById("Rain_val");
var icon=document.getElementById("icon");

const appid = "14e359998245563168f1dd4567bc06b7";
var city = document.getElementById("search_city");
var button_box = document.getElementById("button_box");
var ulocation = document.getElementById("location");
var fcity = '';

function display_load() {
  loader.style.display = "block";
  setTimeout(() => {
    loader.style.display = "none";
  }, 3000);

}
function hide_loading() {
  loader.style.display = "none";
}
ulocation.addEventListener('click', () => {
  display_load();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      lat = lat.toFixed(2);
      lon = lon.toFixed(2);

      getapi_response_loc(lon, lat);
    })
  }
}
);
function getapi_response_loc(lon, lat) {


  fetch(" http://api.openweathermap.org/geo/1.0/reverse?lat=" + lat + "&lon=" + lon + "&limit=5&appid=" + appid + "&units=imperial")
    .then(response => response.json(),

  )
    .then(data => {
      hide_loading();

      var tempval = data['main']['temp'];
      var degval=Math.floor((tempval-32)*0.55);
      var cityval = data['name'];
      var discval = data['weather'][0]['description'];
      var iconval=weatherData['weather'][0]['icon'];
      var jCloudy_val = data['main']['pressure'];
      var jHumidity_val = data['main']['humidity'];
      var jWind_val = data['wind']['speed'];
      var jRain_val = data['sys']['country'];
      // icon.src = "http://openweathermap.org/img/w/"+obj.weather[0].icon+".png";
      temp.innerHTML = degval;
      weather.innerHTML = discval;
      city_name.innerHTML = cityval;
      icon.innerHTML=iconval;
      Cloudy_val.innerHTML = jCloudy_val;
      Humidity_val.innerHTML = jHumidity_val;
      Wind_val.innerHTML = jWind_val;
      Rain_val.innerHTML = jRain_val;


    })
    .catch(err => alert(err),
  )
}



window.onload = function onload_event() {

  display_load();

  getapi_response("kerala");

}


button_box.addEventListener('click', function () {

  fcity = city.value;
  if (fcity == '') {
    alert("enter city name")
  }
  else {
    display_load();
    getapi_response(fcity);
  }
  
}
);


function getapi_response(city) {

  fetch(" https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appid + "&units=imperial")
    .then(response => response.json(),

  )
    .then(data => {
      hide_loading();

      var tempval = Math.floor(data['main']['temp']);
      var cityval = data['name'];
      var discval = data['weather'][0]['description'];
      var bg_img=data['weather'][0]['main'];
      var jCloudy_val = data['main']['pressure'];
      var jHumidity_val = data['main']['humidity'];
      var jWind_val = data['wind']['speed'];
      var jRain_val = data['sys']['country'];

      var iconCode = data.weather[0].icon; 

icon.innerHTML="<img src=http://openweathermap.org/img/wn/"+iconCode+"@2x.png>";
      
      temp.innerHTML = tempval;
      weather.innerHTML = discval;
      city_name.innerHTML = cityval;
      Cloudy_val.innerHTML = jCloudy_val;
      Humidity_val.innerHTML = jHumidity_val;
      Wind_val.innerHTML = jWind_val;
      Rain_val.innerHTML = jRain_val;
      console.log(bg_img);
      if (bg_img=='Clouds') {
        img_container.style.backgroundImage="url('images/cloudy.jpg')";
      } 
      else if(bg_img=='Thunderstorm') {
        img_container.style.backgroundImage="url('images/Thunderstorm.jpg')";
        
      }
      else if(bg_img=='Drizzle') {
        img_container.style.backgroundImage="url('images/Drizzle.jpg')";
        
      }else if(bg_img=='Rain') {
        img_container.style.backgroundImage="url('images/Rain.jpg')";
        
      }else if(bg_img=='Snow') {
        img_container.style.backgroundImage="url('images/Snow.jpg')";
        
      }
      else if(bg_img=='Atmosphere'||bg_img=='Mist') {
        img_container.style.backgroundImage="url('images/atmosphere.jpg')";
        
      }
      else if(bg_img=='Clear') {
        img_container.style.backgroundImage="url('images/clear.jpg')";
        
      }
      else{
        img_container.style.backgroundImage="url('images/bg.jpg')";

      }
    })
    .catch(err =>
      alert("city not found"),
    );
}
