import React, { useState } from "react";

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

const Adse: React.FC = () => {
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
    <div className="bg-gray-100 font-sans overflow-x-hidden">
      {/* Header */}
      <div className="container mx-auto text-center py-10 px-6">
        <h1 className="text-4xl font-extrabold text-red-700">
          Advanced Diploma in Software Engineering
        </h1>
        <p className="text-lg text-gray-700 mt-2">
          Build your career in IT and software development with globally recognized certifications.
        </p>
      </div>

      {/* Contact Section */}
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
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-red-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Adse;
