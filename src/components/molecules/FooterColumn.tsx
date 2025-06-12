import React from 'react';

interface FooterColumnProps {
  title: string;
  links?: { label: string; href: string }[];
  children?: React.ReactNode; // Para contenido personalizado como el logo y descripción o contacto
}

export default function FooterColumn({ title, links, children }: FooterColumnProps) {
  return (
    <div>
      <h4 className="text-xl font-semibold mb-4 text-white">{title}</h4>
      {links && (
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-slate-400 hover:text-white transition duration-200 ease-in-out">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
}

