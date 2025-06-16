import { Product } from "@/types";
import { ProductCard } from "../molecules/ProductCard";

interface ProductGridProps {
    products: Product[];
    onViewDetails: (product: Product) => void; // Pasa la función para ver detalles
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onViewDetails }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};
