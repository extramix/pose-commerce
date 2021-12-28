import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import products from "../products.json";

const Product = () => {
  const router = useRouter();
  const { productId } = router.query;
  const product = products.find(
    (product) => parseInt(productId) === parseInt(product.id)
  );

  const onClick = () => console.log("clicked");

  return (
    <>
      <Link href="/" passHref>
        <span className="cursor-pointer underline p-5">Back</span>
      </Link>
      <div className="grid grid-cols-2">
        <div className="mt-10 ml-10">
          <Image
            src={product.src}
            className="transition delay-50 duration-200 ease-in-out"
            alt="Leather Jacket"
            width="480"
            height="640"
            layout="responsive"
          />
        </div>
        <div className="p-16">
          <p className="text-4xl mb-2">{product.name}</p>
          <p className="text-xl mb-4">{product.description}</p>
          <p className="text-xl font-bold mb-7">{product.price}</p>
          <button
            onClick={onClick}
            className="bg-green-500 hover:bg-green-400 hover:border-green-400 text-white font-bold py-2 px-4 border border-green-500 rounded"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
