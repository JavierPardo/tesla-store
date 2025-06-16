import { BackButton } from "@/components/atoms/BackButton";
import { ProductImageGallery } from "@/components/molecules/ProductImageGallery";
import { ProductSpecificationsTable } from "@/components/molecules/ProductSpecificationsTable";
import { StarRating } from "@/components/molecules/StarRating";
import { getProductById } from "@/service/products";

interface ProductDetailPageProps {
    params: Promise<{ id: string }>;
}

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
    // Find the product data using the ID. In a real Next.js app, this data
    // would typically be passed via getStaticProps or getServerSideProps for better performance/SEO.
    const { id } = await params;
    console.log("ProductDetailPage - ID:", id); // Log the ID for debugging purposes.
    const product = await getProductById(id); // Fetch the product data based on the ID.

    // If product is not found (e.g., invalid ID in URL), display a fallback message.
    if (!product) {
        return (
            <div className="container mx-auto py-24 px-6 md:px-8 lg:px-12 text-center text-gray-700">
                <BackButton /> {/* Allows the user to go back to the previous page. */}
                <h2 className="text-2xl font-bold mt-8">Producto no encontrado.</h2>
                <p className="mt-4">El ID de producto '{id}' no corresponde a ningún producto en nuestro catálogo.</p>
            </div>
        );
    }

    // Main content for the product detail page.
    return (
        <div className="container mx-auto py-12 px-6 md:px-8 lg:px-12">
            <BackButton /> {/* Back button at the top */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10 flex flex-col md:flex-row gap-8 items-start">
                {/* Product Image Gallery or Fallback Image */}
                {product.galleryImages && product.galleryImages.length > 0 ? (
                    <ProductImageGallery images={product.galleryImages} />
                ) : (
                    <div className="w-full md:w-1/2 lg:w-2/5 p-4 flex justify-center items-center h-96 bg-gray-200 rounded-lg">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x450/cccccc/333333?text=Imagen+no+disponible'; }}
                        />
                    </div>
                )}

                {/* Product Details Section */}
                <div className="w-full md:w-1/2 lg:w-3/5 p-4">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-3">{product.name}</h1>
                    <p className="text-gray-600 text-lg mb-4">{product.description}</p>
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="text-blue-600 font-bold text-3xl">${product.price.toFixed(2)}</span>
                        <div className="flex items-center">
                            <StarRating rating={product.rating} /> {/* Star rating molecule */}
                            <span className="text-gray-500 text-sm ml-2">({product.reviewsCount} reseñas)</span>
                        </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        {product.longDescription || 'Descripción detallada no disponible.'}
                    </p>


                    {/* Product Specifications Table (if specs are available) */}
                    {product.specs && Object.keys(product.specs).length > 0 && (
                        <ProductSpecificationsTable specs={product.specs} />
                    )}
                </div>
            </div>
        </div>
    );
};

export async function generateStaticParams() {

    return [{ id: 'p1', }, { id: 'p2' }, { id: 'p3' }];
}

export default ProductDetailPage;
