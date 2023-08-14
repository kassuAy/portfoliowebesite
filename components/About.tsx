import React from 'react'
import Image from 'next/image'

type Props = {}

function About({}: Props) {
  return (
    
        <div id='about' className='w-full md:screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'></div>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest iext-[#5651e5]'>Aout Me</p>
                <h2 className='py-4'> Who I Am</h2>
                <p className='py-2t-gray-600'>
                    I am graduated from Addis Ababa University in the deparmente of Information system with a hieghst distinction.
                    I have good experience in software developement, nextwork design and configuration, system analysis and design
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>check out some of my projects</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rouned-full'>
                <Image
                 className='rounded-xl' 
                 width={200}
                 height={200}
                src='/mammayae.jpg' alt=''/>
            </div>
            
        </div>

    
  )
}

export default About