"use client";
import React, { useEffect, useState } from "react";
type Product = {
  id: number;
  title: string;
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

  console.log(
    products.map((item) => {
      return item.title;
    })
  );

  return (
    <>
      <>Product Main Page</>
      <div>
        {products.map((item) => {
          return <p>{item.title}</p>;
        })}
      </div>
    </>
  );
};

export default page;
