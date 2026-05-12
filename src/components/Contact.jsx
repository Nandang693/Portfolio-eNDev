import { Mail } from 'react-feather';
import { Facebook } from 'react-feather';
import { GitHub } from 'react-feather';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-bg">
      <div className="flex flex-col md:justify-center w-1/2 md:ml-20 ml-5 mt-10 md:mt-0">
        <h2 className="md:text-9xl text-6xl font-extrabold ">Contact Me</h2>
        <p className="md:text-2xl text-2xl">Let's get in touch</p>
      </div>
      <div className="bg-object2 md:h-110 md:w-90 h-full ml-30 mt-15 md:ml-0 md:mt-0">
        <h4 className="bg-object text-white font-bold m-3 w-fit p-3 px-10 text-4xl mb-10 mt-10">eNDev</h4>
        <div className="flex flex-col gap-3">
          <div className="bg-bg m-3 md:text-2xl text-xl p-3 rounded-xl">
            <a href="mailto:nnanndang@gmail.com" target="_blank" className=" flex gap-5">
              <Mail className="bg-object2 text-white w-10 h-auto p-2 rounded-lg text-xl"></Mail> nnandangg@gmail.com
            </a>
          </div>
          <div className="bg-bg m-3 md:text-2xl text-xl p-3 rounded-xl">
            <a href="mailto:nnanndang@gmail.com" target="_blank" className=" flex gap-5">
              <Mail className="bg-object2 text-white w-10 h-auto p-2 rounded-lg"></Mail> nnandangg@gmail.com
            </a>
          </div>
          <div className="bg-bg m-3 md:text-2xl text-xl p-3 rounded-xl">
            <a href="mailto:nnanndang@gmail.com" target="_blank" className=" flex gap-5">
              <Mail className="bg-object2 text-white w-10 h-auto p-2 rounded-lg"></Mail> nnandangg@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
