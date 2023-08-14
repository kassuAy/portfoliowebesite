import Image from 'next/image';
import Link from 'next/link';
import React,{useEffect, useState} from 'react';
import { FaLinkedin,FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Router, { useRouter } from 'next/router';
const Navbars = () => {
    const [nav,setNav]=useState(false)
    const [shadow,setShadow]=useState(false)
    const [navBg, setNavBg]=useState('#ecf0f3')
    const [linkColor, setLinkColor]= useState('#1f2937')
    const router=useRouter()
    useEffect(()=>{
      if(
        router.asPath =='/Project_property' ||
        router.asPath =='/laboratoryDetail' ||
        Router.asPath =='/AtronsDetail' ||
        router.asPath =='/stackingsystem'
      )
    {
      setNavBg('transparent')
      setLinkColor('#ecfof3')

    }else{
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
    }
  },[router])

    const handleNav =()=>{
        setNav(!nav)
    };
    useEffect (()=>{
      const handleShadow =()=>{
        if(window.scrollY >=90){
          setShadow(true)
        }else {
          setShadow(false)
        }
      }
      window.addEventListener('scroll', handleShadow);
    },[]);
  return (
    <div 
    style={{backgroundColor:'${navBg}'}}
    className={shadow ?'fixed w-full h-20 shadow-xl z-[100]':'fixed w-full h-20 z-[100]'}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        
        <Image 
        src="/my_logo.PNG" 
        alt="/" 
        width={80} 
        height={50} />
        <div>
          <ul style={{color:'${linkColor}'}} className="hidden md:flex">
            <Link href="#home">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="#skill">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="#project">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contacts
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav?'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':''}
      >
        
        <div className={nav?
        "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#fecf0f3] p-10 ease-in duration-500":
        "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
          <div>
            <div className="flex w-full items justify-between">
              <Link href='/'>
              <Image 
              src="/my_logo.Png" 
              width={87} 
              height={35} 
              alt="" />
              </Link>
              <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[850] py-4">Lets build something together</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link  href="#home">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Home</li>
              </Link>
              <Link href="#about">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">About</li>
              </Link>
              <Link href="#skill">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="#project">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="#contact">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className='pt-40'>
                <p className='uppercase tracking-widest text-[#5651e5]'>let us connect thrugh this web app</p>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbars;
