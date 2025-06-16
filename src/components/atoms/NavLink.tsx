'use client';
import { useRouter } from "next/navigation";

export const NavLink: React.FC<{ href: string; children: React.ReactNode; isAnchor?: boolean }> = ({ href, children, isAnchor = false }) => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAnchor) {
      // For internal anchors like #impresoras
      const section = document.getElementById(href.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      router.push('/'); // Ensure we are on the home page path
    } else {
      router.push(href);
    }
  };
  return (
    <a href={href} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200" onClick={handleClick}>
      {children}
    </a>
  );
};