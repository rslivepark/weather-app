import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherBox = ({weather}) => {
  const tempCelsius = weather?.main.temp.toFixed(1); // 섭씨 온도
	const tempFahrenheit = (weather?.main.temp * 1.8 + 32).toFixed(1); // 화씨온도

  return (
		<div className="weatherBox">
			{/* <div>{weather && weather.name}</div> */}
			<div>{weather?.name}</div>
			<h2>
				{tempCelsius}/ {tempFahrenheit}
			</h2>
			<h2>{weather?.weather[0].description}</h2>
		</div>
	);
}

export default WeatherBox