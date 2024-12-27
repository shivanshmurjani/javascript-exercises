const convertToCelsius = function(data) {

let farenheitToCelcius = ((data-32)/9)*5;
return Number(farenheitToCelcius.toFixed(1));  

};

const convertToFahrenheit = function(data) {

  let celsiusToFarenheit =  ((data * 9)/5) + 32;
  return Number(celsiusToFarenheit.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
