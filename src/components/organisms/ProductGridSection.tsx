import { Product } from "@/types";
import { ProductCard } from "../molecules/ProductCard";
import { SectionTitle } from "../atoms/SectionTitle";

interface ProductGridSectionProps {
  id: string;
  title: string;
  products: Product[];
  isSupplySection?: boolean;
  bgColorClass?: string;
  buttonText: string;
  buttonHref: string;
  onViewDetails: (product: Product) => void;
}

export const ProductGridSection: React.FC<ProductGridSectionProps> = ({ id, title, products, isSupplySection = false, bgColorClass = '', buttonText, buttonHref }) => (
  <section id={id} className={`py-12 px-6 md:px-8 lg:px-12 ${bgColorClass}`}>
    <div className="container mx-auto">
      <SectionTitle>{title}</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} isSupply={isSupplySection} />
        ))}
      </div>
      <div className="text-center mt-12">
        <a href={buttonHref} className="bg-transparent text-blue-600 border border-blue-600 py-3 px-8 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
          {buttonText}
        </a>
      </div>
    </div>
  </section>
);