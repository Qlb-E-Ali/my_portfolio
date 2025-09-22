import React from 'react'
import dashboard from "../Components/assests/projects/Dashboard.webp"
import landingpage from "../Components/assests/projects/LandingPage.webp"
import solarSystem from "../Components/assests/projects/Solar System.webp"
import ecommerce from "../Components/assests/projects/ecommerce.webp"
import { FaAws, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiHostinger, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { IoArrowRedo } from 'react-icons/io5'


const projects = [
    {
        image: solarSystem,
        title: "3d Solar System Planets To Explore",
        discription: "Explore a 3D solar system model featuring interactive planets with stunning visuals and educational details."
    },
    {
        image: dashboard,
        title: "Enhance Your Skills With Online Learning",
        discription: "Sharpen your skills with expert-led online professional courses designed for growth, career advancement, and success."
    },
    {
        image: ecommerce,
        title: "Shop Smarter Online Fashion, Tech, Lifestyle",
        discription: "Shop smarter online with the latest fashion, cutting-edge tech, and lifestyle essentials all in one place."
    },
    {
        image: landingpage,
        title: "Bright Smiles Start Here  Expert Dental Care",
        discription: "Experience expert dental care focused on bright, healthy smiles with advanced treatments and compassionate service."

    }
]

const ProjectSelection = () => {
    return (
        <div className=' flex flex-wrap gap-4 justify-center items-center bg-[#000319]'>

            <h1 className='text-4xl font-semibold text-center my-12 w-[100%] text-white'>A small selection of <span className='text-[#CBACF9]'>recent projects</span></h1>

            {
                projects.map((item, index) => {

                    return (
                        <div className="h-[60vh] my-3 md:my-0 md:h-[90vh] w-[100%] md:w-[40%] 
     rounded bg-[#0C0E23] flex flex-col justify-center items-center gap-5 
     transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#CBACF9]/40 hover:bg-[#111432]">

                            <div className='w-[90%] h-[55%] bg-gradient-to-tl from-[#0b0d20] via-[#4f4f9b] to-[#111a36] flex items-end justify-center rounded-2xl overflow-hidden'>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-[75%] rounded-2xl rotate-4 transition-transform duration-700 hover:scale-110"
                                />
                            </div>

                            <h1 className='text-2xl text-white font-semibold w-[90%]'>{item.title}</h1>
                            <p className='w-[90%] text-gray-500'>{item.discription}</p>

                            <div className='flex justify-between w-[90%]'>
                                <div className='flex gap-3 text-xl'>
                                    <FaReact className='text-blue-300' />
                                    <SiTailwindcss className='text-blue-400' />
                                    <FaAws className='text-orange-300' />
                                    <FaNodeJs className='text-green-300' />
                                    <SiTypescript className='text-blue-600' />
                                    <SiMongodb className='text-green-600' />
                                </div>

                                <p className='flex items-center gap-2 text-[#CBACF9]'>Check Live site <IoArrowRedo /></p>

                            </div>

                        </div>
                    )

                })
            }

        </div>
    )
}

export default ProjectSelection
