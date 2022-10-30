// import logo from './logo.svg';
import rec_logo from './img/rec_logo.png'
import './App.css';

function App() {
  return (
    <div className="bg-[#ee5d00] h-screen w-screen flex flex-col items-center ">
      <div className="my-auto flex flex-col items-center ">
        <img src={rec_logo} alt="logo" className=" sm:w-[400px] sm:h-[420px] w-[62%] h-auto " />
        <p className="sm:text-3xl font-extrabold sm:mt-[32px] sm:w-[296px] mt-[24px] w-[312px] text-[28px] text-center text-white leading-[30px]"> WEBSITE IS UNDER DEVELOPMENT</p>
        <p className="font-normal sm:mt-[32px] sm:w-[360px] mt-[24px] w-[264px] text-[16px] text-white text-center"> If you have cardboard boxes, aluminum cans or (unused) plastic bottles you want to sell, please contact us +84 825 251 567</p>
      </div>
    </div>
  );
}

export default App;
