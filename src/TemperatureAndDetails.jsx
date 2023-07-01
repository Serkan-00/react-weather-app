import React from 'react'
import { 
    UilArrowUp, 
    UilArrowDown, 
    UilTemperature, 
    UilTear,
    UilWind,
    UilSun,
    UilSunset
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
  return  <div>

    <div className="flex items-center justify-center py-6 
    text-xl text-cyan-300">
        <p>Sunny</p>
    </div>

    <div className="flex flex-col items-center justify-between text-white py--5">
      <img src="http://openweathermap.org/img/wn/01d@2x.png"
      alt="Weather Icon"
      className="w-20"
      />

        <p className="text-5xl"> 40°</p>
        <div className="flex flex-col space-y-2"></div>
          
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">32°</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">65%</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind Speed:
            <span className="font-medium ml-1">11km</span>
          </div>

    
        </div>
    </div>

}

export default TemperatureAndDetails;