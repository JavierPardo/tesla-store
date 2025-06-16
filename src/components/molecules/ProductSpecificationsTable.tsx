export const ProductSpecificationsTable: React.FC<{ specs: { [key: string]: string } }> = ({ specs }) => (
  <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
    <h4 className="font-bold text-xl mb-4 text-gray-800">Especificaciones Técnicas</h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
      {Object.entries(specs).map(([key, value]) => (
        <div key={key} className="flex justify-between items-center border-b border-gray-200 pb-2 last:border-b-0 last:pb-0">
          <span className="font-medium text-gray-700">{key}:</span>
          <span className="text-gray-600">{value}</span>
        </div>
      ))}
    </div>
  </div>
);