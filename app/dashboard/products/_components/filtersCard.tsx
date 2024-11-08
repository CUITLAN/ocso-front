"use client";
import { Product } from "@/entities";
import Link from "next/link";
import ProductCard2 from "./ProductCard2";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";

export default function FilterCard({ products }: { products: Product[] }) {
  const [filtered, setFilter] = useState<string>("");
  const [productsList, setProductsList] = useState<Product[]>(products);

  useEffect(() => {
    const filteredProducts = products.filter((product: Product) => {
      return product.productName.toLowerCase().includes(filtered.toLowerCase());
    });
    setProductsList(filteredProducts);
  }, [filtered, products]); 

  return (
    <div className="min-h-[90vh] max-h-[90vh] overflow-y-auto flex flex-col gap-8 border-r-orange-200 px-10 border-r-2 pt-10">
      <Input
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        label="Nombre del Producto"
      />
      {productsList.map((product: Product) => (
        <Link
          href={{ pathname: `/dashboard/products/${product.productId}` }}
          key={product.productId}
        >
          <ProductCard2 product={product} />
        </Link>
      ))}
    </div>
  );
}
