/* Conversor de temperatura Celsius para Fahrenheit (°F = 1.8 * °C + 32)
e conversor de temperatura Celsius para Kelvin (K = °C + 273) 
*/

function Kelvin() {
    var valorCelsius = document.getElementById("valor");
    var valor = valorCelsius.value;
    var valorEmCelsiusNumerico = parseFloat(valor);
  
    var valorKelvin = valorEmCelsiusNumerico + 273.15;
    console.log(valorKelvin.toFixed(2));
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = `A temperatura em Kelvin é ${valorKelvin.toFixed(2)}K`;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function Fahrenheint() {
    var valorCelsius = document.getElementById("valor");
    var valor = valorCelsius.value;
    var valorEmCelsiusNumerico = parseInt(valor);
  
    var valorFahrenheint = 1.8 * valorEmCelsiusNumerico + 32;
    console.log(valorFahrenheint.toFixed(2));
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = `A temperatura em Fahrenheint é ${valorFahrenheint.toFixed(2)}°F`;
    elementoValorConvertido.innerHTML = valorConvertido;
  }

  