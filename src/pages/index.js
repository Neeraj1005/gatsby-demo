import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Product from "../components/Product";

const IndexPage = () => {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const url = `https://digitalcrm.com/crm/api/v1/products?unique=false&sort=18&featured=false`
    const response = await fetch(url);
    const result = await response.json();
    setProduct(result.products);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <main className="antialiased font-primary">
      <div className="mb-0 mx-auto px-4 md:px-12">
        <h2>
          <Link
            to="product"
            className="text-lg font-bold hover:underline text-gray-700 uppercase"
          >
            Product List
          </Link>
          <Link
            to="coming_soon"
            className="ml-4 text-lg font-bold hover:underline text-gray-700 uppercase"
          >
            Click here to new page
          </Link>
        </h2>
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {product ? (
            <>
              {product.map((product) => (
                <Product key={product.pro_id} product={product} />
              ))}
            </>
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
