import { useState, useEffect } from 'react';

import api from '../../services/api/config';


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



export const Card = () => {
  const [weatherData, setWeatherData] = useState<IWeatherResponse>();

  const params = { q: 'Marabá' };

  useEffect(() => {
    api
      .get('', { params })
      .then(({data}) => setWeatherData(data))
      .catch((err) => console.log(err));
  }, []);


  const getCurrentDate = () =>{
    const date = new Date()

    return date.toLocaleDateString()
  }
  
  const getCurrentTemp = () =>{
    const temp = weatherData?.main.temp

    return Math.round(temp || 0)
  }

  return (
    <div
      className="w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... 
        bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0"
    >
      <div className="h-16 bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-[32px] mb-8">
        <div className="h-full realative flex items-center justify-between p-2">
          <input 
            className="flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px]
            font-light pl-6 h-full" 
            type="text" placeholder="Search by city or coutry" />
          <button className="bg-[#1ab8ed] hover:bg-[#15abdd] w-20 h-12 rounded-full flex justify-center items-center">?</button>
        </div>
      </div>
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
              {getCurrentTemp()}
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
                visibility <span className="ml-2">{weatherData?.visibility && (weatherData?.visibility / 1000)+ 'km'}</span>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="text-[20px]">
                {'icon'}
              </div>
              <div>
                visibility <span className="ml-2">
                  30
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
                visibility <span className="ml-2">10km</span>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="text-[20px]">
                {'icon'}
              </div>
              <div>
                visibility <span className="ml-2">
                  30
                  {'°C'}
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
