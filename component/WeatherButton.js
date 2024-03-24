import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import App from '../App';


const WeatherButton = ({ cities, setCity, setSelectedCity, selectedCity }) => {
	return (
		<div>
			<Button
				variant="light"
				style={{
					backgroundColor: selectedCity === '' ? 'white' : 'transparent',
					color: selectedCity === '' ? 'black' : 'white',
				}}
				onClick={() => {
					setCity('');
					setSelectedCity('');
				}}
			>
				현재위치
			</Button>
			{cities.map((item, index) => (
				<Button
					variant="light"
					key={index}
					style={{
						backgroundColor: selectedCity === item ? 'white' : 'transparent',
						color: selectedCity === item ? 'black' : 'white',
					}}
					onClick={() => {
						setCity(item);
						setSelectedCity(item);
					}}
				>
					{item}
				</Button>
			))}
		</div>
	);
};


export default WeatherButton