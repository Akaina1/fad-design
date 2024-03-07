// NavButton.tsx
import React from 'react';
import Link from 'next/link';

interface NavButtonProps {
  href: string;
  label: string;
}

const NavButton: React.FC<NavButtonProps> = ({ href, label }) => {
  return (
    <Link href={href}>
      <button className="inline-flex min-w-[200px] h-14 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mb-12">
        <p className="text-white">{label}</p>
      </button>
    </Link>
  );
};

export default NavButton;