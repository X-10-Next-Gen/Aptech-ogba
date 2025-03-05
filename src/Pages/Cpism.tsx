// import React from 'react'
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cpism = () => {
    React.useEffect(() => {
        AOS.init();
      }, []);


interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
}

  const [formData, setFormData] = useState<FormData>({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): boolean => {
    let newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const { name, email, phone } = formData;
      const mailtoLink = `mailto:contact@aptechogbacenter.com?subject=Contact Form Submission&body=Name: ${encodeURIComponent(
        name
      )}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <>
    
    <div className="bg-gray-100 text-gray-900 overflow-x-hidden font-poppins">
      {/* Header Section */}
      <header className="text-center bg-red-700 text-white py-10 px-5">
        <h1 className="text-3xl md:text-4xl font-semibold max-w-4xl mx-auto">
          Certificate of Proficiency in Information Systems Management (CPISM)
        </h1>
        <p className="text-lg mt-4">
          Your gateway to a thriving career in Information Technology and Web Development.
        </p>
      </header>

      {/* Hint Section */}
      <section className="text-center py-10 px-5">
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Build your career in IT and front-end web development with globally recognized certifications.
        </p>
        <p className="text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
          Our CPISM program offers an in-depth, structured learning experience that covers:
        </p>
        <ul className="list-none text-left max-w-xl mx-auto mt-5 space-y-3">
          {[
            "Full front-end web development",
            "Mobile app development",
            "Linux operating system",
            "C# and Java programming",
            "Fundamentals of IT security",
          ].map((item, index) => (
            <li key={index} className="flex items-center text-lg">
              <span className="text-red-700 font-bold mr-2">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-lg mt-5 max-w-3xl mx-auto leading-relaxed">
          Whether you choose our 6-month or 12-month program, you will gain the skills needed to excel in the fast-growing tech industry.
        </p>
      </section>

      {/* Why Get Certified */}
      <section className="text-center py-10 px-5">
        <h2 className="text-red-700 text-2xl font-medium">Why Get CPISM Certified?</h2>
        <p className="text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
          Enrolling in this program puts you on the path to high-demand roles in technology:
        </p>
        <div className="flex flex-wrap justify-center gap-5 mt-5">
          {[
            "Information Systems Manager",
            "IT Security Manager",
            "Cybersecurity Analyst",
            "Systems Analyst",
            "IT Project Manager",
            "Systems Administrator",
            "Network Administrator",
            "Software Development Manager",
          ].map((role, index) => (
            <div
              key={index}
              className="w-60 h-20 flex items-center justify-center border border-red-700 rounded-lg shadow-lg bg-white text-red-700 font-medium transition-transform transform hover:scale-105 hover:bg-red-700 hover:text-white"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="2500"
            >
              {role}
            </div>
          ))}
        </div>
      </section>

      {/* Who is this Program for? */}
      <section className="text-center py-10 px-5">
        <h2 className="text-red-700 text-2xl font-medium">Who is this Program for?</h2>
        <p className="text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
          This program is designed for individuals who want to break into the tech industry or upgrade their existing IT skills. It is perfect for:
        </p>
        <ul className="list-none text-left max-w-xl mx-auto mt-5 space-y-3">
          {[
            "Students looking for a career in IT",
            "Professionals seeking a career switch to technology",
            "Entrepreneurs who want to develop tech solutions",
            "Anyone passionate about learning IT and programming",
          ].map((item, index) => (
            <li key={index} className="flex items-center text-lg">
              <span className="text-red-700 font-bold mr-2">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Career Growth */}
      <section className="text-center py-10 px-5">
        <h2 className="text-red-700 text-2xl font-medium">Career Growth Opportunities</h2>
        <p className="text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
          As a CPISM-certified professional, you will have access to a wide range of career opportunities in both local and international job markets. With increasing demand for IT professionals, companies are actively looking for individuals with expertise in system management, software development, and cybersecurity.
        </p>
        <p className="text-lg mt-5 max-w-3xl mx-auto leading-relaxed">
          By completing this certification, you gain a competitive edge, increased job security, and a pathway to higher earnings.
        </p>
      </section>

      <p className="text-lg text-center font-bold py-10 px-5">
        Take the first step toward a successful career in IT. Fill out the form to connect with our dedicated tech career specialist in Ogba today.
      </p>


      <div className="container mx-auto px-6 py-10">
        <h2 className="text-3xl text-center text-red-700 font-bold mb-6">Contact Us</h2>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
            </div>
            <Link to="/ThankYou">  
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-red-800 transition"
            >
              Submit
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cpism;