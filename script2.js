console.log("hello")

 var appID = "80b3e8a297999f6bc99d97f895ecd144"
//set global variable..
 var weather ;
 var forecast ;
 var zipCodeweather;
 var query_param;

$(".query_btn").on("click",function(){

     query_param =$(this).prev().val();

    if($(this).prev().attr("placeholder") == "City"){
         
         weather ="http://api.openweathermap.org/data/2.5/weather?q=" + query_param +"&units=imperial"+"&appid=" + appID;

         forecast ="http://api.openweathermap.org/data/2.5/forecast?q=" + query_param +"&units=imperial"+"&APPID=" + appID;
       
       
        getWeatherData()
        getForecastData()
    }
    else if($(this).prev().attr("placeholder")=="Zip Code"){
         zipCodeweather ="http://api.openweathermap.org/data/2.5/weather?zip=" + query_param +"&units=imperial"+"&appid=" + appID;

         forecast ="http://api.openweathermap.org/data/2.5/forecast?q=" + query_param +"&units=imperial"+"&APPID=" + appID;
        
        getZipcodeWeatherData()
        getForecastData()
    }
});

function  getWeatherData() {
    $.getJSON(weather, function(json){

         weather ="http://api.openweathermap.org/data/2.5/weather?q=" + query_param +"&units=imperial"+"&appid=" + appID;
       
        $("#city").text(json.name);
        $("#main_weather").text(json.weather[0].main);
        $("#description_weather").text(json.weather[0].description);
        $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
        $("#temperature").text(json.main.temp);
        $("#pressure").text(json.main.pressure);
        $("#humidity").text(json.main.humidity);
    })
}

function  getZipcodeWeatherData() {
    $.getJSON(zipCodeweather, function(json){
         
        zipCodeweather ="http://api.openweathermap.org/data/2.5/weather?zip=" + query_param +"&units=imperial"+"&appid=" + appID;
        
       
        $("#city").text(json.name);
        $("#main_weather").text(json.weather[0].main);
        $("#description_weather").text(json.weather[0].description);
        $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
        $("#temperature").text(json.main.temp);
        $("#pressure").text(json.main.pressure);
        $("#humidity").text(json.main.humidity);
    })
}

function getForecastData(){
    $.getJSON(forecast, function(json){

         forecast ="http://api.openweathermap.org/data/2.5/forecast?q=" + query_param +"&units=imperial"+"&APPID=" + appID;
          
      for (var i=7; i<json.list.length; i+=8 ){
       
        
           $("#day1-date").text("Date: "+json.list[7].dt_txt);
           $("#day1-icon").attr("src",  "http://openweathermap.org/img/w/" + json.list[7].weather[0].icon + ".png");
           $("#day1-temp").text("Temp: "+json.list[7].main.temp+ " °F")
           $("#day1-humidity").text("Humidity: "+json.list[7].main.humidity+ " %")

           $("#day2-date").text("Date: "+json.list[15].dt_txt);
           $("#day2-icon").attr("src",  "http://openweathermap.org/img/w/" + json.list[15].weather[0].icon + ".png");
           $("#day2-temp").text("Temp: "+json.list[15].main.temp+ " °F")
           $("#day2-humidity").text("Humidity: "+json.list[15].main.humidity+ " %")


           $("#day3-date").text("Date: "+json.list[23].dt_txt);
           $("#day3-icon").attr("src",  "http://openweathermap.org/img/w/" + json.list[23].weather[0].icon + ".png");
           $("#day3-temp").text("Temp: "+json.list[23].main.temp+ " °F")
           $("#day3-humidity").text("Humidity: "+json.list[23].main.humidity + " %")

           $("#day4-date").text("Date: "+json.list[31].dt_txt);
           $("#day4-icon").attr("src",  "http://openweathermap.org/img/w/" + json.list[31].weather[0].icon + ".png");
           $("#day4-temp").text("Temp: "+ json.list[31].main.temp+ " °F")
           $("#day4-humidity").text("Humidity: "+json.list[31].main.humidity + " %")

           $("#day5-date").text("Date: " +json.list[39].dt_txt);
           $("#day5-icon").attr("src",  "http://openweathermap.org/img/w/" + json.list[39].weather[0].icon + ".png");
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

      
