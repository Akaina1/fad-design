import React from 'react';
import Link from 'next/link';

interface NavButtonProps {
  href: string;
  label: string;
}

const NavButton: React.FC<NavButtonProps> = ({ href, label }) => {
  return (
    <Link href={href}>
      <button className="inline-flex min-w-[200px] h-14 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(130deg,#2D3748,40%,#19202b,70%,#2D3748)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mb-12 hover:scale-110">
        <p className="text-white">{label}</p>
      </button>
    </Link>
  );
};

export default NavButton;