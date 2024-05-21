
const APP = {
    SEARCHURL:`https://eu1.locationiq.com/v1/search.php?format=json&`,
    TOKEN: `pk.88d44e09b6488c0c8c71b3e5c81cff54`
};

function forward_geocoding(city){
    let geocoding_url = `${APP.SEARCHURL}key=${APP.TOKEN}&q=${city}`;

    fetch(geocoding_url)
    .then(data => data.json())
    .then(parsedData=>{
         
       parsedData[0].lat;
    });
}

//lat & lon


const searchButton = document.querySelector('.search_button');
const searchBarText = document.querySelector('.search_bar_text')
const input = document.querySelector('.input_search_box');
const box = document.querySelector('.box');
const box_err = document.querySelector('.box_err');
let a = false;
searchButton.addEventListener('click',function(event){
    searchBarText.classList.toggle('active');
    setTimeout(()=>{
       // a = true;
    }, 0);
});


 let apiKey = "fd1cdbcd855978406b13dd2441b706a8";
 let city = "Moscow";
 let url = `https://api.open-meteo.com/v1/forecast?latitude=55.7558&longitude=37.6176&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode&daily=weathercode&current_weather=true&timezone=Europe%2FMoscow`;
 
 let status_;

const temp = document.getElementById('temp_span');
const humidity = document.getElementById('humidity_span');
const wind = document.getElementById('wind_span');
const pic = document.getElementById('pic_span');
const feel = document.querySelector('.feel_span');
const pic_text = document.getElementById('description_span');
const city_name = document.getElementById('city_name');


let city_;
 
    searchBarText.addEventListener('keyup', (event)=>{
        if (event.code === 'Enter'){
            input.innerHTML= searchBarText.value;
            city = input.value;
            let geocoding_url = `${APP.SEARCHURL}key=${APP.TOKEN}&q=${city}`;

             fetch(geocoding_url)
            .then(data_geo => data_geo.json())
            .then(parsedData=>{
        
                    
                     let latitude = parsedData[0].lat;
                     let longitude = parsedData[0].lon;
                   
            
            url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,weathercode&daily=weathercode&current_weather=true&timezone=auto`;
           fetch(url)
            .then(data => data.json())
            .then(data2 => {
                box_err.classList.remove('err');
                box.classList.toggle('active');
                city_name.innerHTML = `Погода в  ${parsedData[0].display_name}`;
               
                feel.innerHTML = `${data2.hourly.apparent_temperature[20]}°`
                wind.innerHTML = `${data2.current_weather.windspeed} m/sec`;
                 temp.innerHTML = ` ${data2.current_weather.temperature}°`;
                 humidity.innerHTML = `${data2.hourly.relativehumidity_2m[20]}%`;
                
                let code = data2.current_weather.weathercode;
                console.log(code);
                switch(code){
                    case 0:
                        pic_text.innerHTML = 'cloudy';
                        pic.src = "01.png";
                        break;
                    case 1:
                        pic_text.innerHTML = 'partly cloudy';
                        pic.src = "02.png";
                        break;
                        case 2:
                        pic_text.innerHTML = 'partly cloudy';
                        pic.src = "02.png";
                        break;
                        case 3:
                        pic_text.innerHTML = 'partly cloudy';
                        pic.src = "02.png";
                        break;
                    case 45:
                        pic_text.innerHTML = 'fog';
                        pic.src = "03.png";
                        break;
                        case 48:
                        pic_text.innerHTML = 'fog';
                        pic.src = "03.png";
                        break;
                    case 51:
                        pic_text.innerHTML = 'drizzle';
                        pic.src = "04.png";
                        break;
                        case 53:
                            pic_text.innerHTML = 'drizzle';
                            pic.src = "04.png";
                            break;

                            case 55:
                                pic_text.innerHTML = 'drizzle';
                                pic.src = "04.png";
                                break;                            case (56 && 57):
                        pic_text.innerHTML = 'freezing drizzle';
                        pic.src = "05.png";
                        break;
                    case 61:
                        pic_text.innerHTML = 'rain';
                        pic.src = "06.png"
                        break;
                        case 63:
                        pic_text.innerHTML = 'rain';
                        pic.src = "06.png"
                        break;
                        case 65:
                        pic_text.innerHTML = 'rain';
                        pic.src = "06.png"
                        break;

                        case 66:
                        pic_text.innerHTML = 'freezing rain';
                        pic.src = "07.png";
                        break;
                        case 67:
                            pic_text.innerHTML = 'freezing rain';
                            pic.src = "07.png";
                            break;
                    case 71:
                        pic_text.innerHTML = 'snow fall';
                        pic.src = "08.png";
                        break;
                        case 73:
                            pic_text.innerHTML = 'snow fall';
                            pic.src = "08.png";
                            break;
                            case 75:
                                pic_text.innerHTML = 'snow fall';
                                pic.src = "08.png";
                                break;
                    case (77):
                        pic_text.innerHTML = 'snow grains';
                        pic.src = "09.png";
                        break;
                    case 80:
                        pic_text.innerHTML = 'rain showers';
                        pic.src = "10.png";
                        break;
                        case 81:
                            pic_text.innerHTML = 'rain showers';
                            pic.src = "10.png";
                            break;

                            case 82:
                                pic_text.innerHTML = 'rain showers';
                                pic.src = "10.png";
                                break;                            case (85 && 86):
                        pic_text.innerHTML = 'snow showers heavy';
                        pic.src = "11.png";
                        break;
                    case (95):
                        pic_text.innerHTML = 'thunderstorm';
                        pic.src = "12.png";
                        break;    
                    case 96:
                        pic_text.innerHTML = 'thunderstorm with heavy hail';
                        pic.src = "13.png";
                        break;
                        case 99:
                            pic_text.innerHTML = 'thunderstorm with heavy hail';
                            pic.src = "13.png";
                            break;
                    
                }

                status_ = true;
                })
            })
            .catch(err=>{
               if (status_ = false){}
               else {
                console.log(err);
                box.classList.remove('active');
                box_err.classList.toggle('err');
                box_err.innerHTML=`Упс...не удалось найти город "${city}". Попробуйте еще раз`;
                
               }
              status_ = false;  
            })
           
        }
    })



    //let google_key = 'AIzaSyA15BBNTEyK_s-tdxNQ54h_ISa9mRpNWRk';