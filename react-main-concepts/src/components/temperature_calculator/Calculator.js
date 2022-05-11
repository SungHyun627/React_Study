import React from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) return '';
  const output = convert(input);
  return (Math.round(output * 1000) / 1000).toString();
}

function toCelsius(Fahrenheit) {
  return ((Fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(Celsius) {
  return (Celsius * 9) / 5 + 32;
}

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { scale: 'c', temperature: '' };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius =
      scale === 'c' ? temperature : tryConvert(temperature, toCelsius);
    const fahrenheit =
      scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit);
    return (
      <div>
        <TemperatureInput
          scale="c"
          onTemperatureChange={this.handleCelsiusChange}
          temperature={celsius}
        />
        <TemperatureInput
          scale="f"
          onTemperatureChange={this.handleFahrenheitChange}
          temperature={fahrenheit}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
