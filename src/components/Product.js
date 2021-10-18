import React from "react";
import { Link } from "gatsby";

function Product({ product }) {
  return (
    <div className={`my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5`}>
      <article className="overflow-hidden rounded-lg border pb-2 shadow transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        {product.featured === 1 && (
          <div className="absolute px-2 top-0 rounded flex right-0 text-xs bg-green-500 text-white z-50">
            Verified
          </div>
        )}
        {/* <div className="bg-gray-100">
          <Link
            to={`/product/${product.slug}`}
            className="text-center"
            aria-label={`product-${product.slug}`}
          >
            <img
              alt={`${product.slug}`}
              className={``}
              src={product.picture ? product.product_img : "/#"}
              layout="responsive"
              width={150}
              height={150}
              objectFit="contain"
              priority
            />
          </Link>
        </div> */}
        <header className="flex items-center justify-between leading-tight p-2 md:px-4">
          <div className="text-md">
            <Link
              to={`/product/${product.slug}`}
              className="block font-semibold hover:underline text-gray-700 my-2"
            >
              {product.name.length > 18
                ? product.name.substring(0, 18) + "..."
                : product.name}
            </Link>

            <Link
              to={`/company/${product.company ? product.company.slug : "#"}`}
              className="flex items-center hover:underline text-black my-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-sm text-gray-700 capitalize">
                {product.company ? "" + product.company.c_name : ""}
              </p>
            </Link>
            <span className="text-sm text-gray-700 capitalize">
              {" "}
              {product.company.city}
            </span>
            <p className="text-gray-700 mt-1">
              {product.users && (
                <span
                  dangerouslySetInnerHTML={{
                    __html: product.users.currency.html_code,
                  }}
                />
              )}
              {product.price}
            </p>
          </div>
        </header>
      </article>
    </div>
  );
}

export default Product;
