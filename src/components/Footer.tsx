// Footer.tsx
import React from 'react';
import '../app/globals.css';


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white py-1 text-center">
      <p>&copy; {currentYear} Fad Design. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
