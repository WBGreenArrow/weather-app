interface ICardHeader {
    location: string;
    handleSubmit: () => void;
    changeLocationValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CardHeader = ({ location ,handleSubmit, changeLocationValue}: ICardHeader) =>{
    return (
        <div className="h-16 bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-[32px] mb-8">
            <div className="h-full realative flex items-center justify-between p-2">
                <input 
                    className="flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px]
                    font-light pl-6 h-full" 
                    type="text" 
                    value={location}
                    placeholder="Search by city or coutry"
                    onChange={(event) => changeLocationValue(event)}
                    />
                <button 
                className="bg-[#1ab8ed] hover:bg-[#15abdd] w-20 h-12 rounded-full flex justify-center items-center"
                onClick={handleSubmit}>
                    ?
                </button>
            </div>
      </div>
    )
}