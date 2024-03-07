// NavBar.tsx
import React from 'react';
import NavButton from './NavButton'; // Adjust the path based on your project structure
import '../app/globals.css';

const NavBar: React.FC = () => {
  return (
    <nav className="flex flex-col items-center pt-10">
      <NavButton href="/" label="Home" />
      <NavButton href="/Portfolio" label="Portfolio" />
      <NavButton href="/AboutUs" label="About Us" />
      <NavButton href="/ContactUs" label="Contact Us" />
      <NavButton href="/Team" label="Our Team" />
    </nav>
  );
};

export default NavBar;
