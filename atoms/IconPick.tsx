import { WiCloudyWindy, WiCloudy,WiDaySunny,WiRain } from "react-icons/wi";

function IconPick(props:{iconName:string;}) {
  switch (props.iconName) {
    case "windy":
      return <WiCloudyWindy style={{height:"2rem", width:"2rem", alignSelf:"center"}}/>;
    case "cloudy":
      return <WiCloudy className="h-5 w-5"/>;
    case "sunny":
      return <WiDaySunny className="h-5 w-5"/>;
    case "rainy":
      return <WiRain className="h-5 w-5"/>;
  }
  return<></>;
}

export default IconPick;
