import { Disclosure } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aptech from '../assets/aptech-logo.png';

const Header = ({ imgWidth }: { imgWidth: string }) => {
  return (
    <Disclosure as="header" className="bg-yellow-500 p-5 border-b-2">
      {({ open }) => (
        <>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div>
              <Link to="/">
              <img
                src={Aptech}
                alt="logo"
                width={imgWidth}
                className="max-w-full"
              />
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex w-full justify-center text-lg font-semibold">
              <ul className="flex space-x-8">
                <li>
                <Link to="/" className="hover:text-red-700 transition-all duration-300 ease-in">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-red-700 transition-all duration-300 ease-in">About</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-red-700 transition-all duration-300 ease-in">Contact</Link>
                </li>
                <li>
                  <Link to="/courses" className="hover:text-red-700 transition-all duration-300 ease-in">Courses</Link>
                </li>
                {/* <li>
                <Link to="/ThankYou" className="hover:text-red-700 transition-all duration-300 ease-in">Thank</Link>
                </li> */}
              </ul>
            </nav>

            {/* Social Media Icons */}
            <div className="hidden md:flex space-x-6 text-xl">
              <FaTwitter className="hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer transition-all duration-300 ease-in" />
              <FaTiktok className="hover:text-black cursor-pointer transition-all duration-300 ease-in" />
            </div>

            {/* Mobile Menu Button */}
            <Disclosure.Button className="md:hidden text-black transition-all duration-300 ease-in">
              {open ? <X size={28} /> : <Menu size={28} />}
            </Disclosure.Button>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden mt-4 bg-yellow-500 p-5 text-lg font-semibold text-center transition-all duration-300 ease-in">
            <ul className="space-y-4">
            <li>
                <Link to="/" className="hover:text-red-700 transition-all duration-300 ease-in">Home</Link>
                </li>
              <li>
                <Link to="/about" className="hover:text-red-700 transition-all duration-300 ease-in">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-700 transition-all duration-300 ease-in">Contact</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-red-700 transition-all duration-300 ease-in">Courses</Link>
              </li>
              {/* <li>
                <Link to="/ThankYou" className="hover:text-red-700 transition-all duration-300 ease-in">Thank</Link>
                </li> */}
            </ul>

            {/* Social Media Icons in Mobile Menu */}
            <div className="flex justify-center space-x-6 text-xl mt-4">
              <FaTwitter className="hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer transition-all duration-300 ease-in" />
              <FaTiktok className="hover:text-white cursor-pointer transition-all duration-300 ease-in" />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
