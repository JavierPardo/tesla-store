export const SearchInput: React.FC = () => (
  <div className="relative hidden sm:block">
    <input
      type="text"
      placeholder="Buscar productos..."
      className="py-2 pl-10 pr-4 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
    />
    <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
  </div>
);