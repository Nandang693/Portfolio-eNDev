import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Projects = () => {
  const ContentData = [
    { id: 1, tittle: 'Onet Coffee', img: '/onet-coffee.png', desc: 'Website for Cafe place', link: 'https://nandang693.github.io/Onet-kopi/' },
    { id: 2, tittle: 'enweb', img: '/enweb.png', desc: 'Portfolio Website', link: 'https://nandang693.github.io/eNWeb/' },
    { id: 3, tittle: 'The Cookie', img: '/the-cookie.png', desc: 'Cookie place website', link: 'https://nandang693.github.io/TheCookies/' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="project" className="flex flex-col w-full md:h-[700px] bg-bg">
      <h2 className="md:text-8xl text-6xl m-5 font-extrabold md:font-bold">My Portfolio</h2>
      <div className="border-2 relative w-full bg-object2 overflow-hidden">
        <AnimatePresence mode="wait">
          <a href={ContentData[activeIndex].link} target="_blank" className="relative flex items-center gap-10">
            <motion.img
              key={activeIndex}
              src={ContentData[activeIndex].img}
              alt="Product"
              initial={{ opacity: 0, x: 100, scale: 1 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 1, x: -100, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className=" translate-all duration-500 w-[100%] h-[100%]"
            />
            <div className="absolute md:bottom-10 bottom-3 md:left-15 left-2 bg-black/50 md:p-10 p-5 flex flex-col gap-2 text-center justify-center rounded-3xl text-white">
              <h1 className="md:text-4xl text-xl font-bold">{ContentData[activeIndex].tittle}</h1>
              <p className="md:text-md text-xs">{ContentData[activeIndex].desc}</p>
            </div>
          </a>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
            {ContentData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`w-10 h-10 rounded-full border-2 cursor-pointer
            ${activeIndex === index ? 'bg-black text-white' : 'bg-white text-black'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
