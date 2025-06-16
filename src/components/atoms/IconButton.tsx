export const IconButton: React.FC<{ iconClass: string; label?: string; count?: number; href?: string }> = ({ iconClass, label, count, href = '#' }) => (
  <a href={href} className="text-gray-700 hover:text-blue-600 text-xl relative">
    <i className={iconClass}></i>
    {count !== undefined && count > 0 && (
      <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
        {count}
      </span>
    )}
    {label && <span className="sr-only">{label}</span>}
  </a>
);