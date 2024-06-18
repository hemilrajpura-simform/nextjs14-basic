"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};
const page = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://fakestoreapi.com/products", {
        cache: "no-store",
      });
      const data = await res.json();
      setProducts(data);
    };

    getData();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center mb-8">Product Main Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-lg">
            <Link href={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {product.title}
              </h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-gray-800 mt-2">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
