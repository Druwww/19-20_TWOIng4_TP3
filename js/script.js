
// Fonction appelée lors du click du bouton
function start() {

  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(document.getElementById("city-input").value);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      //console.log(response.data);

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });


    apiWeather
    .fetchDaysForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      console.log(response.data);

      main = [];
      description = [];
      temp = [];
      icon =[];


      for(let i = 1; i < 4; i++){
        main.push(data.list[i].weather[0].main);
        description.push(data.list[i].weather[0].description);
        temp.push(data.list[i].temp.day);
        icon.push(apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon));
      }
      
      // document.getElementById('today-forecast-main').innerHTML = main;
      // document.getElementById('today-forecast-more-info').innerHTML = description;
      // document.getElementById('icon-weather-container').innerHTML = icon;
      // document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;


      forMain = document.getElementsByClassName('mainHTML');
      forDescription = document.getElementsByClassName('descriptionHTML');
      forIcon = document.getElementsByClassName('iconHTML');
      forTemp = document.getElementsByClassName('tempHTML');

      for(let i = 0; i < 3; i++){
        forMain[i].innerHTML = main[i];
        forDescription[i].innerHTML = description[i];
        forIcon[i].innerHTML = icon[i];
        myTemp = temp[i];
        forTemp[i].innerHTML = `${myTemp}°C`;
      }


      //console.log(main);

    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
