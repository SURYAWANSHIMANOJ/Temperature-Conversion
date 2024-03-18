import React, { useState } from 'react';

function TemperatureInput(props) {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('Celsius');

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
    props.onTemperatureChange(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
    props.onUnitChange(e.target.value);
  };

  return (
    <div>
      <label>
        Temperature:
        <input type="number" value={temperature} onChange={handleTemperatureChange} />
      </label>
      <br />
      <label>
        Unit:
        <select value={unit} onChange={handleUnitChange}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
          <option value="Kelvin">Kelvin</option>
        </select>
      </label>
    </div>
  );
}

export default TemperatureInput;
