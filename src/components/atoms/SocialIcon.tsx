export const SocialIcon: React.FC<{ href: string; iconClass: string }> = ({ href, iconClass }) => (
  <a href={href} className="text-gray-300 hover:text-blue-400 text-xl transition-colors duration-200">
    <i className={iconClass}></i>
  </a>
);