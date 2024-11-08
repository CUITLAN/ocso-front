import { API_URL } from '@/constants';
import { Product } from '@/entities';
import authHeaders from '@/helpers/Auth.headers';
import React from 'react';
import ProductCard2 from '../_components/ProductCard2';

const ProductPage = async ({ params }: { params: { id: string } }) => {
  try {
    const response = await fetch(`${API_URL}/products`, {
      headers: {
        ...authHeaders(),
        'Content-Type': 'application/json', 
      },
      next: {
        tags: ['dashboard:products'],
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch products:', response.statusText);
      return <div>Error al cargar productos</div>;
    }

    const products: Product[] = await response.json();

    return (
      <div>
        {products.map((product: Product) => (
          <ProductCard2  product={product} />
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return <div>Error al cargar productos</div>;
  }
};

export default ProductPage;
