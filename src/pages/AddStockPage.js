import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const AddStockPage = () => {
  const [stock, setStock] = useState({
    netWeight: undefined,
    pickUp: null,
    type: null,
    value: null,
  });

  const [typeDropdown, setTypeDropdown] = useState(false);
  const [haveDropdown, setHaveDropdown] = useState(false);
  const [alert, setAlert] = useState(false)

  const history = useHistory();

  useEffect(() => {
    setHaveDropdown(typeDropdown);
  }, [typeDropdown]);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false)
    }, 1500)
  }, [alert])


  const priceList = [3400, 3500, 3600, 3700, 3800, 3900, 4000, 4100, 4200];
  const typeList = {
    ALC: "ALC",
    CAB: "CAB",
    CAP: "CAP",
    OFB: "OFB",
    BOP: "BOP",
  };

  return (
    <div
      className="w-full h-screen overflow-y-auto bg-black text-white px-2"
      onClick={(e) => {
        if (e.target.id !== "type-drop-down") {
          setTypeDropdown(false);
        }
      }}
    >
      <div className={`bg-[#f1f5f9] fixed top-0 left-0 w-full h-[80px] flex justify-center items-center rounded-b-xl pt-16 pb-8 z-[1000] transition-transform ${alert ? '' : 'translate-y-[-100%]'}`} id='alert'>
        <p className="text-lg text-red-600">You need to fill all the fields</p>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="w-fit px-3 py-2 transition-[background] active:bg-[#0082f5]/20 rounded-lg" onClick={() => { history.goBack() }}>
          <p className="text-[#0082f5]">Cancel</p>
        </div>
        <p className="font-bold">Add stock</p>
        <div
          className="w-fit px-3 py-2 transition-[background] active:bg-[#0082f5]/20 rounded-lg"
          onClick={() => {
            if (!stock.pickUp || !stock.type || !stock.value) {
              setAlert(true)
            }
            else {
              // Add stock

              // Return
              history.goBack()
            }
          }}>
          <p className="text-[#0082f5]">Done</p>
        </div>
      </div>
      <div className={`mx-3 mt-6 relative z-5 ${haveDropdown ? "z-10" : ""}`}>
        <input
          type="number"
          className="bg-black w-full h-[56px] text-center border-[rgba(255,255,255,0.3)] rounded-xl border-2 placeholder:text-[rgba(255,255,255,0.3)] focus:outline-none"
          placeholder="0"
          onChange={(e) => {
            setStock({ ...stock, netWeight: Number(e.target.value) })
          }}
        />
        <div className="w-[80px] pl-5 py-2 absolute top-0 left-0">
          <p className="text-[rgba(255,255,255,0.3)] text-sm">NET WEIGHT</p>
        </div>
        <div className="w-[80px] pr-5 py-2 absolute top-[10px] right-0">
          <p className="text-[rgba(255,255,255,0.3)] text-sm text-right">KG</p>
        </div>
        <div className="h-[56px] w-full flex items-center mt-4 border-[rgba(255,255,255,0.3)] rounded-xl border-2 bg-[#1c1c1e]">
          <div className="w-full text-center">
            <p className="transition-transform active:scale-[0.9]">
              ADD PICK-UP
            </p>
          </div>
          <div className="h-full border-l-[2px] border-[rgba(255,255,255,0.3)]"></div>
          <div className="w-full text-center relative h-full">
            <p
              className="transition-transform active:scale-[0.9] flex items-center justify-center h-full"
              id="type-drop-down"
              onClick={() => setTypeDropdown(!typeDropdown)}
            >
              {stock.type ? stock.type : 'ADD TYPE'}
            </p>
            <div
              className={`absolute top-[100%] w-[75%] translate-x-[18.75%] pt-[2px] z-0 overflow-y-hidden`}
            >
              <div
                className={` border-[rgba(255,255,255,0.3)] rounded-xl border-2 border-t-0 rounded-t-[0px] transition-[transform,opacity] ${typeDropdown
                  ? "translate-y-0 opacity-1"
                  : "translate-y-[-100%] opacity-0"
                  }`}
              >
                {Object.entries(typeList).map(([key, value]) => {
                  return (
                    <div
                      key={key}
                      className={`bg-[#1c1c1e] last:rounded-b-xl border-t-2 border-[rgba(255,255,255,0.3)] first:border-t-0 py-1.5`}
                    >
                      <p
                        className={`text-sm flex justify-center items-center w-full h-full transition-transform active:scale-90`}
                        onClick={() => {
                          setStock({ ...stock, type: key });
                        }}
                      >
                        {value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-[rgba(255,255,255,0.3)] text-xs">
          ALC: Aluminum can. CAB: Cardboard bottle. CAP: Cardboard paper. OFB:
          Offline paper. BOP: Book paper.
        </p>
      </div>
      <div
        className={`relative grid grid-cols-3 gap-2 px-3 mt-12 ${haveDropdown ? "" : "z-10"
          }`}
      >
        {priceList.map((value, idx) => {
          return (
            <div
              key={idx}
              className="bg-[#636267] border-[#636267] rounded-xl border-2 h-[48px] w-full"
            >
              <p className="text-lg transition-transform active:scale-[0.9] w-full h-full flex items-center justify-center" onClick={() => { setStock({ ...stock, value: value }) }}>
                {new Intl.NumberFormat("vi-VN", {
                  maximumSignificantDigits: 3,
                }).format(value)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddStockPage;
