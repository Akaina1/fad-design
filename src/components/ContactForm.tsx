// components/ContactForm.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      // Send form data to the backend
      const response = await axios.post(
        'http://localhost:3001/contact/send-email',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
        // You can handle the response as needed (e.g., show a success message)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show an error message)
    }
  };  

  return (
    <div className="min-w-full mx-auto m-8 p-4">
      <h1 className="text-black text-4xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="min-w-full mx-auto m-8 p-4 border-2 shadow-xl">
        <label className="block mb-2 text-gray-700">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border-b-2 focus:outline-none focus:border-blue-500"
          />
        </label>
        <label className="block mb-2 text-gray-700">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border-b-2 focus:outline-none focus:border-blue-500"
          />
        </label>
        <label className="block mb-2 text-gray-700">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-2 border-b-2 focus:outline-none focus:border-blue-500"
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;