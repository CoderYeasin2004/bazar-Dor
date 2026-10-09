import { IProduct } from '@/types/productType';
import React from 'react';

const AllProducts = ({products}:{products: IProduct[]} ) => {
    console.log(products)


    return (
        <div>
            {
                // products.map(product => <ProductCard key={product}></ProductCard>)
            }
        </div>
    );
};

export default AllProducts;