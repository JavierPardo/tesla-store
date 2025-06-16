export const ServiceIconContainer: React.FC<{ iconClass: string }> = ({ iconClass }) => (
  <div className="p-4 bg-blue-100 text-blue-600 rounded-full mb-4">
    <i className={`${iconClass} text-3xl`}></i>
  </div>
);