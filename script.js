
 var appID = "80b3e8a297999f6bc99d97f895ecd144"


//set global variable..
 var weather ;
 var forecast ;
 var zipCodeweather;
 var query_param;
 var currentLocation;
 var lat;
 var lon;
 var uvIndexspan = $("#uv-index")
 var cityVariable = localStorage.getItem("cities") || []

 lastSavedcity ()
 

 function lastSavedcity() {

    if(cityVariable){
         weather ="https://api.openweathermap.org/data/2.5/weather?q=" +cityVariable +"&units=imperial"+"&appid=" + appID;
       
        
        forecast ="https://api.openweathermap.org/data/2.5/forecast?q=" +cityVariable+"&units=imperial"+"&appid=" + appID;

        getWeatherData()
        getForecastData()
    }

 }

 


$(".query_btn").on("click",function(){

     query_param =$(this).prev().val();

     localStorage.clear()

    if($(this).prev().attr("placeholder") == "City"){
         
         weather ="https://api.openweathermap.org/data/2.5/weather?q=" + query_param +"&units=imperial"+"&appid=" + appID;

         forecast ="https://api.openweathermap.org/data/2.5/forecast?q=" + query_param +"&units=imperial"+"&appid=" + appID;

        getWeatherData()
        getForecastData()
    }

    else if($(this).prev().attr("placeholder")=="Zip Code"){
         zipCodeweather ="https://api.openweathermap.org/data/2.5/weather?zip=" + query_param +"&units=imperial"+"&appid=" + appID;

         forecast ="https://api.openweathermap.org/data/2.5/forecast?q=" + query_param +"&units=imperial"+"&appid=" + appID;
        
        getZipcodeWeatherData()
        getForecastData()
    }

  
   localStorage.setItem('cities', query_param)
 
});

$(".othercities").on("click", function(){
  
    var cityInfo = $(this).attr("data-city")

    weather ="https://api.openweathermap.org/data/2.5/weather?q=" + cityInfo +"&units=imperial"+"&appid=" + appID;

    forecast ="https://api.openweathermap.org/data/2.5/forecast?q=" + cityInfo +"&units=imperial"+"&appid=" + appID;
    
    getWeatherData()
    getForecastData()
    localStorage.setItem('cities', cityInfo)
    


})

function  getWeatherData() {
    $.getJSON(weather, function(json){

         weather ="https://api.openweathermap.org/data/2.5/weather?q=" + query_param +"&units=imperial"+"&appid=" + appID;


         lat = json.coord.lat;
         lon = json.coord.lon;
         getUVData()
         renderDate()

        $("#city").text(json.name);
        $("#country").text(" ," + json.sys.country);
        $("#main_weather").text(json.weather[0].main);
        $("#description_weather").text(json.weather[0].description);
        $("#weather_image").attr("src", "https://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
        $("#temperature").text(json.main.temp);
        $("#wind-speed").text(json.wind.speed);
        $("#humidity").text(json.main.humidity);

    })
}


function getUVData(){
     
    var uvEndpoint = "https://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&appid="+appID

    $.getJSON(uvEndpoint, function(uvdata){
     
      uvIndexspan.text(uvdata.value)
      uvIndexspan .attr("class", "")

      if(uvdata.value <= 2){
          
          uvIndexspan .addClass("bg-success")
      }
      else if(2 < uvdata.value && uvdata.value <= 5 ){
        uvIndexspan.addClass("bg-warning")
      }

      else if(6 < uvdata.value && uvdata.value <= 7 ){
        uvIndexspan.addClass("bg-orange")
      }

      else if(8 < uvdata.value && uvdata.value <= 10 ){
        uvIndexspan.addClass("bg-danger")
      }

    })

    
}



function dateBuilder(d){

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = days[d.getDay()];
    var date = d.getDate();
    var month = months[d.getMonth()];
    var year = d.getFullYear() 

    return `${day} ${date} ${month} ${year} `
}

function renderDate(){
    var now = new Date();
    var date = document.querySelector("#current-date");
    date.innerHTML = dateBuilder(now)
}


function  getZipcodeWeatherData() {
    $.getJSON(zipCodeweather, function(json){
         
        zipCodeweather ="https://api.openweathermap.org/data/2.5/weather?zip=" + query_param +"&units=imperial"+"&appid=" + appID;
        
        lat = json.coord.lat;
        lon = json.coord.lon;
        getUVData()
       
        $("#city").text(json.name);
        $("#country").text(" ," + json.sys.country);
        $("#main_weather").text(json.weather[0].main);
        $("#description_weather").text(json.weather[0].description);
        $("#weather_image").attr("src", "https://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
        $("#temperature").text(json.main.temp);
        $("#wind-speed").text(json.wind.speed);
        $("#humidity").text(json.main.humidity);
    })
}

function getForecastData(){
    $.getJSON(forecast, function(json){

         forecast ="https://api.openweathermap.org/data/2.5/forecast?q=" + query_param +"&units=imperial"+"&appid=" + appID;
          
      for (var i=7; i<json.list.length; i+=8 ){
       
        
           $("#day1-date").text("Date: "+json.list[7].dt_txt);
           $("#day1-icon").attr("src",  "https://openweathermap.org/img/w/" + json.list[7].weather[0].icon + ".png");
           $("#day1-temp").text("Temp: "+json.list[7].main.temp+ " °F")
           $("#day1-humidity").text("Humidity: "+json.list[7].main.humidity+ " %")

           $("#day2-date").text("Date: "+json.list[15].dt_txt);
           $("#day2-icon").attr("src",  "https://openweathermap.org/img/w/" + json.list[15].weather[0].icon + ".png");
           $("#day2-temp").text("Temp: "+json.list[15].main.temp+ " °F")
           $("#day2-humidity").text("Humidity: "+json.list[15].main.humidity+ " %")


           $("#day3-date").text("Date: "+json.list[23].dt_txt);
           $("#day3-icon").attr("src",  "https://openweathermap.org/img/w/" + json.list[23].weather[0].icon + ".png");
           $("#day3-temp").text("Temp: "+json.list[23].main.temp+ " °F")
           $("#day3-humidity").text("Humidity: "+json.list[23].main.humidity + " %")

           $("#day4-date").text("Date: "+json.list[31].dt_txt);
           $("#day4-icon").attr("src",  "https://openweathermap.org/img/w/" + json.list[31].weather[0].icon + ".png");
           $("#day4-temp").text("Temp: "+ json.list[31].main.temp+ " °F")
           $("#day4-humidity").text("Humidity: "+json.list[31].main.humidity + " %")

           $("#day5-date").text("Date: " +json.list[39].dt_txt);
           $("#day5-icon").attr("src",  "https://openweathermap.org/img/w/" + json.list[39].weather[0].icon + ".png");
           $("#day5-temp").text("Temp: "+ json.list[39].main.temp + " °F")
           $("#day5-humidity").text("Humidity: " +json.list[39].main.humidity +" %")

      }
    });
     
}
  
    var fahrenheit = true;

    $("#convert-to-celsius").click(function() {
        if (fahrenheit) {
             var cel = ($("#temperature").text()-32) *(5/9) ;
             console.log(cel)
             $("#temperature").text(Math.round(cel))
          
        }
        fahrenheit = false;
        
    });

        $("#convert-to-fahrenheit").click(function() {
            if (fahrenheit == false) {
                var fah =(($("#temperature").text() *(9/5))+32);
                console.log(fah)
                $("#temperature").text(Math.round(fah));
            }
            fahrenheit = true;
        });

      
