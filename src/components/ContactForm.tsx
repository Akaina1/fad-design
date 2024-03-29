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
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitDisabled(true);

      
      await axios.post(
        'https://fad-backend.fly.dev/contact/send-email',
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

      // Clear form fields
      setFormData({ name: '', email: '', message: '' });

      // Update state to show 'Submitted' and change button style
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitDisabled(false);
    }
  };

  return (
    <div className="min-w-full mx-auto m-8 p-4 bg-gray-700 border-1 shadow-xl">
      <h1 className="text-white text-4xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="min-w-full mx-auto m-8 p-4">
        <label className="block mb-2 text-white text-lg">
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
        <label className="block mb-2 text-white text-lg">
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
        <label className="block mb-2 text-white text-lg">
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
        {isSubmitted ? (
          <p className="text-green-500">Submitted</p>
        ) : (
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none"
            disabled={isSubmitDisabled}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;