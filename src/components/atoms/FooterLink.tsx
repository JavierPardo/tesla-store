export const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li className="mb-2">
    <a href={href} className="hover:text-blue-400 transition-colors duration-200">
      {children}
    </a>
  </li>
);