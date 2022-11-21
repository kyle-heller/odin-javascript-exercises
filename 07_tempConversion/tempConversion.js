//subtract 32 and multiply by .5556 

const convertToCelsius = function(tempF) {
  temperature = ((tempF - 32) * .5556)
  temperature = Math.round(temperature * 10) / 10
  return temperature
};

//multiply by 1.8 and add 32.
const convertToFahrenheit = function(tempC) {
  temperature = (tempC * 1.8 + 32)
  temperature = Math.round(temperature * 10) / 10
  return temperature
};


module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
