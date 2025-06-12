import React, { useState } from 'react';

interface NavLinkProps {
  label: string;
  href: string;
  dropdownItems?: { label: string; href: string }[];
}

export default function NavLink({ label, href, dropdownItems }: NavLinkProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <a
        href={href}
        className="text-slate-700 hover:text-indigo-600 font-medium px-3 py-2 rounded-md transition duration-200 ease-in-out"
      >
        {label}
      </a>
      {dropdownItems && isOpen && (
        <div className="absolute bg-white shadow-lg rounded-md mt-2 w-48 py-2 z-10">
          {dropdownItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-md transition duration-200 ease-in-out"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

