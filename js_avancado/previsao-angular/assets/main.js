
const apikey = "105b657fca9749045614e835e80e17e3";
const lang = "pt_br";
const units = "metric";
const app = angular.module('weatherApp', [])

app.controller('WeatherController', function($scope, $http) {
    $scope.cityName = "";
    $scope.city = "";
    $scope.cardActive = false
    $scope.temperature = "";
    $scope.feelsLike = "";
    $scope.minTemperature = "";
    $scope.maxTemperature = "";
    $scope.humidity = ""; 
    $scope.windVelocity = "";
    $scope.windOrientation = "";
    $scope.iconUrl = "";

$scope.callApi = async () => {
    const city = $scope.city || localStorage.getItem('city') || 'São Paulo';

    const response = await $http.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}&lang=${lang}`
    );

    const data = response.data;

    const icon = data.weather[0].icon;
    $scope.iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    $scope.temperature = data.main.temp;
    $scope.feelsLike = data.main.feels_like;
    $scope.minTemperature = data.main.temp_min;
    $scope.maxTemperature = data.main.temp_max;
    $scope.humidity = data.main.humidity;
    $scope.windVelocity = data.wind.speed;
    $scope.windOrientation = data.wind.deg;
    $scope.cardActive = true;
    $scope.cityName = data.name;
    localStorage.setItem("city", data.name);
    $scope.$apply();
};

     $scope.callApi();
})