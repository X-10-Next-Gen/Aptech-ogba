import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link
import Aptech from "../assets/aptech-logo.png";

const Footer = ({ imgWidth }: { imgWidth: string }) => {
  return (
    <footer className="bg-yellow-500 text-black py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div>
          <img src={Aptech} alt="logo" width={imgWidth} className="max-w-full" />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/courses" className="hover:underline">Courses</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Address & Contact */}
        <div>
          <h3 className="font-bold text-lg">Our Address</h3>
          <p className="flex items-center gap-2 mt-2">
            <FaPhone /> 08037433063, 07025670677
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaMapMarkerAlt /> 5B, College Road, Ogba, Lagos
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaGlobe /> <a href="https://aptechogbacenter.com" className="hover:underline">aptechogbacenter.com</a>
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope /> <a href="mailto:contact@aptechogbacenter.com" className="hover:underline">contact@aptechogbacenter.com</a>
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div className="md:col-span-3">
          <h3 className="font-bold text-lg">Subscribe to our Newsletter</h3>
          <p className="mt-2 text-sm">Monthly digest of what's new and exciting from us.</p>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 border border-gray-300 rounded-l-md w-full"
            />
            <button className="bg-red-700 text-white px-4 py-2 rounded-r-md">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-8 pt-4 flex justify-between items-center text-sm">
        <p>&copy; 2024 Aptech Ogba. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="cursor-pointer" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="cursor-pointer" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
