"use client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    affiliation: "",
    message: "", // Message field empty by default
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Send data to the `/api/send-email` endpoint
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error during registration");
      }

      // Display a success toast
      toast({
        title: "Registration successful!",
        description: "Your submission has been sent successfully.",
      });

      // Clear the form after successful submission
      setFormData({
        lastname: "",
        firstname: "",
        email: "",
        affiliation: "",
        message: "", // Message field cleared after submission
      });
    } catch (err) {
      setError((err as Error).message);

      // Display an error toast if submission fails
      toast({
        title: "Error",
        description: "An error occurred while sending your submission.",
        variant: "destructive", // Display the toast in red (error)
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto bg-white rounded-lg"
    >
      <h2 className="text-4xl font-bold mb-6 text-center uppercase">
        Join the Conference
      </h2>

      {/* Last Name Field */}
      <div className="mb-4">
        <label
          htmlFor="lastname"
          className="block text-gray-700 font-semibold mb-2"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          required
        />
      </div>

      {/* First Name Field */}
      <div className="mb-4">
        <label
          htmlFor="firstname"
          className="block text-gray-700 font-semibold mb-2"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          required
        />
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 font-semibold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
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

      {/* Message Field (Optional) */}
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
          placeholder="You may enter a message here if needed."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          rows={4}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-4 py-2 bg-orange text-secondary font-semibold rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-orange"
        disabled={loading}
      >
        {loading ? "Sending..." : "Register"}
      </button>
    </form>
  );
};

export default ContactForm;
