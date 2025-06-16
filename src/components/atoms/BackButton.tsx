'use client';
import { useRouter } from "next/navigation";

export const BackButton: React.FC = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()} // Go back to the previous page
      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-6 font-semibold"
    >
      <i className="fas fa-arrow-left mr-2"></i> Volver
    </button>
  );
};