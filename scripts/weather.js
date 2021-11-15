const wrapper = document.querySelector(".weather-box"),
inputCity = wrapper.querySelector(".input-city"),
infoTxt = inputCity.querySelector(".info-txt"),
inputField = inputCity.querySelector("input"),
locBtn = inputCity.querySelector("button"),
weatherIcon = document.querySelector(".weather-part img"),
btnBack = wrapper.querySelector("header i");

const apiKey = "b50e680e3de5bd844b0a7ff87cac8d20";
var api;

inputField.addEventListener("keyup", e =>{
    //if user press enter and input is not empty
    if(e.key == "Enter" && inputField.value != ""){
        requestApi(inputField.value);
    }
});

locBtn.addEventListener("click", ()=>{
    if(navigator.geolocation){ //if browser support geolocation 
        navigator.geolocation.getCurrentPosition(getPosition, getErrorPosition);
    }else{
        alert("Your browser doesnt support geolocation")
    }
});

function getPosition(position){
    const{latitude, longitude} = position.coords; //get latitude and longitude of device
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    fetchData();
}

function getErrorPosition(error){
    infoTxt.innerText = error.message;
    infoTxt.classList.add("error")
}

function requestApi(city){
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetchData();
}

function fetchData(){
    infoTxt.innerText = "Getting weather details..."
    infoTxt.classList.add("pending");
    // get api response and return it with parsing into js object and in another
    // then call weatherDetails with passing api result as an argument 
    fetch(api).then(response => response.json()).then(result => weatherDetails(result));
}

function weatherDetails(info){
    if(info.cod == "404"){
        infoTxt.innerText = `${inputField.value} is not a valid city name`;
        infoTxt.classList.replace("pending", "error");
    }else{
        //get required properties from object
        const cityName = info.name;
        const country = info.sys.country;
        const {description, id} = info.weather[0];
        const {feels_like, humidity, temp} = info.main;

        //weather icons 
        if(id == 800){
            weatherIcon.src = "../images/sun.png";
        }else if(id >=200 & id <= 232){
            weatherIcon.src = "../images/storm.png";
        }else if(id >=600 & id <= 622){
            weatherIcon.src = "../images/snow.png";
        }else if(id >=701 & id <= 781){
            weatherIcon.src = "../images/haze.png";
        }else if(id >=801 & id <= 804){
            weatherIcon.src = "../images/cloudy.png";
        }else if((id >=300 & id <= 321) || (id >= 500 && id <= 531)){
            weatherIcon.src = "../images/rain.png";
        }

        //pass these values to html element
        wrapper.querySelector(".temp .numb").innerText = Math.floor(temp);
        wrapper.querySelector(".weather-wpart").innerText = description;
        wrapper.querySelector(".location span").innerText = `${cityName}, ${country}`;
        wrapper.querySelector(".temp .numb-2").innerText = Math.floor(feels_like); 
        wrapper.querySelector(".humidity span").innerText = `${humidity}%`; 


        infoTxt.classList.remove("pending", "error");
        wrapper.classList.add("active");
        console.log(info);
    }

}

//add button to go back 
btnBack.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
})