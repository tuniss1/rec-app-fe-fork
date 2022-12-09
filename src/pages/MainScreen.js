import React from 'react';
import {Link} from 'react-router-dom';


const MainScreen = () => {
    const newLocal = 'passcode-logo.png';
    const logo = 'black_logo.png';
    return (
        <div className="bg-[#000000] h-screen"> 
            <div className="flex justify-between items-center px-4">
                <div className="w-fit p-1 transition-[background] mt-4 bg-white active:bg-[#0082f5]/20 rounded-full" 
                    >
                    <Link to="/"><img src={logo} className='w-[16px] h-[16px] rounded-full '/></Link>
                </div>
                    {/* <p className="font-bold text-white">Stock</p> */}
                    {/* <div
                        className="w-fit px-3 py-2 transition-[background] active:bg-[#0082f5]/20 rounded-lg"
                        onClick={() => {
                        console.log("asd")
                        }}>
                        <Link to="/stocks/add"><p className="text-[#0082f5]">Add</p></Link>
                    </div> */}
                </div>
            <div className="bg-[#000000] h-[140px] py-[40px]">
                <img src={newLocal} className='w-[245px] h-[100px] mx-auto bg-contain' alt='passcode-logo' />
            </div>
            <div className="w-[280px] h-auto flex mx-auto  mt-8 flex-initial flex-shrink-0 flex-wrap align-stretch align-center justify-around">
                <div className="w-[278px]  h-[72px] flex justify-around mt-2">
                    <div className="w-[134px]  h-[72px] border-2 border-[#3E3E3E] bg-[#1C1C1E] rounded-[10px] flex flex-col items-center justify-center ">
                        <p className=" text-[16px] font-bold text-white"> ASSET</p>
                        <Link to="/stock"><p className=" text-[12px] font-sm text-white mt-[-2px]"> STOCK</p></Link>
                    </div>
                    <div className="w-[134px]  h-[72px] border-2 border-[#3E3E3E]  bg-[#1C1C1E] active:bg-[#00D545] rounded-[10px] flex flex-col items-center justify-center">
                        <p className=" text-[16px] font-bold text-white"> ASSET</p>
                        <p className=" text-[12px] font-sm text-white mt-[-2px]"> VEHICLES</p>
                    </div>
                </div>
                <div className="w-[274px]  h-[72px] border-2 border-[#3E3E3E]  mt-2 bg-[#1C1C1E] active:bg-[#00D545] rounded-[10px] flex flex-col items-center justify-center">
                    <p className=" text-[16px] font-bold text-white"> FINANCE</p>
                    <p className=" text-[12px] font-sm text-white mt-[-2px]"> TRADING</p>
                </div>
                <div className="w-[278px]  h-[72px] flex justify-around mt-2">
                    <div className="w-[134px]  h-[72px] border-2 border-[#3E3E3E] bg-[#1C1C1E] rounded-[10px] flex flex-col items-center justify-center">
                        <p className=" text-[16px] font-bold text-white"> HR</p>
                        <p className=" text-[12px] font-sm text-white mt-[-2px]"> EMPOYEES</p>
                    </div>
                    <div className="w-[134px]  h-[72px] border-2 border-[#3E3E3E] bg-[#1C1C1E] rounded-[10px] flex flex-col items-center justify-center">
                        <p className=" text-[16px] font-bold text-white"> HR</p>
                        <p className=" text-[12px] font-sm text-white mt-[-2px]"> LABOR</p>
                    </div>
                </div>
                <div className="w-[274px]  h-[72px] border-2 border-[#3E3E3E]  mt-2 bg-[#1C1C1E] rounded-[10px] flex flex-col items-center justify-center">
                    <p className=" text-[16px] font-bold text-white"> LOG</p>
                </div>
                <div className="w-[278px]  h-[72px] flex justify-around mt-2">
                    <div className="w-[134px]  h-[72px] border-2 border-[#3E3E3E] bg-[#1C1C1E] rounded-[10px] flex flex-col items-center justify-center">
                        <p className=" text-[16px] font-bold text-white"> RATING</p>
                        <p className=" text-[12px] font-sm text-white mt-[-2px]"> PICK-UP</p>
                    </div>
                    <div className="w-[134px]  h-[72px] border-2 border-[#3E3E3E] bg-[#1C1C1E] rounded-[10px] flex flex-col items-center justify-center">
                        <p className=" text-[16px] font-bold text-white"> RATING</p>
                        <p className=" text-[12px] font-sm text-white mt-[-2px]"> SELL</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default MainScreen;