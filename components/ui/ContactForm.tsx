"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    affiliation: "",
    message: "Please enter your message here.",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here (e.g., API call or state management)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center uppercase">
        Join the Conference
      </h2>

      {/* Name Field */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 font-semibold mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          required
        />
      </div>

      {/* First Name Field */}
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block text-gray-700 font-semibold mb-2"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          required
        />
      </div>

      {/* Affiliation Field */}
      <div className="mb-4">
        <label
          htmlFor="affiliation"
          className="block text-gray-700 font-semibold mb-2"
        >
          Affiliation
        </label>
        <input
          type="text"
          id="affiliation"
          name="affiliation"
          value={formData.affiliation}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          required
        />
      </div>

      {/* Message Field */}
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-700 font-semibold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          rows={4}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-4 py-2 bg-orange text-secondary font-semibold rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-orange"
      >
        Register
      </button>
    </form>
  );
};

export default ContactForm;
