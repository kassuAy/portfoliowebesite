import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectItems from './ProjectItems';
import labconnect from '../public/labconnect.png'
import spts from '../public/spts.jpg'
import laboratorysystem from '../public/laboratory.png'
import atronsImage from '../public/atrons.png'
type Props = {};

function Projects({}: Props) {
  return (
    <div id='project' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 "> Projects what I have built </h2>
        <div className="grid md:grid-cols-2 gap-8">
         
          <ProjectItems
          title='Student Project tracking System'
          language='Next Js'
          backgroundImg={spts}
          projectUrl='/Project_property'
          />
          <ProjectItems
          title='Diagnostic Lab Report Mangement System'
          language='php'
          backgroundImg={laboratorysystem}
          projectUrl='/laboratoryDetail'
          />
          <ProjectItems
          title='Atrons'
          backgroundImg={atronsImage}
          language='React Js'
          projectUrl='/AtronsDetail'
          />
          <ProjectItems
          title='library management system'
          language='Java'
          backgroundImg={labconnect}
          projectUrl='/stackingsystem'
          />

        </div>
        <div className='col-span-3'>
          <h2 className='uppercase text-xl tracking-widest bg-blue-900' ><a href=''>Hire Me</a></h2>

        </div>
      </div>
    </div>
  );
}

export default Projects;
