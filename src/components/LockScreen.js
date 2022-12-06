// import React from 'react'

// const LockScreen = ({ passcode, setPasscode, setIsAuthenticated }) => {
//   const PASSCODE_LENGTH = [1, 2, 3, 4];
//   const newLocal = 'passcode-logo.png';
//   return (
//     <div className='w-full h-screen bg-black pt-12 overflow-y-auto'>
//       <div className=''>
//         <img src='2.png' className='h-21 w-20 mx-auto' alt='logo' />
//       </div>
//       <div className='mt-5'>
//         <img src={newLocal} className='w-[245px] h-[88px] mx-auto bg-contain' alt='passcode-logo' />
//       </div>
//       <div className='mt-4 w-fit mx-auto flex' style={{
//       }} id='bounce'>
//         {PASSCODE_LENGTH.map((value, idx) => {
//           return <div key={idx} className={`w-[10px] h-[10px] rounded-full ml-3 first:ml-0 border-[rgba(255,255,255,0.3)] border-2 ${passcode.length >= value ? 'bg-white border-white' : ''}`} style={{
//             transition: 'background 0.15s, border 0.15s',

//           }}>
//           </div>
//         })}
//       </div>
//       <div className='px-[64px] w-full grid grid-cols-3 gap-y-5 gap-x-6 mt-6 justify-center'>
//         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((value) => {
//           return <div className={`w-[78px] h-[78px] flex items-center justify-center justify-self-center relative border-[rgba(255,255,255,0.3)] rounded-full border-2 bg-black transition-[background,border] active:bg-white active:border-white ${value === 0 ? ' col-start-2' : ''}`} key={value} onClick={() => {
//             setPasscode(passcode + value)
//           }}>
//             <p className='text-white align-middle text-center text-2xl leading-none'>{value}</p>
//             {/* <div className='absolute w-full h-full' ></div> */}
//           </div>
//         })}
//       </div>
//       <div className='w-fit mx-auto px-3 py-2 mt-4 transition-[background] active:bg-[#0082f5]/20 rounded-lg' onClick={() => { setIsAuthenticated('GUEST') }}>
//         <p className='text-[#0082f5]'>I&#39;m a guest</p>
//       </div>
//     </div>
//   )
// }

// export default LockScreen