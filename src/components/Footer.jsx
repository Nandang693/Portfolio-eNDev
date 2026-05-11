import { Instagram } from 'react-feather';
import { GitHub } from 'react-feather';
import { Facebook } from 'react-feather';
import { Twitter } from 'react-feather';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 bg-object2">
      <div className="flex justify-center gap-10 items-center h-auto w-full">
        <div className="flex-1 ml-15">
          <a href="#Hero" className="font-bold w-fit text-6xl mb-20 mt-10 hover:text-white cursor-pointer">
            eNDev
          </a>
          <ul className="flex gap-5 mt-10">
            <li className="bg-white p-2 rounded-full">
              <a href="#" className="">
                <GitHub className="hover:text-blue-50"></GitHub>
              </a>
            </li>
            <li className="bg-white p-2 rounded-full">
              <a href="#">
                <Instagram data-feather="facebook" className="hover:text-blue-50"></Instagram>
              </a>
            </li>
            <li className="bg-white p-2 rounded-full">
              <a href="#">
                <Facebook data-feather="github" className="hover:text-blue-50"></Facebook>
              </a>
            </li>
            <li className="bg-white p-2 rounded-full">
              <a href="#">
                <Twitter data-feather="twitter" className="hover:text-blue-50"></Twitter>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 mt-10 md:mt-0">
          <h1 className="font-bold">SIGN UP FOR EMAILS</h1>
          <p className="mb-5">get first dibs on new arrivals and advance notice on everything we do</p>
          <form>
            <input type="email" id="email" name="email" placeholder="email" className="bg-white p-2" /> <button className="bg-slate-600 p-2">Sign Me Up</button>
          </form>
        </div>
      </div>

      <div className="flex justify-center items-center h-10 bg-black">
        <p className="text-white">
          Copyright &copy;2026; <span className="font-bold">Design By</span>{' '}
          <a href="#" className="hover:text-blue-500">
            NandangRustandi
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
