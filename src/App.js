import './App.css';
import { useEffect, useState } from "react";
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';



/* 
1. 앱이 실행되자마자 현재 위치기반의 날씨가 보인다
2. 날씨정보에는 도시, 섭씨, 화씨 날씨 상태 정보
3. 5개의 버튼이 있다. (1개는 현재위치, 4개는 다른 도시)
4. 도시 버튼을 클릭할 때마다 도시별 날씨가 나온다
5. 현재위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다
6. 데이터를 들고 오는 동안 로딩 스피너가 돈다 
 */
function App() {
  const [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);

      
    });
  }

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=929984da8782694dc93368fbb531a259&units=metric`;
    let resonse = await fetch(url)
    let data = await resonse.json();
    setWeather(data);
  
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])


  
  return (
		<div>
			<div className='container'>
				<WeatherBox weather={weather}></WeatherBox>
				<WeatherButton setWeather={setWeather}></WeatherButton>
			</div>
		</div>
	);
}

export default App;
