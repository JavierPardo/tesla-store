export const CardButton: React.FC<{ children: React.ReactNode; href?: string }> = ({ children, href = "#" }) => (
  <a
    className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium w-full hover:bg-blue-700 transition-colors duration-300"
    href={href}
  >
    {children}
  </a>
);