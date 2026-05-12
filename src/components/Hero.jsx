import htmlLogo from '../assets/images/html-logo.svg';
import cssLogo from '../assets/images/css-logo.svg';
import javascriptLogo from '../assets/images/javascript-logo.svg';
import reactLogo from '../assets/images/react-logo.svg';
import nodejsLogo from '../assets/images/nodejs-logo.svg';
import tailwindcssLogo from '../assets/images/tailwindcss-logo.svg';
import bootstrapLogo from '../assets/images/bootstrap-logo.svg';
import typescriptLogo from '../assets/images/typescript-logo.svg';
import mysqlLogo from '../assets/images/mysql-logo.svg';
import gitLogo from '../assets/images/git-logo.svg';
import profile from '../assets/images/profile.png';
import { Mail } from 'react-feather';
import { GitHub } from 'react-feather';
import { Circle } from 'react-feather';

const Hero = () => {
  return (
    <div id="Hero" className="md:flex flex-col bg-bg w-full h-screen md:h-[750px]">
      {/* Hero section 1 */}
      <div className="relative flex bg-bg w-full pl-10 h-9/10 md:h-7/10">
        <div className="flex flex-col mt-5 md:w-1/2">
          <div className="bg-bg w-fit px-5 text-sm">
            <p>Welcome To</p>
          </div>
          <h1 className="md:text-8xl text-6xl font-extrabold md:mt-10 mt-5">
            En<span className="text-bg font-mono md:text-8xl text-7xl">Dev</span>
          </h1>
          <p className="md:w-[80%] w-[90%] font-extralight md:mt-3 mt-8 text-2xl text-black/60">Front-end Web Developer passionate about creating amazing web experiences with modern technologies like Next.js, React, and TypeScript.</p>
          <div className="mt-15">
            <button href="#" className="bg-bg mr-5 p-3 font-bold rounded-sm cursor-pointer border-2">
              Download CV
            </button>
            <a href="#project" className="p-3 bg-object text-primary font-bold rounded-sm">
              View Project
            </a>
          </div>

          <div className="absolute flex flex-col gap-5 bottom-5 left-4 md:left-10 text-black/50">
            <a href="mailto:nnanndang@gmail.com" target="_blank" className="flex gap-2">
              <Mail /> nnandangg@gmail.com
            </a>
            <a href="https://github.com/Nandang693" target="_blank" className="flex gap-2">
              <GitHub />
              nandang693
            </a>
          </div>
        </div>
        {/*  */}
        <div className="absolute rounded-lg md:right-10 right-3 bg-bg px-3 top-2 p-1">
          <p className="md:text-xs text-[10px] font-extrabold flex gap-1 justify-center items-center">
            Availabel For Work <Circle color="#22c55e" fill="#22c55e" size={10} />
          </p>
        </div>
        {/*  */}
        <div className="md:relative absolute md:mr-10 flex md:w-1/2 md:justify-center md:items-center md:right-0 md:top-0 right-12 top-11">
          <img src={profile} className=" // md:w-[250px] md:h-[250px] // w-[60px] h-[60px] bg-bg md:rounded-2xl"></img>
        </div>
      </div>
      {/* Hero section 2 */}
      <div className="flex pt-8">
        <div className="containerCont flex bg-addition h-40px overflow-x-auto">
          <div className="skillsCont flex pr-0 md:pr-5">
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={htmlLogo} alt="HTML" className="w-15 md:w-35 h-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={cssLogo} alt="CSS" className="w-15 md:w-35 h-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={javascriptLogo} alt="JS" className="w-15 md:w-35 h-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={reactLogo} alt="React" className="w-15 md:w-35 h-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={nodejsLogo} alt="NodeJS" className="w-15 md:w-35 h-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={tailwindcssLogo} alt="Tailwind" className="w-15 md:w-35 h-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={bootstrapLogo} alt="Bootstrap" className="w-15 md:w-35 h-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={typescriptLogo} alt="TS" className="w-15 md:w-35 h-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={mysqlLogo} alt="MySQL" className="w-15 md:w-35 h-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={gitLogo} alt="Git" className="w-15 md:w-35 h-auto object-contain" />
            </a>
          </div>
          <div aria-hidden="true" className="skillsCont flex bg-addition">
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={htmlLogo} alt="HTML" className="w-15 md:w-35 h-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={cssLogo} alt="CSS" className="w-15 md:w-35 h-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={javascriptLogo} alt="JS" className="w-15 md:w-35 h-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={reactLogo} alt="React" className="w-15 md:w-35 h-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={nodejsLogo} alt="NodeJS" className="w-15 md:w-35 h-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={tailwindcssLogo} alt="Tailwind" className="w-15 md:w-35 h-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={bootstrapLogo} alt="Bootstrap" className="w-15 md:w-35 h-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={typescriptLogo} alt="TS" className="w-15 md:w-35 h-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={mysqlLogo} alt="MySQL" className="w-15 md:w-35 h-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center shrink-0  w-20 h-20 md:w-[160px] md:h-[160px] hover:scale-105 transition-transform">
              <img src={gitLogo} alt="Git" className="w-15 md:w-35 h-auto object-contain" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
