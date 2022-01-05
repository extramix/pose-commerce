import React from "react";
import { useEffect, useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import { addToCart } from "../../store/Actions";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;

  //FIXME:
  return (
    <>
      <div className="relative mb-8 select-none">
        <Link href={`/products/${product.id}`} passHref key={product.id}>
          <div className="rounded-2xl shadow hover:shadow-md group cursor-pointer transition duration-200 delay-50 hover:scale-99">
            <div className="">
              <Image
                src={product.img}
                className="rounded-2xl"
                alt="Leather Jacket"
                width="480"
                height="640"
                layout="responsive"
              />
              <p className="text-right font-medium absolute bottom-5 right-0 bg-white p-1">
                $ {product.price}
              </p>
            </div>
            <button
              className="group-hover:opacity-100 hover:bg-green-500 hover:text-white hover:transition show absolute top-4 right-4 bg-white text-black font-bold
              md:p-4 p-4 rounded-full align-center opacity-0 transition-opacity"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addToCart(product, cart));
              }}
            >
              Add to bag
            </button>
          </div>
        </Link>

        <p className="group-hover:bg-green-500 text-center font-medium">
          {product.name}
        </p>
      </div>
    </>
  );
}
