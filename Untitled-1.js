

export const HomeScreen = () => {
    return (
    <>
      <div className="w-[280px] h-[100px] mx-auto mt-[92px] mb-8 text-center flex flex-col just">
        <p className="text-[32px] h-[20px] mb-2 font-bold leading"> WE HELP</p>
        <p className="text-[32px] h-[20px] mb-2 font-bold"> THE WORLD TO</p>
        <p className="text-[32px] h-[20px] font-bold"> SURVIVE </p>
      </div>
      <div className="w-[280px] h-auto flex mx-auto  mt-2 flex-initial flex-shrink-0 flex-wrap align-stretch align-center justify-around">
        <div className="w-[278px]  h-[72px] flex justify-around mt-2">
          <div className="w-[134px]  h-[72px] border-2 bg-[#1C1C1E] rounded-[10px] flex flex-col items-center justify-center">
            <p className=" text-[16px] font-bold text-white"> ASSET</p>
            <p className=" text-[12px] font-sm text-white mt-[-2px]"> STOCK</p>
          </div>
          <div className="w-[134px]  h-[72px] border-2 bg-[#1C1C1E] rounded-[10px] flex flex-col items-center justify-center">
            <p className=" text-[16px] font-bold text-white"> ASSET</p>
            <p className=" text-[12px] font-sm text-white mt-[-2px]">
              {" "}
              VEHICLES
            </p>
          </div>
        </div>
        <div className="w-[274px]  h-[72px] border-2  mt-2 bg-[#00D545] rounded-[10px] flex flex-col items-center justify-center">
          <p className=" text-[16px] font-bold text-white"> FINANCE</p>
          <p className=" text-[12px] font-sm text-white mt-[-2px]"> TRADING</p>
        </div>
        <div className="w-[278px]  h-[72px] flex justify-around mt-2">
          <div className="w-[134px]  h-[72px] border-2 bg-[#1C1C1E] rounded-[10px] flex flex-col items-center justify-center">
            <p className=" text-[16px] font-bold text-white"> HR</p>
            <p className=" text-[12px] font-sm text-white mt-[-2px]">
              {" "}
              EMPOYEES
            </p>
          </div>
          <div className="w-[134px]  h-[72px] border-2 bg-[#1C1C1E] rounded-[10px] flex flex-col items-center justify-center">
            <p className=" text-[16px] font-bold text-white"> HR</p>
            <p className=" text-[12px] font-sm text-white mt-[-2px]"> LABOR</p>
          </div>
        </div>
        <div className="w-[274px]  h-[72px] border-2  mt-2 bg-[#1C1C1E] rounded-[10px] flex flex-col items-center justify-center">
          <p className=" text-[16px] font-bold text-white"> LOG</p>
        </div>
        <div className="w-[278px]  h-[72px] flex justify-around mt-2">
          <div className="w-[134px]  h-[72px] border-2 bg-[#1C1C1E] rounded-[10px] flex flex-col items-center justify-center">
            <p className=" text-[16px] font-bold text-white"> RATING</p>
            <p className=" text-[12px] font-sm text-white mt-[-2px]">
              {" "}
              PICK-UP
            </p>
          </div>
          <div className="w-[134px]  h-[72px] border-2 bg-[#1C1C1E] rounded-[10px] flex flex-col items-center justify-center">
            <p className=" text-[16px] font-bold text-white"> RATING</p>
            <p className=" text-[12px] font-sm text-white mt-[-2px]"> SELL</p>
          </div>
        </div>
      </div>
    </>

    // <div className="w-[220px] flex flex-initial flex-shrink-0 flex-wrap align-stretch justify-between">
    //     <div className="w-[220px] h-[100px] bg-blue-400"></div>
    //     <div className="w-[100px] h-[100px] bg-slate-700"></div>
    //     <div className="w-[100px] h-[100px] bg-slate-700"></div>
  // </div>
  );
};
