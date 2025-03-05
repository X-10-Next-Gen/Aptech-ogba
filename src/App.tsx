import {   Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About"; // ✅ Ensure this is correctly imported
import Book from "./assets/book-icon.png";
import Contact from "./assets/contact-card-icon.png";
import Certificate from "./assets/certificate-icon.png";
import Computer from "./assets/computer-icon.png";
import Courses from "./Pages/Courses";
import Adse from "./Pages/Adse";
import Cpism from "./Pages/Cpism";
import ThankYou from "./Pages/ThankYou";
// import Partners from "./Pages/Partners";

function App() {
  const courseDetails = [
    {
      img: Book,
      b: "Professional Courses",
      p: "Top courses to start an IT career",
    },
    {
      img: Computer,
      b: "100% Practicals",
      p: "Understand programming better with practical knowledge.",
    },
    {
      img: Contact,
      b: "Highly Qualified Trainers",
      p: "Learn with experts in the industry",
    },
    {
      img: Certificate,
      b: "International Degree",
      p: "Save time & money on an international degree",
    },
  ];

  const imgWidth = "150px";
  const imgWidth2 = "50px";

  return (
<>
      <Header imgWidth={imgWidth} />
      <Routes>
        <Route path="/" element={<Home imgWidth2={imgWidth2} courseDetails={courseDetails} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/partners" element={<Partners />} /> */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/adse" element={<Adse />} />
        <Route path="/cpism" element={<Cpism />} />
        <Route path="/ThankYou" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>  
      <Footer imgWidth={imgWidth} />
</>
  );
}

export default App;
