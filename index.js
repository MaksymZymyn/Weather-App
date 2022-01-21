new Vue({
    el: "#root",
    data: {
        
        city: "Sumy",
        isLoading: false,
        isLoaded: false,

        lat: 0,
        lon: 0,
        temp: 0,
        tempMax: 0,
        tempMin: 0,
        weatherMain: "",
        weatherDescription: "",
        windSpeed: 0,
        humidity: 0,
        icon: "",

    },
    
    methods: {
        onSubmit() {
            
            this.isLoading = false;
            this.isLoaded = true;

            
            axios.get("https://api.openweathermap.org/data/2.5/weather", {
                params: {
                    q: this.city,
                    units: "metric",
                    lang: "ru",
                    appid: "f6e19684054b463c73221d99d6fdc86b",
                }
            }).then((response) => {
                console.log(response.data);

                this.isLoading = false;
                this.isLoaded = true;

                const data = response.data;

                this.temp = data.main.temp;
                this.tempMax = data.main.temp_max;
                this.tempMin = data.main.temp_min;
                this.windSpeed = data.wind.speed;
                this.humidity = data.main.humidity;
                this.weatherMain = data.weather[0].main;
                this.weatherDescription = data.weather[0].description;

                this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
            });
        }
        },

        onMyLocationClick() { 
            
            this.isLoading = false;
            this.isLoaded = true;  

            const location=document.getElementById("location");
            location.addEventListener('click', function() {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const lon = position.coords.longitude;
                    const lat = position.coords.latitude;
                fetch(`https://www.latlong.net/c/?lat=${lat}&long=${lon}`)
                .then((response) => response.json)
                });
            });

            axios.get("https://api.openweathermap.org/data/2.5/weather", {    
                parameters: {
                    lat: lat,
                    lon: lon,
                    units: "metric",
                    lang: "ru",
                    appid: "f6e19684054b463c73221d99d6fdc86b",
                }
            }).then((response) => {
                console.log(response.data);

                this.isLoading = false;
                this.isLoaded = true;

                const data = response.data;

                this.lat=data.coord.lat;
                this.lon=data.coord.lon;
                this.temp = data.main.temp;
                this.tempMax = data.main.temp_max;
                this.tempMin = data.main.temp_min;
                this.windSpeed = data.wind.speed;
                this.humidity = data.main.humidity;
                this.weatherMain = data.weather[0].main;
                this.weatherDescription = data.weather[0].description;

                this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
            });
        }
        },

        onMyWeatherForecast(()=> {

            this.isLoading = false;
            this.isLoaded = true;
       
            axios.get("https://pro.openweathermap.org/data/2.5/forecast/hourly", {
                params: {
                    q: this.city,
                    units: "metric",
                    lang: "ru",
                    appid: "f6e19684054b463c73221d99d6fdc86b",
                }
            }).then((response) => {
                console.log(response.data);

                this.isLoading = false;
                this.isLoaded = true;

                const data = response.data;

                // this.temp = data.main.temp;
                // this.tempMax = data.main.temp_max;
                // this.tempMin = data.main.temp_min;
                // this.windSpeed = data.wind.speed;
                // this.humidity = data.main.humidity;
                // this.weatherMain = data.weather[0].main;
                // this.weatherDescription = data.weather[0].description;

                // this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
            })
                }
                }
                }
                })
            
             
    



//             if ('geolocation' in navigator) {
    //             navigator.geolocation.getCurrentPosition(setPosition);
    //         }
    //         function setPosition(position) {
    //             const lon = position.coords.longitude;
    //             const lat = position.coords.latitude;
    //             getWeather(longitude, latitude);
    //         }
    //         function getWeather(longitude, latitude) {
                   
    //             const api=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f6e19684054b463c73221d99d6fdc86b`;
    //             fetch(api).then(function(response){
    //                 const data=response.json();
    //                 return data;
    //             }).then(function(data){
    //                 this.isLoading = false;
    //                 this.isLoaded = true;
    //                 this.lat=data.coord.lat;
    //                 this.lon=data.coord.lon;
    //                 this.temp = data.main.temp;
    //                 this.tempMax = data.main.temp_max;
    //                 this.tempMin = data.main.temp_min;
    //                 this.windSpeed = data.wind.speed;
    //                 this.humidity = data.main.humidity;
    //                 this.weatherMain = data.weather[0].main;
    //                 this.weatherDescription = data.weather[0].description;

    //                 this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
    //              })
    //              }
    //          }
    //      })   


            // function getGeolocation () {
            //     navigator.geolocation(successGeo)
            // };
            // function successGeo (position) {
            //     const {latitude, longitude}=position.coords;
            //     const url=`https://www.latlong.net/c/?lat=${latitude}&long=${longitude}`;
            //     };


            // const successGeo = (position) => {
            //     const {latitude, longitude}=position.coords;
                
            //     fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=e448547ae60f4832b757c947f2051155`)
            //     .then((response) => response.json).then(console.log)
            
            // }; 


            // const location=document.getElementById("location");
            // location.addEventListener('click', function() {
            //     navigator.geolocation.getCurrentPosition(function(position) {
            //         latitude.value=position.coords.latitude;
            //         longitude.value=position.coords.longitude;
            //         console.log(position);
            //     });
            //   });

              

            // navigator.geolocation.getCurrentPosition(function(position) {
            //     const lon = position.coords.longitude;
            //     const lat = position.coords.latitude;
            //     const weatherAPI ="https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;
              
            //     $.getJSON(weatherAPI, function(data) {
            //       alert(JSON.stringify(data));
            //     });
            //   })


    //         if (navigator.geolocation) {
    //             navigator.geolocation.getCurrentPosition(position=>{
    //                 const lon = position.coords.longitude;
    //                              const lat = position.coords.latitude;
    //                              getWeather(longitude, latitude);
    //             });
    //                    }
    //         function getWeather(longitude, latitude) {
    //         axios.get("https://api.openweathermap.org/data/2.5/weather", {    
    //             parameters: {
    //                 lat: latitude,
    //                 lon: longitude,
    //                 units: "metric",
    //                 lang: "ru",
    //                 appid: "f6e19684054b463c73221d99d6fdc86b",
    //             }
    //         }).then((response) => {
    //             console.log(response.data);

    //             this.isLoading = false;
    //             this.isLoaded = true;

    //             const data = response.data;

    //             this.lat=data.coord.lat;
    //             this.lon=data.coord.lon;
    //             this.temp = data.main.temp;
    //             this.tempMax = data.main.temp_max;
    //             this.tempMin = data.main.temp_min;
    //             this.windSpeed = data.wind.speed;
    //             this.humidity = data.main.humidity;
    //             this.weatherMain = data.weather[0].main;
    //             this.weatherDescription = data.weather[0].description;

    //             this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
    //         })
    //      }
    //      }}
    //      )