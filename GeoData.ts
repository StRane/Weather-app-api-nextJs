//import { IPGeolocationAPI } from "./node_modules/ip-geolocation-api-sdk-typescript/IPGeolocationAPI";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://ipapi.co/json/";


const fetchGeoData = `${BASE_URL}`;

export default fetchGeoData;


/* const ipgeolocationApi = new IPGeolocationAPI(`${API_KEY}`, true);

export default async function WTF() {
  const result = ipgeolocationApi.getApiKey;
  return result;
}
 */