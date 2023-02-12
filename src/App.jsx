import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MdOutlineMyLocation } from 'react-icons/md';
import {BsBootstrap, BsGithub,BsLinkedin} from 'react-icons/bs';
import {SiGmail,SiTypescript,SiJavascript,SiCss3,SiPython,SiExpress,SiSqlite,SiMongodb,SiContentful,SiAntdesign,SiOpenai, SiTailwindcss} from 'react-icons/si';
import {GrReactjs,GrGraphQl, GrGoogle} from 'react-icons/gr';
import {TbBrandTailwind} from 'react-icons/tb';
import {FaNode,FaBootstrap} from 'react-icons/fa';
import {TfiHtml5} from 'react-icons/tfi';
import {AiFillFileText} from 'react-icons/ai';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[url(https://i.imgur.com/fHdmMyl.jpg)] w-full min-h-screen overflow-hidden overflow-y-hidden'>
        <nav className='text-[#FFFFFF] font-sans mb-[160px]'>
          <div className='flex justify-between'>
            <div className='text-[35px] flex m-5 bg-[#DD3B58] rounded-full ml-5 pb-2.5 pl-8 pr-8 bg-opacity-50 border-4 border-[#DD3B58]'>
              <img src='https://media.discordapp.net/attachments/990816866618470440/1074205369682907166/301803637_506902801440735_987699678916294777_n-removebg-preview.png' className='w-10 h-10 mt-[12px]'/>
            <h1 className='mt-1 ml-1.5'>Prasanth Gondi</h1>
            </div>
            <ul className='flex justify-around m-5 mt-8 text-[25px] font-medium'>
              <li className='mr-10 underline decoration-[#DD3B58] underline-offset-8 decoration-4'>
                <a>Skills</a>
              </li>
              <li className='mr-5 underline decoration-[#DD3B58] underline-offset-8 decoration-4'>
                <a>Projects</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='w-full mb-[280px]'>
          <h1 className='text-white text-[40px] text-center font-medium'>Full-Stack Web Developer</h1>
          <div className='flex justify-center'>
            <MdOutlineMyLocation className='text-white w-5 h-5 mt-[25px] mr-2'/>
            <p className='text-white text-[20px] font-medium mt-5'>Guntur, Andhra Pradesh, India</p>
          </div>
          <a href='mailto:gprasanthchowdary@gmail.com' target='_blank'><div className='text-center mt-[30px] h-10'><button className='bg-[#DD3B58] p-2 pl-8 pr-8 rounded-full text-white font-medium text-[20px] border-2 bg-opacity-80 hover:bg-opacity-100 hover:border-4'>Get in Touch</button></div></a>
        </div>
        <div className='flex justify-around w-[20%] ml-10'>
          <a href='mailto:gprasanthchowdary@gmail.com' target='_blank' className='h-9 w-9'><SiGmail className='text-white h-8 w-8 hover:h-9 hover:w-9'/></a>
          <a href='https://www.linkedin.com/in/prasanth-gondi-autodidact/' target='_blank' className='h-9 w-9'><BsLinkedin className='text-white h-8 w-8 hover:h-9 hover:w-9'/></a>
          <a href='https://github.com/PrasanthGondi' target='_blank' className='h-9 w-9'><BsGithub className='text-white h-8 w-8 hover:h-9 hover:w-9'/></a>
          <a href='https://docs.google.com/document/d/1dkadrDXmrJcFGWhfu_qfsNTyhEBnnWrnMOjOBvO7QMw/edit?usp=sharing' target='_blank' className='h-9 w-9'><AiFillFileText className='text-white h-8 w-8 hover:h-9 hover:w-9'/></a>
        </div>
      </div>
      {/* <div className='w-full h-20 bg-gradient-to-b from-[#001822] to-[#112331]'>
      </div> */}
      <div className='bg-[url(https://i.imgur.com/3WfWHFY.jpg)] w-full min-h-screen'>
        <h1 className='text-white text-[40px] text-center font-bold pt-10 underline decoration-[#BF3711] underline-offset-8 decoration-8'>Skills</h1>
        <ul className='flex flex-wrap ml-14 mt-28 justify-center items-center font-medium'>
          <li className='flex text-white mr-10 mb-32'>
            <SiTypescript className='mr-3 h-10 w-10'/>
            <h1 className='text-[28px]'>TypeScript</h1>
          </li>
          <li className='flex text-white mr-10 mb-32'>
            <GrReactjs className='mr-3 h-10 w-10'/>
            <h1 className='text-[28px]'>ReactJS</h1>
          </li>
          <li className='flex text-white mr-10 mb-32'>
            <GrGraphQl className='mr-3 h-10 w-10'/>
            <h1 className='text-[28px]'>GraphQL</h1>
          </li>
          <li className='flex text-white mr-10 mb-32'>
            <TbBrandTailwind className='mr-3 h-10 w-10'/>
            <h1 className='text-[28px]'>Tailwind CSS</h1>
          </li>
          <li className='flex text-white mr-10 mb-32'>
            <SiPython className='mr-3 h-10 w-10'/>
            <h1 className='text-[28px]'>Python</h1>
          </li>
          <li className='flex text-white mr-10 mb-32'>
            <FaNode className='mr-3 h-10 w-10'/>
            <h1 className='text-[28px]'>NodeJS</h1>
          </li>
          <li className='flex text-white mr-10 mb-32'>
            <SiExpress className='mr-3 h-10 w-10'/>
            <h1 className='text-[28px]'>ExpressJS</h1>
          </li>
          <li className='flex text-white mr-10 mb-32'>
            <SiJavascript className='mr-3 h-10 w-10'/>
            <h1 className='text-[28px]'>JavaScript</h1>
          </li>
          <li className='flex text-white mr-10 mb-32'>
            <SiSqlite className='mr-3 h-10 w-10'/>
            <h1 className='text-[28px]'>SQLite</h1>
          </li>
          <li className='flex text-white mr-10 mb-32'>
            <SiMongodb className='mr-3 h-10 w-10'/>
            <h1 className='text-[28px]'>MongoDB</h1>
          </li>
          <li className='flex text-white mr-10 mb-32'>
            <SiAntdesign className='mr-3 h-10 w-10'/>
            <h1 className='text-[28px]'>Ant Design</h1>
          </li>
          <li className='flex text-white mr-10 mb-32'>
            <FaBootstrap className='mr-3 h-10 w-10'/>
            <h1 className='text-[28px]'>BootStrap</h1>
          </li>
          <li className='flex text-white mr-10 mb-32'>
            <SiContentful className='mr-3 h-10 w-10'/>
            <h1 className='text-[28px]'>ContentFul</h1>
          </li>
          <li className='flex text-white mr-10 mb-32'>
            <TfiHtml5 className='mr-3 h-10 w-10'/>
            <h1 className='text-[28px]'>HTML</h1>
          </li>
          <li className='flex text-white mr-10 mb-32'>
            <SiCss3 className='mr-3 h-10 w-10'/>
            <h1 className='text-[28px]'>CSS/FlexBox</h1>
          </li>
          <li className='flex text-white mr-10 mb-32'>
            <SiOpenai className='mr-3 h-10 w-10'/>
            <h1 className='text-[28px]'>ChatGPT</h1>
          </li>
          <li className='flex text-white mr-10 mb-32'>
            <GrGoogle className='mr-3 h-10 w-10'/>
            <h1 className='text-[28px]'>Googling</h1>
          </li>
        </ul>
      </div>
      <div className='bg-[url(https://i.imgur.com/C1TwZoy.jpg)] w-full min-h-screen'>

      </div>
    </>
  )
}

export default App
