import React from "react";
import notes from '../data/data';

let [...arr] = notes;

console.log(arr);

const List = () => {
    return (
        <div class="flex flex-col p-8 w-screen">
            <h2 class="mb-4 text-2xl font-bold">Thông tin</h2>
            <div class="flex row flex-wrap items-center md:items-start">
                {arr.map(i => {
                    return (
                        // <div className="rounded-xl bg-white p-2 shadow-lg font-semibold w-20">  </div>
                        <button class="  w-[120px]  py-2 px-4 bg-transparent mr-2 mt-2 text-cyan-600 font-semibold border border-cyan-600 rounded hover:bg-cyan-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 ">Tháng {i.id}</button>
                    )
                })}
            </div>

        </div>

    )
};

export default List;
