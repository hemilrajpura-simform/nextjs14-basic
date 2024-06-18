import React from "react";

type Params = {
  productId: number;
};

type ProductDetailsProps = {
  params: Params;
};

const fetchProductItem = async (id: number) => {
  try {
    const apiRes = await fetch(`http://fakestoreapi.com/products/${id}`);
    const result = await apiRes.json();
    return result;
  } catch {
    throw new Error("Error");
  }
};

const ProductItem = async ({ params }: ProductDetailsProps) => {
  const product = await fetchProductItem(params.productId);
  console.log(params.productId);

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-200 mb-4">
            {product.title}
          </h1>
          <p className="text-lg text-gray-300 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-gray-500 font-semibold mr-2">Price:</span>
            <span className="text-xl text-gray-500">${product.price}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-500 font-semibold mr-2">Category:</span>
            <span className="text-gray-300">{product.category}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-500 font-semibold mr-2">Brand:</span>
            <span className="text-gray-300">{product.brand}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-500 font-semibold mr-2">
              Availability:
            </span>
            <span className="text-gray-300">{product.availabilityStatus}</span>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
