const convertToCelsius = function (temperatureFahrenheit) {
  let temperature = temperatureFahrenheit;
  let temperatureCelsius = parseFloat(
    (((temperature - 32) * 5) / 9).toFixed(1)
  );
  return temperatureCelsius;
};

const convertToFahrenheit = function (temperatureCelsius) {
  let temperature = temperatureCelsius;
  let temperatureFahrenheit = parseFloat((temperature * 1.8 + 32).toFixed(1));
  return temperatureFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
