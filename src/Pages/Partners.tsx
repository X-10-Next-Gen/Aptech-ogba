// import React from 'react'
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Partners = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <>
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <div className="relative bg-yellow-500 text-center py-16 shadow-lg" data-aos="fade-down">
        <h1 className="text-4xl font-bold text-red-700">About Aptech</h1>
        <p className="text-xl mt-2 text-red-900">Ogba Center</p>
      </div>

      {/* Overview Section */}
      <div className="max-w-5xl mx-auto px-6 py-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-red-700 text-center">Overview</h2>
        <p className="mt-4 text-gray-700 leading-relaxed text-lg text-center">
          Aptech is a leading global career education company with over 35 years in I.T. education.
          Present in more than 40 countries, Aptech has trained over 7 million individuals in 1,300+ training centers worldwide.
          <br /><br />
          Our curriculum includes corporate training, assessment solutions, and customized content development for domestic and international customers.
        </p>
      </div>

      {/* Image Section */}
      <div className="max-w-4xl mx-auto px-4" data-aos="zoom-in">
        <img 
          src="/images/students.jpg" 
          alt="Students at Aptech" 
          className="rounded-lg shadow-xl w-full object-cover"
        />
      </div>

      {/* Vision & Mission Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center" data-aos="fade-right">
          <div>
            <h2 className="text-2xl font-bold text-red-700">Our Vision</h2>
            <p className="mt-3 text-gray-700 text-lg">
              <span className="font-semibold">"To be a Global Corporation and a World-Class Organization."</span>
              <br />
              Since 1986, Aptech has led education and training with strong academic and research-oriented methodologies.
            </p>
          </div>
          <div>
            <img 
              src="/images/vision.jpg" 
              alt="Vision" 
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-12" data-aos="fade-left">
          <div className="order-2 md:order-1">
            <img 
              src="/images/mission.jpg" 
              alt="Mission" 
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold text-red-700">Our Mission</h2>
            <p className="mt-3 text-gray-700 text-lg">
              <span className="font-semibold">"Empowerment through Technology"</span>
              <br />
              Our goal is to increase productivity and innovation through I.T. education, shaping the future of individuals and businesses worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* International Alliances Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-red-700 mb-10">Our International Alliances</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {/* Middlesex University */}
          <div className="max-w-md text-center" data-aos="fade-up">
            <img src="/images/middlesex.png" alt="Middlesex University" className="mx-auto w-24 mb-4" />
            <h3 className="text-xl font-bold text-red-700">Middlesex University</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Aptech has partnered with Middlesex University, a prestigious UK institution, allowing students to transfer their credits and obtain admission.
            </p>
          </div>

          {/* Lincoln University */}
          <div className="max-w-md text-center" data-aos="fade-up">
            <img src="/images/lincoln.png" alt="Lincoln University" className="mx-auto w-24 mb-4" />
            <h3 className="text-xl font-bold text-red-700">Lincoln University</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Aptech collaborates with Lincoln University College, Malaysia, enabling students to complete the Advanced Diploma in Software Engineering.
            </p>
          </div>

          {/* NCC Education */}
          <div className="max-w-md text-center" data-aos="fade-up">
            <img src="/images/ncc.png" alt="NCC Education" className="mx-auto w-24 mb-4" />
            <h3 className="text-xl font-bold text-red-700">NCC Education</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              As an NCC Education Accredited Partner, Aptech allows students to access UK university degrees and globally recognized qualifications.
            </p>
          </div>

          {/* Online Varsity */}
          <div className="max-w-md text-center" data-aos="fade-up">
            <img src="/images/onlinevarsity.png" alt="Online Varsity" className="mx-auto w-24 mb-4" />
            <h3 className="text-xl font-bold text-red-700">Online Varsity</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Online Varsity offers students access to learning anytime, anywhere, with expert videos, knowledge tools, and peer-to-peer chats.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Partners