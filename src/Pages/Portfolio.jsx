import React from 'react'
import laptop from "../Components/assests/Portfolio/laptop.jpg"
import worldMap from "../Components/assests/Portfolio/wroldMap.jpg"
import coding from "../Components/assests/Portfolio/coding.jpg"
import mockup from "../Components/assests/Portfolio/MockUp_mobile.png"
import { IoCopyOutline } from 'react-icons/io5'

const languages = ["HTML5", "CSS3", "Tailwind CSS", "Bootstap5", "Javascript", "Typescript", "ReactJS", "NextJS", "NodeJS", "Express", "MongoDB", "GraphQL"]

const Portfolio = () => {
  return (
    <div className='bg-[#000319]'>

      {/* FIRST SECTION */}
      <div className='h-[85vh] w-full bg-[#000319] flex flex-col md:flex-row justify-center items-center gap-4 p-4'>

        {/* Laptop Card */}
        <div className='h-[50%] md:h-[83%] w-full md:w-[45%] flex items-end justify-end rounded-3xl border border-[#141b4e]
          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#CBACF9]/30 cursor-pointer'
          style={{ background: `url(${laptop})`, backgroundSize: "100% 100%" }}>
          <h1 className='text-lg md:text-3xl font-semibold text-white w-[90%] md:w-[65%] p-4 text-center md:text-left'>
            I Prioritize client collaboration, fostering open communication
          </h1>
        </div>

        {/* Right Side */}
        <div className='h-[50%] md:h-[85%] w-full md:w-[35%] flex flex-col gap-5'>
          {/* World Map */}
          <div className='w-full h-[220px] md:h-[49%] rounded-3xl border border-[#141b4e]
            transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#CBACF9]/30 cursor-pointer'
            style={{ background: `url(${worldMap})`, backgroundSize: "cover" }}>
            <h1 className='text-lg md:text-2xl font-semibold text-white w-[80%] md:w-[60%] p-4'>
              I'm very flexible with zone communication
            </h1>
            <div className='w-full flex justify-around items-center'>
              <button className='bg-[#0e195da2] text-white text-[10px] px-3 py-1 rounded border border-[#25134f]'>USA</button>
              <button className='bg-[#0e195da2] text-white text-[10px] px-3 py-1 rounded border border-[#25134f]'>Germany</button>
              <button className='bg-[#0e195da2] text-white text-[10px] px-3 py-1 rounded border border-[#25134f]'>Russia</button>
            </div>
          </div>

          {/* Skills */}
          <div className='w-full h-[250px] md:h-[49%] bg-[#04071D] rounded-3xl flex text-white overflow-hidden border border-[#141b4e]
            transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#CBACF9]/30 cursor-pointer'>
            <div className='h-full w-[40%] flex flex-col items-end justify-center gap-2 p-2'>
              <p className='text-[12px] ms-4 md:ms-0'>I consistently try to improve</p>
              <h2 className='text-lg md:text-2xl'>My tech work</h2>
            </div>
            <div className='h-full w-[60%] bg-[#04071D] flex flex-wrap justify-center gap-2 overflow-y-scroll skill p-2'>
              {
                languages.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#10132E] w-[45%] h-[30%] flex justify-center items-center rounded 
             transition-all duration-300 hover:bg-[#1e2145] hover:scale-105 hover:shadow-md hover:shadow-[#CBACF9]/30 cursor-pointer"
                  >
                    <p className="text-white text-[12px] md:text-[14px] font-medium">{item}</p>
                  </div>

                ))
              }
            </div>
          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className='h-auto md:h-[60vh] w-full bg-[#000319] flex flex-col md:flex-row justify-center items-center gap-4 p-4'>

        {/* Left Column */}
        <div className='h-auto md:h-[100%] w-full md:w-[28%] flex flex-col gap-5'>
          <div className='w-full h-[220px] md:h-[49%] rounded-3xl border bg-[#0C0F2A] border-[#141b4e] overflow-hidden
            transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#CBACF9]/30 cursor-pointer'>
            <h1 className='text-lg md:text-xl font-semibold text-white p-4'>
              Tech enthusiast with a passion for development.
            </h1>
            <img src={mockup} alt="" className='w-75 md:w-50 m-auto md:ms-auto me-8 md:me-4 transition-transform duration-300 hover:scale-105' />
          </div>

          <div className='w-full h-[220px] md:h-[49%] bg-gradient-to-tr from-[#284082] via-[#0C0F2A] to-[#0C0F2A] rounded-3xl flex flex-col justify-center items-center text-white border border-[#141b4e] gap-2 p-4
            transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#CBACF9]/30 cursor-pointer'>
            <h1 className='text-lg md:text-xl text-center md:w-[70%]'>
              Do you want to start a project together?
            </h1>
            <button className='bg-[#13172E] px-4 md:px-5 py-2 rounded flex items-center gap-2 text-sm md:text-base'>
              <IoCopyOutline /> Copy My Email Address
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className='h-[250px] md:h-[100%] w-full md:w-[52%] flex flex-col md:flex-row items-center justify-between rounded-3xl border border-[#141b4e] overflow-hidden bg-[#0C0F2A]
          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#CBACF9]/30 cursor-pointer'>
          <div className='w-full md:w-[50%] h-full flex flex-col justify-center items-center gap-2 p-4'>
            <p className='text-gray-500 w-full md:w-[75%] font-semibold text-center md:text-left'>THE INSIDE SCOOP</p>
            <h1 className='text-lg md:text-2xl w-full md:w-[75%] font-semibold text-white text-center md:text-left'>
              Currently Building a JS Animation Library
            </h1>
          </div>
          <div className='w-full md:w-[50%] h-[200px] md:h-full overflow-hidden'>
            <img src={coding} alt="" className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
