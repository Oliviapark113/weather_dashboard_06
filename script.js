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
          
        console.log(json)
       console.log(json.list[0].main.temp)
       console.log(json.list[0].weather[0])
     
        $("#day1-date").text(json.list[0].dt_txt);
        $("#day1-icon").attr("src",  "http://openweathermap.org/img/w/" + json.list[0].weather[0].icon + ".png");
        $("#day1-temp").text(json.list[0].main.temp)
        $("#day1-humidity").text(json.list[0].main.humidity)
     
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
      