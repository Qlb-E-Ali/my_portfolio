import React from 'react'
import laptop from "../Components/assests/Portfolio/laptop.jpg"
import worldMap from "../Components/assests/Portfolio/wroldMap.jpg"
import coding from "../Components/assests/Portfolio/coding.jpg"

const languages = ["HTML5", "CSS3", "Tailwind CSS", "Bootstap5", "Javascript", "Typescript", "ReactJS", "NextJS", "NodeJS", "Express", "MongoDB", "GraphQL"]

const Portfolio = () => {
  return (
    <div className='bg-[]'>

      <div className='h-[85vh] w-full bg-[#000319] flex justify-center items-center gap-4'>

        <div className='bg-gren-400 h-[83%] w-[45%] flex items-end justify-end rounded-3xl border border-[#141b4e]' style={{ background: `url(${laptop})`, backgroundSize: "100% 100%" }}>

          <h1 className='text-3xl font-semibold text-white w-[65%] p-4'>I Prioritize client collaboration, fostring open communication</h1>
        </div>
        <div className='h-[85%] w-[35%] flex flex-col gap-5 '>
          <div className='w-[100%] h-[49%] rounded-3xl border border-[#141b4e]' style={{ background: `url(${worldMap})`, backgroundSize: "cover" }}>
            <h1 className='text-2xl font-semibold text-white w-[60%] p-4'>I'm very flexible with zone communication</h1>
            <div className='w-full bg-reen-400 h-auto flex justify-around items-center' >

              <button className='bg-[#0e195da2] text-white text-[10px] px-3 py-1 rounded border border-[#25134f] '>USA</button>
              <button className='bg-[#0e195da2] text-white text-[10px] px-3 py-1 rounded border border-[#25134f] mt-12'>Germany</button>
              <button className='bg-[#0e195da2] text-white text-[10px] px-3 py-1 rounded border border-[#25134f] mt-[-20px]'>Russia</button>

            </div>
          </div>
          <div className='w-[100%] h-[49%] bg-[#04071D] rounded-3xl flex text-white overflow-hidden  border border-[#141b4e]' >
            <div className='h-full w-[40%] flex flex-col items-end justify-center gap-2'>
              <p className='text-[12px]'>I consistently try to improve</p>
              <h2 className='text-2xl'> My tech work</h2>
            </div>
            <div className='h-full w-[60%] bg-[#04071D] flex flex-wrap justify-center gap-2 overflow-hidden p-2'>
              {
                languages.map((item, index) => {
                  return (
                    <div className='bg-[#10132E] w-[45%] h-[30%] flex justify-center items-center rounded'>
                      <p className='text-white text-[14px]'>{item}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

      </div>
      <div className='h-[60vh] w-full bg-[#000319] flex justify-center items-center gap-4'>


        <div className='h-[85%] w-[25%] flex flex-col gap-5 '>
          <div className='w-[100%] h-[49%] rounded-3xl border border-[#141b4e]' style={{ background: `url(${worldMap})`, backgroundSize: "cover" }}>
            <h1 className='text-2xl font-semibold text-white w-[60%] p-4'>I'm very flexible with zone communication</h1>
            <div className='w-full bg-reen-400 h-auto flex justify-around items-center' >

              <button className='bg-[#0e195da2] text-white text-[10px] px-3 py-1 rounded border border-[#25134f] '>USA</button>
              <button className='bg-[#0e195da2] text-white text-[10px] px-3 py-1 rounded border border-[#25134f] mt-12'>Germany</button>
              <button className='bg-[#0e195da2] text-white text-[10px] px-3 py-1 rounded border border-[#25134f] mt-[-20px]'>Russia</button>

            </div>
          </div>
          <div className='w-[100%] h-[49%] bg-[#04071D] rounded-3xl flex text-white overflow-hidden  border border-[#141b4e]' >
            <div className='h-full w-[40%] flex flex-col items-end justify-center gap-2'>
              <p className='text-[12px]'>I consistently try to improve</p>
              <h2 className='text-2xl'> My tech work</h2>
            </div>
            <div className='h-full w-[60%] bg-[#04071D] flex flex-wrap justify-center gap-2 overflow-hidden p-2'>
              {
                languages.map((item, index) => {
                  return (
                    <div className='bg-[#10132E] w-[45%] h-[30%] flex justify-center items-center rounded'>
                      <p className='text-white text-[14px]'>{item}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className='bg-gren-400 h-[83%] w-[50%] flex items-center justify-end rounded-3xl border border-[#141b4e]'>

          <div className='w-[50%] h-full'>
            <p className='text-gray-500 font-semibold'>THE INSIDE SCOOP</p>

            <h1 className='text-2xl font-semibold text-white  bg-green-400'>Currently Building a JS Animation Library</h1>

          </div>
          <div className='h-full w-[50%] bg-red-400'>
            <img src={coding} alt="" className='w-full h-full' />
          </div>

        </div>

      </div>

    </div>
  )
}

export default Portfolio