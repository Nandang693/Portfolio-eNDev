import React, { useEffect } from 'react';
import mpiiSedih from '../assets/images/mpii-sedih.png';
import mpiiSenang from '../assets/images/mpii-senang.png';

const About = () => {
  useEffect(() => {
    const tombol1 = document.getElementById('btn1');
    const gambar1 = document.getElementById('gambarMpii');
    const wadah2 = document.getElementById('wadah2');
    const wadah1 = document.getElementById('wadah1');

    const aksiKlik = () => {
      wadah1.innerHTML = `<img src="${mpiiSenang}" alt="gambar" />`;
      wadah2.innerHTML = '<h1>Hai sayangg<h1/>';
    };

    if (tombol1) {
      tombol1.addEventListener('click', aksiKlik);
    }

    return () => {
      if (tombol1) {
        tombol1.removeEventListener('click', aksiKlik);
      }
    };
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen bg-primary pt-30">
      <div className=" relative flex">
        <div id="wadah1" className="w-[200px] h-auto"></div>
        <div id="wadah2" className="ml-8 text-3xl text-pink-600"></div>
        <button id="btn1" className="bg-white h-10 absolute right-10 top-30 p-5 flex justify-center items-center">
          Klik di sini
        </button>
      </div>
    </div>
  );
};

export default About;
