import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import App from '../App';


const WeatherButton = ({setWeather}) => {

  const getWeatherByCityName = async (city) => {
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=929984da8782694dc93368fbb531a259&units=metric`;
		let resonse = await fetch(url);
		let data = await resonse.json();
		setWeather(data);
  };
  
  
  const getCurrentLocation = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			let lat = position.coords.latitude;
			let lon = position.coords.longitude;
			getWeatherByCurrentLocation(lat, lon);
		});
	};

	const getWeatherByCurrentLocation = async (lat, lon) => {
		let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=929984da8782694dc93368fbb531a259&units=metric`;
		let resonse = await fetch(url);
		let data = await resonse.json();
		setWeather(data);
	};

  return (
		<div>
			<Button variant="light" onClick={getCurrentLocation}>
				현재위치
			</Button>
			<Button variant="light" onClick={() => getWeatherByCityName('Seoul')}>
				서울
			</Button>
			<Button variant="light" onClick={() => getWeatherByCityName('Tokyo')}>
				도쿄
			</Button>
			<Button variant="light" onClick={() => getWeatherByCityName('London')}>
				런던
			</Button>
			<Button variant="light" onClick={() => getWeatherByCityName('Chicago')}>
				시카고
			</Button>
		</div>
	);
}

export default WeatherButton