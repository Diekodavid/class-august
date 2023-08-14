import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  return (
    <>
      <div className='gate px-4 w-full flex h-31 bg-white m-0 sticky'>
        <div className='w-2/5 justify-center text-center flex'>
          <img className='w-20 h-20 mr-60' src={require("./image/sqi.jpg")} alt="" />
        </div>
        <div className='w-3/5 px-8 flex text-center justify-between'>
          <div className='block  relative okay'>
            <button className='w-20 h-11 space mt-5 px-1 '>About</button>
            <div className='dance hidden text-left absolute shadow-md  h-20 w-60'>
              <div className='w-full h-1 bg-blue-900'></div>
              <div className='w-full px-6 bg-white'>
                <p><a href="">Our Story</a></p>
                <p><a href="">Our Team</a></p>
                <p><a href="">Campus Info</a></p>
              </div>
            </div>
          </div>
          <div className='block  relative okay'>
            <button className='w-28 h-11 space mt-5 '>Programmes</button>
            <div className='dance absolute w-60 hidden shadow-md text-left'>
              <div className='w-full h-1 bg-blue-900'></div>
              <div className='w-full px-6 bg-white'>
                <p><a href="">National Innovation Diploma</a></p>
                <p className='mt-2'><a href="">Professional Diploma Program</a></p>
                <p className='mt-2'><a href="">Executive Professional Certificate Program</a></p>
              </div>
            </div>
          </div>
          <div className='block  relative okay'>
            <button className='w-20 h-11 space mt-5 '>Admission</button>
            <div className='dance w-60 absolute hidden shadow-md text-left'>
              <div className='w-full h-1 bg-blue-900'></div>
              <div className='w-full px-6 bg-white'>
                <p><a href="">Apply for a Programme</a></p>
                <p className='mt-2'><a href="">Mode of Study</a></p>
                <p className='mt-2'><a href="">Tuition</a></p>
                <p className='mt-2'><a href="">Frequently Asked Questions</a></p>
              </div>
            </div>
          </div>
          <div className='block  relative okay'>
            <button className='w-20 h-11 space mt-5 '>E-Portal</button>
            <div className='dance w-40 absolute shadow-md hidden'>
              <div className='w-full  h-1 bg-blue-900'></div>
              <div className='w-full px-6 bg-white'>
                <p><a href="">Student</a></p>
                <p className='mt-2'><a href="">Staff</a></p>
              </div>
            </div>
          </div>
          <div>
            <button className='w-36 h-9 text-center space mt-9 px-1 flex '>SQI Scholarship</button>
          </div>
          <div>
            <button className='w-20 h-11 space mt-5 mr-10'>News</button>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;


{/* <h1 style={david}>Welcome to React Class</h1>
    <h2 style={diana}>This to React.</h2>
    <h2 className='jj'>External Styling</h2>
    <h2 className='text-red-500'>Using Tailwind</h2>
    <div className='sm:flex block justify-center'>
      <div className='w-24 h-24 md:w-15 m-auto sm:m-0 bg-orange-600 hover:bg-blue-800'></div>
      <div className='w-24 h-24 m-auto sm:m-0 mt-2 bg-orange-300'></div>
      <div className='w-24 h-24 m-auto sm:m-0 mt-2 bg-pink-400'></div>
      <div className='w-24 h-24 m-auto sm:m-0 mt-2 bg-blue-800'></div>
    </div> */}