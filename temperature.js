import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput'; // Import the TemperatureInput component

function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('Celsius');
  const [convertedTemperatures, setConvertedTemperatures] = useState({ Fahrenheit: '', Kelvin: '' });

  const handleTemperatureChange = (temperature) => {
    setTemperature(temperature);
  };

  const handleUnitChange = (unit) => {
    setUnit(unit);
  };

  const convertTemperature = () => {
    if (temperature !== '') {
      let celsius = parseFloat(temperature);
      let fahrenheit, kelvin;
      switch (unit) {
        case 'Celsius':
          fahrenheit = (celsius * 9/5) + 32;
          kelvin = celsius + 273.15;
          break;
        case 'Fahrenheit':
          fahrenheit = parseFloat(temperature);
          celsius = (fahrenheit - 32) * 5/9;
          kelvin = (fahrenheit + 459.67) * 5/9;
          break;
        case 'Kelvin':
          kelvin = parseFloat(temperature);
          celsius = kelvin - 273.15;
          fahrenheit = kelvin * 9/5 - 459.67;
          break;
        default:
          break;
      }
      setConvertedTemperatures({ Fahrenheit: fahrenheit.toFixed(2), Kelvin: kelvin.toFixed(2) });
    }
  };

  return (
    <div>
      <h2>Temperature Conversion Program</h2>
      <TemperatureInput onTemperatureChange={handleTemperatureChange} onUnitChange={handleUnitChange} />
      <br />
      <button onClick={convertTemperature}>Convert</button>
      <br />
      {convertedTemperatures.Fahrenheit && <p>{temperature} degrees {unit} is equal to {convertedTemperatures.Fahrenheit} degrees Fahrenheit and {convertedTemperatures.Kelvin} Kelvin.</p>}
    </div>
  );
}

export default TemperatureConverter;
