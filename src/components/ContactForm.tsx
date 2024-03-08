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
      const response = await axios.post('/api/contact/send-email', formData);
      console.log(response.data);
      // You can handle the response as needed (e.g., show a success message)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
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
  );
};

export default ContactForm;