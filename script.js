console.log("hello")
// var currentHour = moment().format('LT');
// var now = moment().format('LLL');
// console.log(now)
// $("#current-date").text(now)

var appID = "80b3e8a297999f6bc99d97f895ecd144"

    //?key = value&key=value&key=value

$(".query_btn").on("click",function(){
    var query_param =$(this).prev().val();
    if($(this).prev().attr("placeholder") == "City"){
        var weather ="http://api.openweathermap.org/data/2.5/weather?q=" + query_param +"&units=imperial"+"&appid=" + appID;
        console.log(weather)
        var forecast ="http://api.openweathermap.org/data/2.5/forecast?q=" + query_param +"&units=imperial"+"&APPID=" + appID;
        console.log(forecast)

    }
    else if($(this).prev().attr("placeholder")=="Zip Code"){
        var weather ="http://api.openweathermap.org/data/2.5/weather?zip=" + query_param +"&units=imperial"+"&appid=" + appID;
        console.log(weather)
    }
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
        //    console.log(json.list[7])
        //    console.log(json.list[15])
        //    console.log(json.list[23])
        //    console.log(json.list[31])
        //    console.log(json.list[39])
        
           $("#day1-date").text(json.list[7].dt_txt);
           $("#day1-icon").attr("src",  "http://openweathermap.org/img/w/" + json.list[7].weather[0].icon + ".png");
           $("#day1-temp").text(json.list[7].main.temp)
           $("#day1-humidity").text(json.list[7].main.humidity)

           $("#day2-date").text(json.list[15].dt_txt);
           $("#day2-icon").attr("src",  "http://openweathermap.org/img/w/" + json.list[15].weather[0].icon + ".png");
           $("#day2-temp").text(json.list[15].main.temp)
           $("#day2-humidity").text(json.list[15].main.humidity)


           $("#day3-date").text(json.list[23].dt_txt);
           $("#day3-icon").attr("src",  "http://openweathermap.org/img/w/" + json.list[23].weather[0].icon + ".png");
           $("#day3-temp").text(json.list[23].main.temp)
           $("#day3-humidity").text(json.list[23].main.humidity)

           $("#day4-date").text(json.list[31].dt_txt);
           $("#day4-icon").attr("src",  "http://openweathermap.org/img/w/" + json.list[31].weather[0].icon + ".png");
           $("#day4-temp").text(json.list[31].main.temp)
           $("#day4-humidity").text(json.list[31].main.humidity)

           $("#day5-date").text(json.list[39].dt_txt);
           $("#day5-icon").attr("src",  "http://openweathermap.org/img/w/" + json.list[39].weather[0].icon + ".png");
           $("#day5-temp").text(json.list[39].main.temp)
           $("#day5-humidity").text(json.list[39].main.humidity)

      }
     
     
    })
    });
    
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
        var arr =[ 1,2,3,4,5,6,7,8,9,10]
        // for (var i = 0; i < arr.length; i += 2) {
        //     console.log(arr[i])
        //  } 
       

for (var i = 3; i < arr.length; i += 2) {
   console.log(arr[i])
}
      





