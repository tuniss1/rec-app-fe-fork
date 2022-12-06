import React from 'react'

export const StockScreen = () => {
    return (
        <div>
            <div className=" w-[350px] h-[168px] m-auto border-2 bg-[#1C1C1E] rounded-[12px]">
                <p className="uppercase">aluminum</p>
                <p className="uppercase">can</p>
                <p className=""> 12</p>
            </div>
            <div className="w-[350px] h-[168px] m-auto border-2 bg-[#1C1C1E] rounded-[12px]">
                <div className="w-[174px] border-2 border-r-1 rounded-[12px]">
                    <p className="uppercase">aluminum</p>
                    <p className="uppercase">can</p>
                    <p className=""> 12</p>  </div>
                <div className="w-[174px] border-2 border-l-1 rounded-[12px]"> 
                    <p className="uppercase">aluminum</p>
                    <p className="uppercase">can</p>
                    <p className=""> 12</p> 
                </div>
            </div>
        </div>
    )
}
