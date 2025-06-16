import { HeroSection } from "@/components/organisms/HeroSection";
import { ProductGridSection } from "@/components/organisms/ProductGridSection";
import { ServiceSection } from "@/components/organisms/ServiceSection";
import { fetchPrinters } from "@/service/products";
import { fetchSuppliers } from "@/service/suppliers";

export const HomePage = async () => {
    const printers=await fetchPrinters();
    const supplies = await fetchSuppliers();
 return <>
    <HeroSection />
    <ProductGridSection
      id="impresoras"
      title="Nuestras Impresoras 3D"
      products={printers}
      buttonText="Ver Todas las Impresoras"
      buttonHref="#"
      onViewDetails={() => {}}
    />
    <ProductGridSection
      id="insumos"
      title="Nuestros Insumos"
      products={supplies}
      isSupplySection={true}
      bgColorClass="bg-blue-50"
      buttonText="Ver Todos los Insumos"
      buttonHref="#"
      onViewDetails={() => {}}
    />
    <ServiceSection />
  </>
};
