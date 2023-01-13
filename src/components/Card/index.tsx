export const Card = () => {
  const date = new Date();
  return (
    <div
      className="w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... 
        bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0"
    >
      <p>Olá</p>
      <div className="w-full bg-black/20 min-h-[584px] text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6">
        <div>
          {/* card-top */}
          <div className="flex items-center gap-x-5">
              {/* card-icon */}
              <div className="text-[87px]" > 
                  Icon
              </div>
              <div>
              <div className="text-2x1 font-semibold" > 
                 DataName, dataSysCountry
              </div>
              <div>
                {date.getUTCDate()} / {date.getUTCMonth() + 1 } / {date.getUTCFullYear()}
              </div>
          </div>
        </div>
        </div>
        <div className="my-20">
          <div className="flex justify-center items-center
          ">
            {/* {temp} */}
            <div className="text-[144px] leading-none font-light" >
              {"33"}
            </div>
            <div className="text-4x1" >
              {"°C"}
            </div>
          </div>
        </div>
        <p>Olá</p>
      </div>
    </div>
  );
};
