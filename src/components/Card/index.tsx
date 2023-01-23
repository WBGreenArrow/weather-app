import { useState, useEffect } from 'react';

import api from '../../services/api/config';
import { CardHeader } from '../CardHeader';


type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
}

type MainProps = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

type SysProps = {
  type: number;
  id: number
  country: string;
  sunrise: number;
  sunset: number;
}

interface IWeatherResponse {
    coord: {
        lon: number
        lat: number
    };
    weather: Array<Weather>;
    base: string;
    main: MainProps;
    visibility: number;
    wind: {
        speed: number
        deg: number
    };
    clouds: {
        all: number
    };
    dt: number;
    sys: SysProps;
    timezone: number;
    id: number;
    name:string;
    cod: number;
}

const currentLocation = 'Marabá'

export const Card = () => {
  const [weatherData, setWeatherData] = useState<IWeatherResponse>()
  const [location, setLocation] = useState<string>('Marabá')
 

  useEffect(() => {
    getLocation(currentLocation)
  }, [])

  const getLocation = async (location: string) =>{
    const params = { q: location }

    try{
      const response = await api.get('', { params })

      setWeatherData(response.data)
      setLocation('')

    }catch(err){
      console.log(err)
    }
  }


  const getCurrentDate = () =>{
    const date = new Date()

    return date.toLocaleDateString()
  }
  
  const convertTemp = (value: any) =>{
    const temp = value 

    return Math.round(temp || 0)
  }


  const changeLocationValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLocation(event.target.value)
  }

  const handleSubmit =(): void =>{
    if(location !== ''){
      getLocation(location)
    }
  }

  return (
    <div
      className="w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... 
        bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0"
    >
     <CardHeader 
      location={location}
      handleSubmit={handleSubmit}
      changeLocationValue={changeLocationValue}
     />
      <div className="w-full bg-black/20 min-h-[584px] max-w-[450px]  text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6">
        <div>
          {/* card-top */}
          <div className="flex items-center gap-x-5">
              {/* card-icon */}
              <div className="text-[87px]" > 
                  Icon
              </div>
              <div>
              <div className="text-2x1 font-semibold" > 
                {`${weatherData?.name}, ${weatherData?.sys.country}`}
              </div>
              <div>
                {getCurrentDate()}
              </div>
          </div>
        </div>
        </div>
        <div className="my-20">
          <div className="flex justify-center items-center">
            {/* {temp} */}
            <div className="text-[144px] leading-none font-light" >
              {convertTemp(weatherData?.main.temp)}
            </div>
            <div className="text-4x1" >
              {'°C'}
            </div>
          </div>
          <div className="capitalize  text-center">
          {weatherData?.weather[0].description}
          </div>
        </div>
        <div className="max-w-[378px] mx-auto flex flex-col gap-y-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-2">
              <div className="text-[20px]">
                {'icon'}
              </div>
              <div>
                Visibilidade <span className="ml-2">{weatherData?.visibility && (weatherData?.visibility / 1000)+ 'km'}</span>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="text-[20px]">
                {'icon'}
              </div>
              <div>
               Sensação T. <span className="ml-2">
                {convertTemp(weatherData?.main.feels_like)}
                  {'°C'}
                  </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-x-2">
              <div className="text-[20px]">
                {'icon'}
              </div>
              <div>
                Humidade <span className="ml-2">
                {weatherData?.main?.humidity && weatherData?.main?.humidity + '%'}
                  </span>
              </div> 
            </div>
            <div className="flex items-center gap-x-2">
              <div className="text-[20px]">
                {'icon'}
              </div>
              <div>
                Vento <span className="ml-2">
                  {weatherData?.wind.speed} m/s
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
