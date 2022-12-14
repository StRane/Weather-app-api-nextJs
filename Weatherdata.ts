const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/3.0/onecall?lat=";

const fetchWeatherData = (latitude:string, longitude:string) =>
  `${BASE_URL}${latitude}&lon=${longitude}&appid=${API_KEY}`;

export default fetchWeatherData;
