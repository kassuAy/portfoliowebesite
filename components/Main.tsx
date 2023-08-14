import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

type Props = {}

function Main({}: Props) {
  return (
    <div id='home' className='w-full h-screen text-center '>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let us Build something together</p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I am <span className='text-[#5651e5]'>Kasanesh</span>
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I am fulstack developer specilizing in building in and designning , exceptional 
                        network design and configuration experience. currently, I am focused on building responsive ui ux design  while learning back-end technologies 
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedin/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <BsFillPersonLinesFill/>
                        </div>
                    </div>
            </div>


        </div>
    </div>
  )
}

export default Main