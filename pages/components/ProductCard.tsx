import React from "react";
import { useEffect, useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import { addToCart } from "../../store/Actions";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;

  return (
    <>
      <div className="relative mb-8 select-none">
        <Link href={`/products/${product.id}`} passHref key={product.id}>
          <div className="group cursor-pointer transition duration-200 delay-50 hover:scale-99 ">
            <div className="">
              <Image
                src={product.img}
                className="e"
                alt="Leather Jacket"
                width="480"
                height="640"
                layout="responsive"
              />
            </div>
            <button
              className="group-hover:opacity-100 show absolute bottom-8 left-2 bg-white text-black font-bold
              md:p-4 p-1 rounded-lg align-center opacity-0 transition-opacity"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addToCart(product, cart));
              }}
            >
              Add to bag
            </button>
          </div>
        </Link>

        <p className="text-right font-medium absolute bottom-6 right-0 bg-white p-1">
          ${product.price}
        </p>

        <p className="text-center">{product.name}</p>
      </div>
    </>
  );
}
