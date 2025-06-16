import { useRouter } from "next/navigation";

export const PrimaryButton: React.FC<{ href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' }> = ({ href, children, variant = 'primary' }) => {
  const router = useRouter();
  const baseClasses = "py-3 px-8 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300";
  const primaryClasses = "bg-white text-blue-600 hover:bg-gray-100";
  const secondaryClasses = "bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600";

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses}`} onClick={handleClick}>
      {children}
    </a>
  );
};
