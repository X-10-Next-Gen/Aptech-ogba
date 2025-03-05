import { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the mailto URL with the form data
    const mailtoLink = `mailto:contact@aptechogbacenter.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(formData.email)}%0APhone:%20${encodeURIComponent(formData.phone)}%0AMessage:%20${encodeURIComponent(formData.message)}`;

    // Redirect the user to the mailto link
    window.location.href = mailtoLink;

    console.log("Form Submitted:", formData);
  };

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="bg-yellow-500 py-16 text-center text-white relative">
        <h1 className="text-5xl font-bold">Contact Us</h1>
      </div>

      {/* Visit Our Centre */}
      <div className="text-center my-10">
        <h2 className="text-2xl font-bold text-red-700">Visit Our Centre</h2>
        <div className="mt-6 w-full flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.075158333661!2d3.330814773994377!3d6.637588593356876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91e0f25e6fb7%3A0xa6d996600f665ed6!2sThe%20Geek%20Center%20Ogba%20(APTECH)!5e0!3m2!1sen!2sng!4v1741131552412!5m2!1sen!2sng"
            className="w-full md:w-3/4 h-[400px] md:h-[500px] border-0 shadow-lg rounded-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full flex flex-col items-center my-16 px-6">
        <h3 className="text-lg uppercase tracking-wide text-gray-500">Contact Us Anytime</h3>
        <h2 className="text-3xl font-bold text-red-700 mt-2">Send Us A Message</h2>

        <form onSubmit={handleSubmit} className="w-full max-w-lg mt-8 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md h-32 focus:ring-2 focus:ring-red-500"
          ></textarea>
          <Link to="/ThankYou">
          <button
            type="submit"
            className="w-full bg-red-700 text-white py-3 rounded-md font-semibold hover:bg-red-800 transition duration-300"
          >
            Submit
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
