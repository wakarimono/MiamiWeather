var city_display = document.getElementById('display_city');
var temp_display = document.getElementById('display_temp');
var target = "Miami";

var ourRequest = new XMLHttpRequest();

ourRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q='+target+'&id=524901&APPID=9cb025428b44f583860edd78c6a6b6e1');

ourRequest.onload = function(){

	var ourData = JSON.parse(ourRequest.responseText);
	console.log(ourData.main.temp);
	console.log(ourData.name);
	
	renderHTML(ourData);

};
ourRequest.send();


function renderHTML(ourData){


var city = ourData.name;
var kelvin = ourData.main.temp;
var temp = 1.8*(kelvin - 273.15)+32;
// convert to Celsius
/*var temp = kelvin - 273.15;*/
// Convert to ° F = 9/5(K - 273) + 32
var temp = temp.toFixed(2);
var degrees = " °F";


	city_display.insertAdjacentHTML('beforeend',city);
	temp_display.insertAdjacentHTML('beforeend',temp);
	temp_display.insertAdjacentHTML('beforeend',degrees);




}






