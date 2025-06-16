import { ProductGridSection } from '@/components/organisms/ProductGridSection'
import { fetchSuppliers } from '@/service/suppliers';
import React from 'react'

async function Page() {
    const supplies = await fetchSuppliers();
    return (<ProductGridSection
        id="insumos"
        title="Nuestros Insumos"
        products={supplies}
        isSupplySection={true}
        bgColorClass="bg-blue-50"
        buttonText="Ver Todos los Insumos"
        buttonHref="#"
        onViewDetails={() => { }}
    />
    )
}

export default Page