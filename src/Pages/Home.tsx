import { useForm, SubmitHandler } from "react-hook-form";
import { Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Computer from "../assets/computer-icon.png";
import Chart from '../assets/chart-icon.png'
import Graphic from '../assets/graphic design icon.png'
import Ui from '../assets/uiux.png'
import jj from '../assets/jj.jpeg'
import joeii from '../assets/joeii.jpeg'
import isreal from '../assets/israel.jpg'
import testi1 from '../assets/testi2.png'
import testi2 from '../assets/testi3.png'
import { Link } from "react-router-dom";



AOS.init();

type FormValues = {
  name: string;
  email: string;
  phone: string; // changed password to phone
};
type HomeProps = {
  imgWidth2: string;
  courseDetails: any;
};

const Home: React.FC<HomeProps> = ({ imgWidth2, courseDetails}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
  
    // Construct the mailto link with the form data and send to the static email
    const mailtoLink = `mailto:contact@aptechogbacenter.com?subject=Sign Up Verification&body=Hello%20${encodeURIComponent(data.name)},%0A%0AThank%20you%20for%20signing%20up.%20Please%20click%20the%20link%20below%20to%20verify%20your%20account:%0A%0A[Verification%20Link]%0A%0ABest%20regards,%0AYour%20Team`;
  
    // Redirect to the mailto link, which will open the user's email client
    window.location.href = mailtoLink;
  
    alert("Verification email has been sent! Please check your inbox.");
  };
  
  interface Course {
    img: string;
    b: string;
    p: string;
  }
  


  const TopSubjects = [
    { img: Computer , about: "Front-End Development", course: "10+ Course" },
    { img: Chart, about: "Data Analysis", course: "20+ Course" },
    { img: Graphic, about: "Graphic Design", course: "30+ Course" },
    { img: Ui, about: "UI/UX Design", course: "50+ Course" },
  ];

  const courses = [
    {
      title: "Advanced Diploma in Software Engineering",
      duration: "6 Months Course",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fHww",
    },
    {
      title: "Diploma in Information Systems Management",
      duration: "1 Year Course",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3lzdGVtJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Certificate of Proficiency in Information Systems Management",
      duration: "6 Months Course",
      image: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwaW4lMjAlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D",
    },
  ];
  interface Testimonial {
    name: string;
    role: string;
    message: string;
    image: string;
  }
  
  const testimonials: Testimonial[] = [
    {
      name: "Joseph Godffrey",
      role: "Front-End Developer",
      message:
        "The best IT company ever I seen. Software development outsourcing is just a tool to achieve. But there is no way to get worthwhile results.",
      image: joeii,
    },
    {
      name: "Michael Onyemata",
      role: "Front-End Developer",
      message:
        "Aptech ogba has been a lovely experience. Its environment and staff are the loveliest, and I've had the greatest time.",
      image: testi1
    },
    {
      name: "Afuape Demilade",
      role: "Game Developer and Front-End",
      message:
        "An incredible experience! The mentorship and resources provided have truly helped me grow in my career. I highly recommend it to anyone looking to advance their skills.",
      image: "https://images.unsplash.com/photo-1664131369068-1a81a1a37a37?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbiUyMHdpdGglMjBsb2NzfGVufDB8fDB8fHww",
    },
    {
      name: "Israel Akintunde",
      role: "Front-End Developer",
      message:
        "Best IT Education Experience! It has been a wonderful experience on the journey into Technology with Aptech Ogba. I'm a proud student of Aptech Ogba.",
      image: isreal,
    },
    {
      name: "James Ebri",
      role: "Front-End Developer",
      message:
        "Aptech Ogba is a top-notch IT training facility. They have a conducive learning environment with seasoned instructors who teach the latest technologies.",
      image: jj,
    },
    {
      name: "David Anagor",
      role: "Fullstack Developer",
      message:
        "The best IT company I’ve ever seen. Software development outsourcing is just a tool to achieve, but there is no way to get worthwhile results without dedication.",
      image: testi2,
    },
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  interface FAQItem {
    question: string;
    answer: string;
  }
  
  const faqData: FAQItem[] = [
    {
      question: "How does ADSE work?",
      answer:
        "The Advanced Diploma in Software Engineering (ADSE) covers Java, . NET, Linux, Python and a lot of in-demand technologies. Students learn about the latest concepts like Cloud Computing and Internet of Things. These technologies make you knowledge-efficient and job-ready I.T..",
    },
    {
      question: "What is the difference between ADSE, CPISM & DISM?",
      answer:
        "ADSE- Advanced Diploma in software Engineering is the full Career pathway in Aptech that spans for 2 years,While DISM and CPISM are short term career courses that also makes you a tech Professional .",
    },
    {
      question: "Do I still need JAMB after ADSE?",
      answer:
        "You don't need Jamb After ADSE, After your two years program in Aptech You travel to your Universities of choice and obtain your Bsc. You don't need to write Jamb again. .",
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };  

  return (
    <>
      <section className="bg-yellow-500 pt-10"
      
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center px-6 md:px-12 py-10"
         data-aos="fade-down"
         data-aos-easing="linear"
         data-aos-duration="1000"
        >
          {/* Text Section */}
          <div className="m-5 p-5 text-2xl">
            <h2 className="text-black font-semibold tracking-wide">
              Welcome to <span className="text-red-800 hover:text-gray-600 duration-300 ease-in-out">APTECH OGBA</span>
            </h2>
            <h1 className="text-red-800 text-5xl font-black font-sans leading-tight md:leading-snug">
              Most Trusted Technology Service
            </h1>
            <p className="text-red-600 mt-4 text-lg leading-relaxed hover:text-red-800 duration-300 ease-in-out">
              Equipped with human-like intelligence, our chatbots establish fluent and interactive dialogues.
            </p>
            <Link to="/Courses">
            <button className="relative w-36 p-3 h-14 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 overflow-hidden group transition-all duration-500">
    <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-800 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
    <span className="absolute inset-0 bg-black rounded-md scale-110 group-hover:bg-red-900 group-hover:scale-100 transition-transform duration-500 blur-md" />

    {/* Rotating Background Layers */}
    <span className="absolute w-36 h-36 -top-10 -left-5 bg-red-200 rounded-full transform scale-0 group-hover:scale-150 group-hover:rotate-45 transition-all duration-700 ease-out opacity-0 group-hover:opacity-40" />
    <span className="absolute w-36 h-36 -top-10 -right-5 bg-red-400 rounded-full transform scale-0 group-hover:scale-150 group-hover:-rotate-45 transition-all duration-700 ease-out opacity-0 group-hover:opacity-40" />
    <span className="absolute w-36 h-36 bottom-0 left-1/2 -translate-x-1/2 bg-red-600 rounded-full transform scale-0 group-hover:scale-150 group-hover:rotate-90 transition-all duration-700 ease-out opacity-0 group-hover:opacity-40" />

    {/* Text Morphing */}
    <span className="relative transition-all duration-500 group-hover:opacity-0">Explore!</span>
    <span className="absolute inset-0 flex items-center justify-center text-red-200 font-extrabold opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100">
      Learn More!
    </span>

    {/* Glowing Outline */}
    <span className="absolute inset-0 border-2 border-red-500 rounded-md opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 shadow-lg shadow-red-500/30" />
            </button>
            </Link>
          </div>

          {/* Form Section */}
          <div className="flex justify-center items-center" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-yellow-500 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-black text-2xl font-bold mb-6">Sign Up</h2>

        <div className="mb-4">
          <label className="block text-gray-500 mb-1">Full Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border-black rounded border-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-500 mb-1">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
            className="w-full p-2 border-2 border-black rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-500 mb-1">Phone Number</label>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/, // Example pattern for 10-digit phone number
                message: "Invalid phone number format",
              },
            })}
            className="w-full p-2 border-2 border-black rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <Link to="/ThankYou">
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded hover:bg-red-700 transition-all"
          >
            Sign Up
          </button>
        </Link>
      </form>
    </div>
        </div>
      </section>
      <div className="flex flex-wrap justify-center gap-6 p-8 py-12">
      {courseDetails.map((course: Course, index: number) => (
        <div
          key={index}
          className="relative w-full sm:w-[48%] lg:w-[23%] p-8 bg-white text-center rounded-2xl shadow-lg border-l-4 border-red-700 transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-red-500 opacity-20 rounded-2xl blur-lg z-[-1]"></div>

          {/* Course Icon */}
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto shadow-md">
            <img
              src={course.img}
              alt="Course Icon"
              width={parseInt(imgWidth2) || 50} // Ensure it's a number
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Course Details */}
          <b className="text-xl font-bold text-gray-900 block mt-4">{course.b}</b>
          <p className="text-sm text-gray-600 mt-2">{course.p}</p>
        </div>
      ))}
    </div>


      {/* Courses Grid */}
      <div className="text-center p-5  py-12"
       data-aos="zoom-in-up"
       data-aos-easing="linear"
       data-aos-duration="1000"
      >
        <h2 className="text-gray-300 text-xl font-semibold">Top Courses We Offer</h2>
        <h1 className="text-red-700 text-4xl font-bold mt-2">Explore 50+ Professional Courses</h1>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {TopSubjects.map((subject, index) => (
            <div key={index} className="flex items-center gap-4 bg-white shadow-lg p-5 rounded-lg w-80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
                <img src={subject.img} alt={subject.about} className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h1 className="text-gray-900 text-lg font-bold">{subject.about}</h1>
                <p className="text-gray-600 text-sm">{subject.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 p-2 bg-gray-100 gap-8">
      {/* Text Section */}
      <section className="flex-1 text-center md:text-left"
       data-aos="fade-down"
       data-aos-easing="linear"
       data-aos-duration="1000"
      >
        <p className="text-gray-700  hover:text-red-700 duration-300 ease-linear font-semibold">About</p>
        <h1 className="text-3xl font-bold text-red-800 hover:text-gray-700 duration-300 ease-linear mt-2">Advanced Diploma In Software Engineering</h1>
        <p className="text-gray-700 mt-4 leading-relaxed">
          The <strong>Advanced Diploma in Software Engineering (ADSE)</strong> is a
          <strong> cutting-edge program</strong> designed to equip students with expertise in
          <strong> Java, .NET, Linux, Python, Cloud Computing, IoT, Data Science, AI, Machine Learning,</strong>
          and other <strong>high-demand technologies.</strong> These skills are essential for shaping
          <strong> competent IT professionals.</strong>
        </p>
        <p className="text-gray-700 mt-2 leading-relaxed">
          Aptech collaborates with <strong>prestigious international institutions</strong> such as
          <strong> Lincoln University College (Malaysia), Middlesex University (London),</strong> and
          <strong> NCC Education (UK).</strong> Through the <strong>Credit Transfer Facility</strong>, students have the
          opportunity to <strong>study abroad</strong> at <strong>partner universities</strong> in the
          <strong> UK, Malaysia, Dubai, or Malta.</strong>
        </p>
        
        {/* Styled Button */}
        <Link to="/Adse">
        <button className="relative mt-6 w-36 p-3 h-14 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 overflow-hidden group transition-all duration-500">
          <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-800 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="absolute inset-0 bg-black rounded-md scale-110 group-hover:bg-red-900 group-hover:scale-100 transition-transform duration-500 blur-md" />
          
          {/* Rotating Background Layers */}
          <span className="absolute w-36 h-36 -top-10 -left-5 bg-red-200 rounded-full transform scale-0 group-hover:scale-150 group-hover:rotate-45 transition-all duration-700 ease-out opacity-0 group-hover:opacity-40" />
          <span className="absolute w-36 h-36 -top-10 -right-5 bg-red-400 rounded-full transform scale-0 group-hover:scale-150 group-hover:-rotate-45 transition-all duration-700 ease-out opacity-0 group-hover:opacity-40" />
          <span className="absolute w-36 h-36 bottom-0 left-1/2 -translate-x-1/2 bg-red-600 rounded-full transform scale-0 group-hover:scale-150 group-hover:rotate-90 transition-all duration-700 ease-out opacity-0 group-hover:opacity-40" />
          
          {/* Text Morphing */}
          <span className="relative transition-all duration-500 group-hover:opacity-0">Explore!</span>
          <span className="absolute inset-0 flex items-center justify-center text-red-200 font-extrabold opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100">
            Learn More!
          </span>
          
          {/* Glowing Outline */}
          <span className="absolute inset-0 border-2 border-red-500 rounded-md opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 shadow-lg shadow-red-500/30" />
        </button>
        </Link>
      </section>

      {/* Image Section */}
      <div className="flex-1 flex justify-center"
       data-aos="fade-up"
       data-aos-easing="linear"
       data-aos-duration="1000"
      >
        <img
          src="https://media.istockphoto.com/id/1874702491/photo/young-female-college-student-smiling-while-doing-homework-in-a-school-cafeteria.webp?a=1&b=1&s=612x612&w=0&k=20&c=12YuRiEvC6DzaSI-wTmC4jsd08YCSZnZqfBDw30XY_k="
          alt="Student studying"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
    <div className="container mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-gray-500 uppercase tracking-wide text-sm">Short-term Courses</p>
        <h2 className="text-3xl font-bold text-red-700">Other IT Courses We Offer</h2>
      </div>

      {/* Course Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <div className="overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-52 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
              <div className="flex items-center text-gray-600 mt-3">
                <Clock className="w-5 h-5 mr-2 text-gray-500" />
                <span>{course.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
 <div className="bg-yellow-500 p-5">
    
 <div className="relative flex flex-col items-center justify-center w-full max-w-md mx-auto p-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="relative flex w-80 flex-col rounded-xl bg-white text-gray-700 shadow-md"
        >
          {/* Blue Section with Image, Name, and Role */}
          <div className="relative mx-4 -mt-6 h-40 flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-yellow-500 to-red-600 text-white shadow-lg">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-16 h-16 rounded-full border-4 border-white shadow-md"
            />
            <h5 className="mt-2 text-lg font-semibold">{testimonials[index].name}</h5>
            <p className="text-sm">{testimonials[index].role}</p>
          </div>

          {/* White Section with Testimonial Message */}
          <div className="p-6">
            <p className="text-sm font-medium text-gray-700">{testimonials[index].message}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
          className="p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
        >
          ◀
        </button>
        <button
          onClick={() => setIndex((index + 1) % testimonials.length)}
          className="p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
        >
          ▶
        </button>
      </div>
    </div>
 </div>



<div className="container mx-auto p-6">
      {/* FAQ Section */}
      <div className="bg-red-700 text-center p-5">
        <h2 className="text-2xl m-2 text-white">FREQUENTLY ASKED QUESTIONS</h2>
        <h1 className="text-4xl m-2 text-white font-sans">
          What people want to know?
        </h1>
      </div>

      <div className="max-w-2xl mx-auto mt-6">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <button
              className="w-full flex justify-between items-center text-lg font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Contact Form */}
    <div className=" flex justify-center  m-5 content-center ">
      <Link to="/Contact">

    <button className="relative w-36 p-3 h-14 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 overflow-hidden group transition-all duration-500">
    <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-800 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
    <span className="absolute inset-0 bg-black rounded-md scale-110 group-hover:bg-red-900 group-hover:scale-100 transition-transform duration-500 blur-md" />

    {/* Rotating Background Layers */}
    <span className="absolute w-36 h-36 -top-10 -left-5 bg-red-200 rounded-full transform scale-0 group-hover:scale-150 group-hover:rotate-45 transition-all duration-700 ease-out opacity-0 group-hover:opacity-40" />
    <span className="absolute w-36 h-36 -top-10 -right-5 bg-red-400 rounded-full transform scale-0 group-hover:scale-150 group-hover:-rotate-45 transition-all duration-700 ease-out opacity-0 group-hover:opacity-40" />
    <span className="absolute w-36 h-36 bottom-0 left-1/2 -translate-x-1/2 bg-red-600 rounded-full transform scale-0 group-hover:scale-150 group-hover:rotate-90 transition-all duration-700 ease-out opacity-0 group-hover:opacity-40" />

    {/* Text Morphing */}
    <span className="relative transition-all duration-500 group-hover:opacity-0">Contact us!</span>
    <span className="absolute inset-0 flex items-center justify-center text-red-200 font-extrabold opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100">
      Contact!
    </span>

    {/* Glowing Outline */}
    <span className="absolute inset-0 border-2 border-red-500 rounded-md opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 shadow-lg shadow-red-500/30" />
            </button>
            </Link>
    </div>
      {/* <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md">
        <h3 className="text-lg font-bold text-gray-800">Contact Us Anytime</h3>
        <h2 className="text-3xl font-semibold text-red-700 mt-2">
          Send Us a Message
        </h2>
        <form className="mt-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border rounded-md my-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md my-2"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-md my-2"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 border rounded-md my-2"
          ></textarea>
            <Link to="/ThankYou">  
          <button
            type="submit"
            className="w-full bg-red-700 text-white py-3 rounded-md mt-3 hover:bg-red-800"
          >
            SUBMIT
          </button>
          </Link>
        </form>
      </div> */}
    </div>
    
    </>
  );
};

export default Home;
