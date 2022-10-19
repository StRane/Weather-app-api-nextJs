import Head from "next/head";
import fetchWeatherData from "../Weatherdata";


import { Geo, Weather } from "../typings";
import { useEffect, useState } from "react";
import fetchGeoData from "../GeoData";
import RecipeReviewCard from "../components/WeatherCard";


interface Props {
  usedMap: Geo;
  weather: Weather;
}

//{ usedMap, weather }: Props

const Home = () => {
   const [hasMounted, setHasMounted] = useState(false);


  useEffect(() => {
    setHasMounted(true);
  }, [])


  if(!hasMounted){
    return null;
  }

/*   console.log(usedMap);
  console.log(weather); */
 

  /* 
  var sunriseTimeunix = new Date(usedWeather.current.sunrise * 1000);
  const sunriseTime: string | null =
    sunriseTimeunix.toLocaleTimeString("default");
  var sunsetTimeunix = new Date(usedWeather.current.sunset * 1000);
  const sunsetTime: string | null =
    sunsetTimeunix.toLocaleTimeString("default");
  const temperature = Math.floor(usedWeather.current.temp / 10); */
  //console.log(usedMap);
  //console.log(weather);
  

  return (
    <div className="min-h-screen">
      <Head>
        <title>Practicing apis for dynamic programs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-[150vh]">
        <div>
          <RecipeReviewCard />
          {/* <h3>Sunrise at {sunriseTime}</h3>
          <h3>Sunset at {sunsetTime}</h3>
          <h2>Current temp is {temperature}C</h2>
          <h2>Current humidity {usedWeather.current.humidity}%</h2>
          <h2>
            Current weather is {usedWeather.current.weather[0].description}
          </h2> */}
        </div>
      </main>
    </div>
  );
};

/* export const getServerSideProps = async () => {
  const mapData = await Promise.resolve(
    fetch(fetchGeoData).then((res) => res.json())
  );
 
  //const mapData = await Promise.resolve(WTF);


  let latitude = await mapData.latitude;
  let longitude = await mapData.longitude;
  const weatherData = await Promise.resolve(
    fetch(fetchWeatherData(latitude, longitude)).then((res) => res.json())
  );
  return {
    props: {
      usedMap: mapData,
      weather: weatherData,
    },
  };
}; */

export default Home;
