"use strict";

function getWeather() {
    const apiKey = '947648b211edb85e0618257d2cdc395f'; 
    const city = document.getElementById('city').value.trim();

    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`An error occurred: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            alert('Please enter a valid city!');
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const calcius = +data.main.temp;
    const fahrenheit = (calcius * 9/5) + 32;


    console.log(calcius);
    console.log(fahrenheit);

    document.addEventListener('click', function(event) {
        if (event.target.id === 'celc') {
            document.getElementById('temperatura').innerHTML=`${Math.round(calcius)}°<span>C</span>`;
        } else if (event.target.id === 'fahr') {
            document.getElementById('temperatura').innerHTML=`${Math.round(fahrenheit)}°<span>F</span>`;
        }
    });
   


    console.log(data);

    weatherInfo.innerHTML = `
    <div class="main-parent">
    <div class="main-container">

        <div class="main-city-date">
            <div class="city-date">
                <div class="city-date-content">
                    <div class="first-city-date-child">
                        <p>${data.name}</p>
                    </div>
                    <div class="second-city-date-child">
                        <p>${date.toLocaleDateString(undefined,options)}</p>
                    </div>
                </div>
                
            </div>
            <div class="break-line"></div>
        </div>

        <div class="main-temp-description">
            <div class="temp-description">
                <div class="temp-description-content">
                    <div style="height: 200px;">
                        <h1 id="temperatura">${Math.round(data.main.temp)}°<span>C</span></h1>
                    </div>
                    <div style="height: 200px;"><img src="assets/cloudy.svg" alt="" height="200px" width="180px"></div>
                </div>
                
                
            </div>
            <div class="break-line"></div>
        </div>

        <div class="main-bottom-part">
            <div class="bottom-part">

                <div class="bottom-part-first">
                    <div class="bottom-part-first-content">
                        <div style="height: 38px;">
                            <img src="assets/droplets.svg" alt="" height="38px" width="38px">
                        </div>
                        <div>
                            <p>${data.main.humidity}%</p>
                        </div>
                    </div>
                    <div class="bottom-part-first-content">
                        <div style="height: 38px;">
                            <img src="assets/wind.svg" alt="" height="38px" width="38px">
                        </div>
                        <div>
                            <p>${data.wind.speed}km/h</p>
                        </div>
                    </div>
                </div>

                <div class="bottom-part-second">
                <button class="val-btn" id="celc">C°</button>
                <button class="val-btn" id="fahr">F°</button>
                </div>
                
            </div>
        </div>
    </div>
</div>
    `;

     
}




