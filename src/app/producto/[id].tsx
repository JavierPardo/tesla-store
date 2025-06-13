// pages/producto/[id].tsx
import { GetStaticProps, GetStaticPaths } from 'next';
import { Product } from '../../types/product';
import { fetchProducts } from '../../utils/api'; // Your data fetching utility
import Layout from '@/components/layout/Layout';
import Button from '@/components/common/Button';

interface ProductDetailProps {
  product: Product;
}

const ProductDetailPage: React.FC<ProductDetailProps> = ({ product }) => {


  if (!product) {
    return (
      <Layout>
        <div className="text-center text-gray-600 mt-8">
          <p>Cargando información del producto...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow-xl p-8 md:flex md:space-x-8">
        <div className="md:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

          {/* Opcional: Rating */}
          {product.rating && (
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-6 w-6 ${i < product.rating! ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">({product.rating.toFixed(1)})</span>
            </div>
          )}

          <div className="flex space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md">
              Agregar al Carrito
            </Button>
            <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-md">
              Preguntar sobre el producto
            </Button>
          </div>

          {/* Sección de características o especificaciones técnicas */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Especificaciones Técnicas</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Tecnología: {product.category === 'impresora' ? 'FDM' : 'N/A'}</li>
              <li>Volumen de impresión: 220x220x250mm</li>
              <li>Materiales compatibles: PLA, ABS, PETG</li>
              {/* Agrega más especificaciones según el tipo de producto */}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProducts('impresoras'); // Fetch all products
  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false }; // fallback: false means 404 for unlisted paths
  // Use fallback: true or 'blocking' if you want to generate pages on demand (not suitable for GitHub Pages static export)
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.id as string;
  const allProducts = await fetchProducts('impresoras');
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product,
    },
  };
};

export default ProductDetailPage;