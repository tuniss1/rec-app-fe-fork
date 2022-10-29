// import logo from './logo.svg';
import rec_logo from './img/rec_logo.png'
import './App.css';

function App() {
  return (
    <div className="bg-[#dd6612] h-screen w-screen flex flex-col items-center ">
      <div className="my-auto flex flex-col items-center ">
        <img src={rec_logo} alt="logo" className=" sm:w-[400px] sm:h-[420px] w-[200px] h-[200px] " />
        <p className="sm:text-3xl font-extrabold sm:mt-[32px] sm:w-[296px] mt-[24px] w-[312px] text-[28px] text-center text-white"> WEBSITE IS UNDER DEVELOPMENT</p>
        <p className="sm:text-sm font-normal sm:mt-[32px] sm:w-[360px] mt-[24px] w-[320px] text-[12px] text-white text-center"> If you have cardboard boxes, aluminum cans or (unused) plastic bottles you want to sell, please contact us +84 8 2525 1567</p>
        {/* <p className="animate-bounce"> Contact us</p> */}
        {/* <button
          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button> */}
      </div>
    </div>
  );
}

export default App;
