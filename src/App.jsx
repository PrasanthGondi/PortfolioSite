import { useState } from "react";
import { Link } from "react-scroll";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { MdOutlineMyLocation } from "react-icons/md";
import {
  BsBootstrap,
  BsGithub,
  BsLinkedin,
  BsArrowUpRight,
} from "react-icons/bs";
import {
  SiGmail,
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiPython,
  SiExpress,
  SiSqlite,
  SiMongodb,
  SiContentful,
  SiAntdesign,
  SiOpenai,
  SiTailwindcss,
} from "react-icons/si";
import { GrReactjs, GrGraphQl, GrGoogle } from "react-icons/gr";
import { TbBrandTailwind, TbCertificate } from "react-icons/tb";
import { FaNode, FaBootstrap } from "react-icons/fa";
import { TfiHtml5 } from "react-icons/tfi";
import { AiFillFileText, AiFillEye } from "react-icons/ai";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full overflow-hidden fontclass">
      <div className="bg-[url(https://i.imgur.com/fHdmMyl.jpg)] w-full min-h-screen sm:max-h-screen overflow-hidden overflow-y-hidden bg-no-repeat bg-cover bg-center flex flex-col justify-between">
        {/* <nav className="text-[#FFFFFF] h-[15%] fontclass mb-[160px] xl:mb-[160px] lg:mb-[150px] md:mb-[140px] xs:mb-[120px] xm:mb-[125px] xsl:mb-[130px] sm:mb-[135px]"> */}
        <nav className="text-[#FFFFFF] fontclass">
          <div className="flex justify-between xs:flex xs:flex-col sm:flex-row">
            <div className="text-[18px] xs:text-[22px] xm:text-[24px] xsl:text-[25px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[35px] flex m-5 bg-[#DD3B58] rounded-full ml-5 pb-2.5 pl-8 pr-8 bg-opacity-50 border-4 border-[#DD3B58] xs:pl-6 xs:pr-6 xs:pb-2 xsl:pb-2.5 justify-center">
              <img
                src="https://media.discordapp.net/attachments/990816866618470440/1074205369682907166/301803637_506902801440735_987699678916294777_n-removebg-preview.png"
                className="w-10 h-10 mt-[12px] xs:w-8 xs:h-8 xl:w-10 xl:h-10 md:h-9 md:w-9 md:mt-[11px] xl:mt-[12px] xs:mt-[7px] xm:mt-[8px] xsl:mt-[9px] sm:mt-[10px]"
              />
              <h1 className="mt-1 ml-1.5 xs:font-medium sm:font-normal xs:mt-1.5 sm:mt-1.5">
                Prasanth Gondi
              </h1>
            </div>
            <ul className="flex justify-around m-5 mt-8 text-[25px] font-medium xs:font-semibold sm:font-medium xl:text-[25px] xl:mt-8 xl:m-5 lg:text-[22px] md:text-[20px] xs:text-[16px] xm:text-[17px] xsl:text-[19px] sm:text-[20px] xs:mt-0 sm:mt-8 xs:justify-between">
              <li className="mr-10 underline decoration-[#DD3B58] underline-offset-8 decoration-4 xs:ml-5 sm:ml-0">
                {/* <a href='#skills'>Skills</a> */}
                <Link to="skills" spy={true} smooth={true} duration={800}>
                  Skills
                </Link>
              </li>
              <li className="mr-5 underline decoration-[#DD3B58] underline-offset-8 decoration-4">
                {/* <a href='#projects'>Projects</a> */}
                <Link to="projects" spy={true} smooth={true} duration={1000}>
                  Work
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <div className="w-full mb-[280px] xl:mb-[280px] lg:mb-[250px] md:mb-[200px] sm:mb-[180px] xsl:mb-[150px] xs:mb-[130px]"> */}
        <div className="w-full pb-16">
          <h1 className="text-white text-[40px] text-center font-medium md:text-[38px] lg:text-[45px] sm:text-[36px] xsl:text-[33px] xs:text-[31px] xs:pl-2 xs:pr-2 xsl:pl-1 xsl:pr-1">
            Full-Stack Web Developer
          </h1>
          <div className="flex justify-center mb-2">
            <MdOutlineMyLocation className="text-white w-5 h-5 sm:mt-[25px] md:mt-[26px] lg:mt-[27px] mr-2 xs:mt-[22px] xs:mr-1" />
            <p className="text-white text-[20px] md:text-[20px] lg:text-[24px] sm:text-[19px] xsl:text-[17px] xs:text-[16px] font-medium mt-5">
              Guntur, Andhra Pradesh, India
            </p>
          </div>
          <a href="mailto:gprasanthchowdary@gmail.com" target="_blank">
            <div className="text-center mt-[30px] h-10">
              <button className="bg-[#DD3B58] p-2 pl-8 pr-8 rounded-full text-white font-medium text-[20px] md:text-[18px] lg:text-[19px] xs:text-[15px] border-2 bg-opacity-80 hover:bg-opacity-100 hover:border-4">
                Get in Touch
              </button>
            </div>
          </a>
        </div>
        <div className="flex justify-around w-[45%] ml-10  md:w-[40%] lg:w-[35%] xl:w-[30%] sm:w-[45%] xs:w-full xs:ml-0 sm:ml-10 pb-10">
          <a
            href="mailto:gprasanthchowdary@gmail.com"
            target="_blank"
            className="h-9 w-9"
          >
            <SiGmail className="text-white h-8 w-8 hover:h-9 hover:w-9 lg:h-8 lg:w-8 md:w-7 md:h-7 xs:w-6 xs:h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/prasanth-gondi-autodidact/"
            target="_blank"
            className="h-9 w-9"
          >
            <BsLinkedin className="text-white h-8 w-8 hover:h-9 hover:w-9 lg:h-8 lg:w-8 md:w-7 md:h-7 xs:w-6 xs:h-6" />
          </a>
          <a
            href="https://github.com/PrasanthGondi"
            target="_blank"
            className="h-9 w-9"
          >
            <BsGithub className="text-white h-8 w-8 hover:h-9 hover:w-9 lg:h-8 lg:w-8 md:w-7 md:h-7 xs:w-6 xs:h-6" />
          </a>
          <a
            href="https://drive.google.com/file/d/1U41J1KPHVTk69pvlKqilVdghZmS90_Nb/view?usp=sharing"
            target="_blank"
            className="h-9 w-9"
          >
            <AiFillFileText className="text-white h-8 w-8 hover:h-9 hover:w-9 lg:h-8 lg:w-8 md:w-7 md:h-7 xs:w-6 xs:h-6" />
          </a>
        </div>
      </div>
      {/* <div className='w-full h-20 bg-gradient-to-b from-[#001822] to-[#112331]'>
      </div> */}
      <div className="bg-[url(https://i.imgur.com/3WfWHFY.jpg)] w-full bg-no-repeat bg-cover bg-center">
        <h1
          className="text-white text-[40px] xl:text-[40px] lg:text-[36px] md:text-[32px] sm:text-[30px] xsl:text-[28px] xm:text-[26px] xs:text-[24px] text-center font-bold pt-10 underline decoration-[#BF3711] underline-offset-8 decoration-8 xl:decoration-8 md:decoration-[6px] sm:decoration-[5px] xsl:decoration-[4px] xs:decoration-[4px]"
          id="skills"
        >
          Skills
        </h1>
        <ul className="flex flex-wrap ml-14 mt-28 xl:mt-28 lg:mt-26 md:mt-24 sm:mt-22 xsl:mt-18 xm:mt-15 xs:mt-12 justify-center items-center font-medium xs:ml-6 xs:flex xs:flex-nowrap xs:flex-col sm:flex-row sm:flex-wrap xs:justify-center xs:items-center sm:ml-14">
          <li className="flex text-white mr-10 mb-32 xl:mb-32 lg:mb-28 md:mb-24 sm:mb-22 xsl:mb-18 xm:mb-15 xs:mb-12">
            <SiTypescript className="mr-3 h-10 w-10 xl:h-10 xl:w-10 lg:h-9 lg:w-9 md:w-8 sm:h-8 sm:w-8 xsl:h-7 xsl:w-7 xm:h-6 xm:w-6 xs:h-6 xs:w-6 xs:mt-1" />
            <h1 className="text-[28px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[23px] xsl:text-[22px] xm:text-[21px] xs:text-[20px]">
              TypeScript
            </h1>
          </li>
          <li className="flex text-white mr-10 mb-32 xl:mb-32 lg:mb-28 md:mb-24 sm:mb-22 xsl:mb-18 xm:mb-15 xs:mb-12">
            <GrReactjs className="mr-3 h-10 w-10 xl:h-10 xl:w-10 lg:h-9 lg:w-9 md:h-8 md:w-8 sm:h-8 sm:w-8 xsl:h-7 xsl:w-7 xm:h-6 xm:w-6 xs:h-6 xs:w-6 xs:mt-1" />
            <h1 className="text-[28px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[23px] xsl:text-[22px] xm:text-[21px] xs:text-[20px]">
              ReactJS
            </h1>
          </li>
          <li className="flex text-white mr-10 mb-32 xl:mb-32 lg:mb-28 md:mb-24 sm:mb-22 xsl:mb-18 xm:mb-15 xs:mb-12">
            <GrGraphQl className="mr-3 h-10 w-10 xl:h-10 xl:w-10 lg:h-9 lg:w-9 md:h-8 md:w-8 sm:h-8 sm:w-8 xsl:h-7 xsl:w-7 xm:h-6 xm:w-6 xs:h-6 xs:w-6 xs:mt-1" />
            <h1 className="text-[28px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[23px] xsl:text-[22px] xm:text-[21px] xs:text-[20px]">
              GraphQL
            </h1>
          </li>
          <li className="flex text-white mr-10 mb-32 xl:mb-32 lg:mb-28 md:mb-24 sm:mb-22 xsl:mb-18 xm:mb-15 xs:mb-12">
            <TbBrandTailwind className="mr-3 h-10 w-10 xl:h-10 xl:w-10 lg:h-9 lg:w-9 md:h-8 md:w-8 sm:h-8 sm:w-8 xsl:h-7 xsl:w-7 xm:h-6 xm:w-6 xs:h-6 xs:w-6 xs:mt-1" />
            <h1 className="text-[28px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[23px] xsl:text-[22px] xm:text-[21px] xs:text-[20px]">
              Tailwind CSS
            </h1>
          </li>
          <li className="flex text-white mr-10 mb-32 xl:mb-32 lg:mb-28 md:mb-24 sm:mb-22 xsl:mb-18 xm:mb-15 xs:mb-12">
            <SiPython className="mr-3 h-10 w-10 xl:h-10 xl:w-10 lg:h-9 lg:w-9 md:h-8 md:w-8 sm:h-8 sm:w-8 xsl:h-7 xsl:w-7 xm:h-6 xm:w-6 xs:h-6 xs:w-6 xs:mt-1" />
            <h1 className="text-[28px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[23px] xsl:text-[22px] xm:text-[21px] xs:text-[20px]">
              Python
            </h1>
          </li>
          <li className="flex text-white mr-10 mb-32 xl:mb-32 lg:mb-28 md:mb-24 sm:mb-22 xsl:mb-18 xm:mb-15 xs:mb-12">
            <FaNode className="mr-3 h-10 w-10 xl:h-10 xl:w-10 lg:h-9 lg:w-9 md:h-8 md:w-8 sm:h-8 sm:w-8 xsl:h-7 xsl:w-7 xm:h-6 xm:w-6 xs:h-6 xs:w-6 xs:mt-1" />
            <h1 className="text-[28px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[23px] xsl:text-[22px] xm:text-[21px] xs:text-[20px]">
              NodeJS
            </h1>
          </li>
          <li className="flex text-white mr-10 mb-32 xl:mb-32 lg:mb-28 md:mb-24 sm:mb-22 xsl:mb-18 xm:mb-15 xs:mb-12">
            <SiExpress className="mr-3 h-10 w-10 xl:h-10 xl:w-10 lg:h-9 lg:w-9 md:h-8 md:w-8 sm:h-8 sm:w-8 xsl:h-7 xsl:w-7 xm:h-6 xm:w-6 xs:h-6 xs:w-6 xs:mt-1" />
            <h1 className="text-[28px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[23px] xsl:text-[22px] xm:text-[21px] xs:text-[20px]">
              ExpressJS
            </h1>
          </li>
          <li className="flex text-white mr-10 mb-32 xl:mb-32 lg:mb-28 md:mb-24 sm:mb-22 xsl:mb-18 xm:mb-15 xs:mb-12">
            <SiJavascript className="mr-3 h-10 w-10 xl:h-10 xl:w-10 lg:h-9 lg:w-9 md:h-8 md:w-8 sm:h-8 sm:w-8 xsl:h-7 xsl:w-7 xm:h-6 xm:w-6 xs:h-6 xs:w-6 xs:mt-1" />
            <h1 className="text-[28px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[23px] xsl:text-[22px] xm:text-[21px] xs:text-[20px]">
              JavaScript
            </h1>
          </li>
          <li className="flex text-white mr-10 mb-32 xl:mb-32 lg:mb-28 md:mb-24 sm:mb-22 xsl:mb-18 xm:mb-15 xs:mb-12">
            <SiSqlite className="mr-3 h-10 w-10 xl:h-10 xl:w-10 lg:h-9 lg:w-9 md:h-8 md:w-8 sm:h-8 sm:w-8 xsl:h-7 xsl:w-7 xm:h-6 xm:w-6 xs:h-6 xs:w-6 xs:mt-1" />
            <h1 className="text-[28px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[23px] xsl:text-[22px] xm:text-[21px] xs:text-[20px]">
              SQLite
            </h1>
          </li>
          <li className="flex text-white mr-10 mb-32 xl:mb-32 lg:mb-28 md:mb-24 sm:mb-22 xsl:mb-18 xm:mb-15 xs:mb-12">
            <SiMongodb className="mr-3 h-10 w-10 xl:h-10 xl:w-10 lg:h-9 lg:w-9 md:h-8 md:w-8 sm:h-8 sm:w-8 xsl:h-7 xsl:w-7 xm:h-6 xm:w-6 xs:h-6 xs:w-6 xs:mt-1" />
            <h1 className="text-[28px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[23px] xsl:text-[22px] xm:text-[21px] xs:text-[20px]">
              MongoDB
            </h1>
          </li>
          <li className="flex text-white mr-10 mb-32 xl:mb-32 lg:mb-28 md:mb-24 sm:mb-22 xsl:mb-18 xm:mb-15 xs:mb-12">
            <SiAntdesign className="mr-3 h-10 w-10 xl:h-10 xl:w-10 lg:h-9 lg:w-9 md:h-8 md:w-8 sm:h-8 sm:w-8 xsl:h-7 xsl:w-7 xm:h-6 xm:w-6 xs:h-6 xs:w-6 xs:mt-1" />
            <h1 className="text-[28px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[23px] xsl:text-[22px] xm:text-[21px] xs:text-[20px]">
              Ant Design
            </h1>
          </li>
          <li className="flex text-white mr-10 mb-32 xl:mb-32 lg:mb-28 md:mb-24 sm:mb-22 xsl:mb-18 xm:mb-15 xs:mb-12">
            <FaBootstrap className="mr-3 h-10 w-10 xl:h-10 xl:w-10 lg:h-9 lg:w-9 md:h-8 md:w-8 sm:h-8 sm:w-8 xsl:h-7 xsl:w-7 xm:h-6 xm:w-6 xs:h-6 xs:w-6 xs:mt-1" />
            <h1 className="text-[28px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[23px] xsl:text-[22px] xm:text-[21px] xs:text-[20px]">
              BootStrap
            </h1>
          </li>
          <li className="flex text-white mr-10 mb-32 xl:mb-32 lg:mb-28 md:mb-24 sm:mb-22 xsl:mb-18 xm:mb-15 xs:mb-12">
            <SiContentful className="mr-3 h-10 w-10 xl:h-10 xl:w-10 lg:h-9 lg:w-9 md:h-8 md:w-8 sm:h-8 sm:w-8 xsl:h-7 xsl:w-7 xm:h-6 xm:w-6 xs:h-6 xs:w-6 xs:mt-1" />
            <h1 className="text-[28px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[23px] xsl:text-[22px] xm:text-[21px] xs:text-[20px]">
              ContentFul
            </h1>
          </li>
          <li className="flex text-white mr-10 mb-32 xl:mb-32 lg:mb-28 md:mb-24 sm:mb-22 xsl:mb-18 xm:mb-15 xs:mb-12">
            <TfiHtml5 className="mr-3 h-10 w-10 xl:h-10 xl:w-10 lg:h-9 lg:w-9 md:h-8 md:w-8 sm:h-8 sm:w-8 xsl:h-7 xsl:w-7 xm:h-6 xm:w-6 xs:h-6 xs:w-6 xs:mt-1" />
            <h1 className="text-[28px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[23px] xsl:text-[22px] xm:text-[21px] xs:text-[20px]">
              HTML
            </h1>
          </li>
          <li className="flex text-white mr-10 mb-32 xl:mb-32 lg:mb-28 md:mb-24 sm:mb-22 xsl:mb-18 xm:mb-15 xs:mb-12">
            <SiCss3 className="mr-3 h-10 w-10 xl:h-10 xl:w-10 lg:h-9 lg:w-9 md:h-8 md:w-8 sm:h-8 sm:w-8 xsl:h-7 xsl:w-7 xm:h-6 xm:w-6 xs:h-6 xs:w-6 xs:mt-1" />
            <h1 className="text-[28px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[23px] xsl:text-[22px] xm:text-[21px] xs:text-[20px]">
              CSS/FlexBox
            </h1>
          </li>
          <li className="flex text-white mr-10 mb-32 xl:mb-32 lg:mb-28 md:mb-24 sm:mb-22 xsl:mb-18 xm:mb-15 xs:mb-12">
            <SiOpenai className="mr-3 h-10 w-10 xl:h-10 xl:w-10 lg:h-9 lg:w-9 md:h-8 md:w-8 sm:h-8 sm:w-8 xsl:h-7 xsl:w-7 xm:h-6 xm:w-6 xs:h-6 xs:w-6 xs:mt-1" />
            <h1 className="text-[28px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[23px] xsl:text-[22px] xm:text-[21px] xs:text-[20px]">
              ChatGPT
            </h1>
          </li>
          {/* <li className='flex text-white mr-10 mb-32 xl:mb-32 lg:mb-28 md:mb-24 sm:mb-22 xsl:mb-18 xm:mb-15 xs:mb-12'>
            <GrGoogle className='mr-3 h-10 w-10 xl:h-10 xl:w-10 lg:h-9 lg:w-9 md:h-8 md:w-8 sm:h-8 sm:w-8 xsl:h-7 xsl:w-7 xm:h-6 xm:w-6 xs:h-6 xs:w-6 xs:mt-1'/>
            <h1 className='text-[28px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[23px] xsl:text-[22px] xm:text-[21px] xs:text-[20px]'>Googling</h1>
          </li> */}
        </ul>
        <div className="w-full flex justify-center">
          <a
            href="https://drive.google.com/drive/folders/14x9S8bbcaDHXoWIYETQzTSz9SqkSMYNu?usp=sharing"
            target="_blank"
            className="text-center"
          >
            <TbCertificate className="h-16 w-16 ml-5 text-white xl:h-16 xl:w-16 lg:h-14 lg:w-14 md:h-12 md:w-12 sm:h-11 sm:w-11 xsl:h-10 xsl:w-10 xs:h-10 xs:w-10 mb-5 sm:mb-8 xs:ml-0 " />
          </a>
        </div>
      </div>
      <div className="bg-[url(https://i.imgur.com/C1TwZoy.jpg)] w-full bg-no-repeat bg-cover bg-center">
        <h1
          className="text-white text-[40px] xl:text-[40px] lg:text-[36px] md:text-[32px] sm:text-[30px] xsl:text-[28px] xm:text-[26px] xs:text-[25px] text-center font-bold pt-5 underline decoration-[#E93438] underline-offset-8 decoration-8 xl:decoration-8 md:decoration-[6px] xs:decoration-[4px]"
          id="projects"
        >
          Work Experience
        </h1>
        <h1 className="text-white text-[30px] xl:text-[30px] lg:text-[28px] md:text-[26px] sm:text-[24px] xsl:text-[22px] xm:text-[20px] xs:text-[19px] font-medium pt-8 ml-10 xs:ml-0 xs:text-center sm:text-left sm:ml-10 underline decoration-[#E93438] underline-offset-8 decoration-4">
          salesBeat : June 2022 - Present
        </h1>
        <div>
          <div className="text-white bg-[#E93438] rounded-2xl mt-5 ml-5 w-[60%] xl:w-[60%] lg:w-[68%] md:w-[75%] xs:w-[90%] font-medium p-5 pt-3 bg-opacity-50">
            <div className="flex">
              <h1 className="text-[25px] xl:text-[25px] lg:text-[23px] md:text-[20px] sm:text-[19px] xsl:text-[18px] xs:text-[17px] mb-3 underline decoration-[#E93438] underline-offset-8 decoration-4">
                salesBeat SaaS Platform -{" "}
              </h1>
              <a href="https://i.imgur.com/XstQNWN.png" target="_blank">
                <AiFillEye className="h-6 w-6 mt-2 ml-2 xs:mt-1 xsl:mt-1 sm:mt-1 md:mt-1 lg:mt-1.5 xl:mt-2 xs:h-5 xs:w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
            <p className="text-[20px] xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] xsl:text-[16px] xs:text-[15px] mb-4">
              Purpose: Demand Planning and Market Insights for Retail Chains &
              Brands
            </p>
            <div className="flex xs:flex-col xsl:flex-row">
              <div className="flex flex-col mr-20">
                <p className="text-[20px] xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] xsl:text-[16px] xs:text-[15px] mb-2 underline decoration-[#E93438] underline-offset-8 decoration-4">
                  My Contributions:
                </p>
                <ul className="text-[18px] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] xsl:text-[14px] xs:text-[13px] list-disc pl-5 mb-2">
                  <li className="mb-3">InApp Communications & Notifications</li>
                  <li className="mb-3">Built & Updated Various Forms</li>
                  <li className="mb-3">Pagination</li>
                  <li className="mb-3">Major Design Changes</li>
                  <li className="mb-3">Bug Fixes</li>
                </ul>
              </div>
              <div className="flex flex-col">
                <p className="text-[20px] xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] xsl:text-[16px] xs:text-[15px] mb-2 underline decoration-[#E93438] underline-offset-8 decoration-4">
                  Built using:{" "}
                </p>
                <ul className="text-[18px] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] xsl:text-[14px] xs:text-[13px] list-disc pl-5 mb-2">
                  <li className="mb-3">TypeScript / ReactJS</li>
                  <li className="mb-3">Ant Design</li>
                  <li className="mb-3">GraphQL</li>
                  <li className="mb-3">MongoDB</li>
                  <li className="mb-3">Tailwind CSS</li>
                  <li className="mb-3">React-Hook-Form | YUP</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end xs:justify-center sm:justify-end pr-5 pb-5">
            <div className="text-white bg-[#E93438] rounded-2xl mt-5 ml-5 w-[60%] xl:w-[60%] lg:w-[68%] md:w-[75%] xs:w-[90%] font-medium p-5 pt-3 bg-opacity-50">
              <div className="flex">
                <h1 className="text-[25px] xl:text-[25px] lg:text-[23px] md:text-[20px] sm:text-[19px] xsl:text-[18px] xs:text-[17px] mb-3 underline decoration-[#E93438] underline-offset-8 decoration-4">
                  salesBeat Site
                </h1>
                <a href="https://salesbeat.co/" target="_blank">
                  <BsArrowUpRight className="h-5 w-5 mt-2.5 ml-2 xs:mt-1 xsl:mt-1 sm:mt-1 md:mt-1.5 lg:mt-2 xl:mt-2.5" />
                </a>
              </div>
              <p className="text-[20px] xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] xsl:text-[16px] xs:text-[15px] mb-2 underline decoration-[#E93438] underline-offset-8 decoration-4">
                My Contributions:
              </p>
              <ul className="text-[18px] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] xsl:text-[14px] xs:text-[13px] list-disc mb-2 flex flex-wrap justify-around xs:flex xs:flex-col xs:flex-nowrap sm:flex-row sm:flex-wrap xs:pl-5 xs:pt-2 sm:pl-0 sm:pt-0">
                <li className="mb-3">Home Page</li>
                <li className="mb-3">NewsRoom & Awards</li>
                <li className="mb-3">Events</li>
              </ul>
              <p className="text-[20px] xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] xsl:text-[16px] xs:text-[15px] mb-2 underline decoration-[#E93438] underline-offset-8 decoration-4">
                Built using:{" "}
              </p>
              <ul className="text-[18px] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] xsl:text-[14px] xs:text-[13px] list-disc pl-5 mb-2  flex flex-wrap justify-around xs:flex xs:flex-col xs:flex-nowrap sm:flex-row sm:flex-wrap xs:pl-5 xs:pt-2 sm:pl-0 sm:pt-0">
                <li className="mb-3">ReactJS</li>
                <li className="mb-3">ContentFul</li>
                <li className="mb-3">GraphQL</li>
                <li className="mb-3">Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(https://i.imgur.com/4bEjZnJ.jpg)] w-full bg-no-repeat bg-cover bg-center">
        <div className="h-10"></div>
        <div className="text-white bg-[black] rounded-2xl ml-5 w-[60%] xl:w-[60%] lg:w-[68%] md:w-[75%] xs:w-[90%] font-medium p-5 bg-opacity-25">
          <div className="flex">
            <h1 className="text-[25px] xl:text-[25px] lg:text-[23px] md:text-[20px] sm:text-[19px] xsl:text-[18px] xs:text-[17px] mb-3 underline decoration-[#F8A985] underline-offset-8 decoration-4 xs:underline-offset-4 sm:underline-offset-8">
              NxtTrends E-Commerce Site{" "}
            </h1>
            <a href="https://pgreactecomsite.ccbp.tech/" target="_blank">
              <BsArrowUpRight className="h-6 w-6 mt-2 ml-2 xs:h-4 xs:w-4 sm:h-6 sm:w-6 xs:mt-1 sm:mt-1.5 md:2" />
            </a>
          </div>
          <p className="text-[20px] xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] xsl:text-[16px] xs:text-[15px] mb-4 underline decoration-[#F8A985] underline-offset-8 decoration-4 xs:underline-offset-4 sm:underline-offset-8">
            Purpose: Part of My Certification from NxtWave
          </p>
          <p className="text-[20px] xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] xsl:text-[16px] xs:text-[15px] mb-4 underline decoration-[#F8A985] underline-offset-8 decoration-4 xs:underline-offset-4 sm:underline-offset-8">
            My Contributions: Built from Scratch (FrontEnd)
          </p>
          <div className="flex xs:flex-col xsl:flex-row">
            <div className="flex flex-col">
              {/* <p className='text-[20px] mb-2 underline decoration-[#6C0164] underline-offset-8 decoration-4'>My Contributions: Built from Scratch (FrontEnd)</p> */}
            </div>
            <div className="flex flex-col">
              <p className="text-[20px] xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] xsl:text-[16px] xs:text-[15px] mb-2 underline decoration-[#F8A985] underline-offset-8 decoration-4 xs:underline-offset-4 sm:underline-offset-8">
                Built using:{" "}
              </p>
              <ul className="text-[18px] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] xsl:text-[14px] xs:text-[13px] list-disc pl-5 mb-2">
                <li className="mb-3">ReactJS</li>
                <li className="mb-3">React Icons</li>
                <li className="mb-3">External API: https://apis.ccbp.in</li>
                <li className="mb-3">React Context</li>
                <li className="mb-3">JWT Token Based Authentication</li>
              </ul>
            </div>
            <div className="flex flex-col ml-5 xs:ml-0 sm:ml-5">
              <p className="text-[20px] xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] xsl:text-[16px] xs:text-[15px] mb-2 underline decoration-[#F8A985] underline-offset-8 decoration-4 xs:underline-offset-4 sm:underline-offset-8">
                Login Credentials
              </p>
              <ul className="text-[18px] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] xsl:text-[14px] xs:text-[13px] list-disc pl-5 mb-2">
                <li className="mb-3">Username: rahul</li>
                <li className="mb-3">Password: rahul@2021</li>
                <li className="mb-3">Username:raju</li>
                <li className="mb-3">Password: raju@2021</li>
                <li className="mb-3">
                  Rahul is a Prime User(Features change for Prime Users)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end pr-5 pb-5 xs:justify-center sm:justify-end xs:pr-0 sm:pr-5">
          <div className="text-white bg-[black] rounded-2xl mt-5 ml-5 w-[60%] xl:w-[60%] lg:w-[68%] md:w-[75%] xs:w-[90%] font-medium p-5 pt-3 bg-opacity-25 xs:ml-0 sm:ml-5">
            <div className="flex">
              <h1 className="text-[25px] xl:text-[25px] lg:text-[23px] md:text-[20px] sm:text-[19px] xsl:text-[18px] xs:text-[17px] mb-3 underline decoration-[#F33170] underline-offset-8 decoration-4 xs:underline-offset-4 sm:underline-offset-8">
                Countries and Continents
              </h1>
              <a
                href="https://prasanthgondi.github.io/GraphQl-TypeScript-Continents/"
                target="_blank"
              >
                <BsArrowUpRight className="h-5 w-5 mt-2.5 ml-2 xs:h-4 xs:w-4 sm:h-6 sm:w-6 xs:mt-1 sm:mt-1.5 md:mt-1.5" />
              </a>
            </div>
            <p className="text-[20px] xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] xsl:text-[16px] xs:text-[15px] mb-2 underline decoration-[#F33170] underline-offset-8 decoration-4 xs:underline-offset-4 sm:underline-offset-8">
              Test for my current position
            </p>
            <p className="text-[20px] xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] xsl:text-[16px] xs:text-[15px] mb-2 underline decoration-[#F33170] underline-offset-8 decoration-4 xs:underline-offset-4 sm:underline-offset-8">
              Built using:{" "}
            </p>
            <ul className="text-[18px] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] xsl:text-[14px] xs:text-[13px] list-disc pl-5">
              <li className="mb-3 mt-2">TypeScript</li>
              <li className="mb-3">GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[url(https://i.imgur.com/9IZUHtl.jpg)] w-full min-h-screen flex justify-center items-center bg-no-repeat bg-cover bg-center">
        <div className="flex justify-center items-center xs:w-[80%] sm:w-full xs:flex-col sm:flex-row">
          <h1 className="text-white text-[40px] xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[28px] xsl:text-[25px] xs:text-[23px] text-center font-medium">
            Inspired from the StarWars Binary Sunset
          </h1>
          <img
            src="https://media.discordapp.net/attachments/990816866618470440/1074205369682907166/301803637_506902801440735_987699678916294777_n-removebg-preview.png"
            className="w-10 h-10 mt-[2px] ml-2 xl:mt-[2px]"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
