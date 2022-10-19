export interface Geo {
  asn: string;
  city: string;
  continent_code: string;
  country: string;
  country_area: number;
  country_calling_code: string;
  country_capital: string;
  country_code: string;
  country_code_iso3: string;
  country_name: string;
  country_population: number;
  country_tld: string;
  currency: string;
  currency_name: string;
  in_eu: boolean;
  ip: string;
  languages: string;
  latitude: number;
  longitude: number;
  network: string;
  org: string;
  postal: string;
  region: string;
  region_code: string;
  timezone: string;
  utc_offset: string;
  version: string;
}

export interface CurrentWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface Day {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: {
    day: number;
    eve: number;
    morn: number;
    night: number;
  };
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    eve: number;
    max: number;
    min: number;
    morn: number;
    night: number;
  };
  uvi: number;
  weather: {
    0: CurrentWeather;
  };
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface Hour {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pop: number;
  pressure: number;
  temp: number;
  uvi: number;
  weather: {
    0: CurrentWeather;
  };
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface Weather {
  current: {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: { 0: CurrentWeather };
    wind_deg: number;
    wind_gust: number;
    wind_speed: number;
    daily: Day[];
    hourly: Hour[];
    lat: number;
    lon: number;
    minutely: [];
    timezone: string;
    timezone_offset: number;
  };
}
