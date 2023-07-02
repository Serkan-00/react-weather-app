import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./TopButtons";
import Inputs from "./Inputs";
import TimeAndLocation from "./TimeAndLocation";
import TemperatureAndDetails from "./TemperatureAndDetails";
import Forecast from "./Forecast"; 
import getFormattedWeatherData from "./weatherService";


function App() {

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "london" }) ;
    console.log(data);
  };
   
  fetchWeather() ;


  
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl 
    shadow-gray-400">
      <TopButtons />
      <Inputs /> 
      
      <TimeAndLocation /> 
      <TemperatureAndDetails />

      <Forecast title="hourly forecast"  />
      <Forecast title="daily forecast"  />
    </div>
  );
};

export default App;


