import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Japa from '../assets/Aptech-JAPA-Courses.jpg'

const ThankYou = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
      }, []);
  
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Thank You Section */}
      <div data-aos="fade-down" className="text-center mt-32 mb-20">
        <h1 className="text-5xl font-extrabold text-red-800 hover:text-yellow-500 transition-all duration-500 ease-in-out transform hover:scale-110">
          THANK YOU
        </h1>
        <p className="text-lg mt-4 ">
          Your request has been received, and you will receive an email or phone call
          from us within the next few hours.
        </p>
      </div>

      {/* Image Section */}
      <div data-aos="zoom-in" className="w-full p-15">
        <img
          src={Japa}
          alt="Thank You"
          className="w-full h-auto object-cover rounded-lg shadow-lg transform transition-all duration-700 hover:scale-105"
        />
      </div>

      {/* Scroll to Top Button */}
      <a 
        href="#" 
        className="fixed bottom-5 right-5 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-110 hover:rotate-12"
      >
        <i className="fas fa-chevron-up">⬆️</i>
      </a>
    </div>
  );
};

export default ThankYou;