console.log("hello")
var currentHour = moment().format('LT');
var now = moment().format('LLL');
console.log(now)
$("#current-date").text(" "+now)

var appID = "80b3e8a297999f6bc99d97f895ecd144"
var city = "new york"
var chicago = $("#city-chicago")

    //?key = value&key=value&key=value


        var weather ="http://api.openweathermap.org/data/2.5/weather?q=" +city+"&units=imperial"+"&appid=" + appID;
        
        var forecast ="http://api.openweathermap.org/data/2.5/forecast?q=" +city+"&units=imperial"+"&APPID=" + appID;
       

  
    
    $.getJSON(weather, function(json){

        $("#city").text(json.name);
        $("#main_weather").text(json.weather[0].main);
        $("#description_weather").text(json.weather[0].description);
        $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
        $("#temperature").text(json.main.temp);
        $("#pressure").text(json.main.pressure);
        $("#humidity").text(json.main.humidity);
    })

    $.getJSON(forecast, function(json){
          
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
     
     
    })
  
    
 

   
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
//         var arr =[ 1,2,3,4,5,6,7,8,9,10]
//         // for (var i = 0; i < arr.length; i += 2) {
//         //     console.log(arr[i])
//         //  } 
       

// for (var i = 3; i < arr.length; i += 2) {
//    console.log(arr[i])
// }
      





