import React from "react";
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import products from "../products.json";

export default function ProductCard({ product }) {
  const [bagItems, setBagItems] = useState([]);

  const addToBag = (p) => {
    // setBagItems([...bagItems, { ...p, qty: 1 }]);
    // console.log(p);

    const exist = bagItems.find((item) => {
      Number(item.id) === Number(p.id);
      // if (item.id === undefined) {
      //   // item.id = "-99";
      //   console.log("undefineddd");
      // } else item.id === p.id;
    });
    console.log(exist);
    if (exist != undefined) {
      setBagItems(
        bagItems.map((p) => {
          console.log(p.id + " " + product.id);
          p.id === product.id ? { ...exist, qty: p.qty + 1 } : p;
        })
      );
    } else setBagItems([...bagItems, { ...p, qty: 1 }]);

    console.log(bagItems);
    console.log(bagItems.length);
  };

  useEffect(() => {
    console.log("useEffect state", bagItems);
  }, [bagItems]);

  return (
    <>
      <div className="relative mb-8 select-none">
        <Link href={`/products/${product.id}`} passHref key={product.id}>
          <div className="group cursor-pointer transition duration-200 delay-50 hover:scale-99 ">
            <div className="">
              <Image
                src={product.src}
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
              onClick={() => addToBag(product)}
            >
              Add to bag
            </button>
          </div>
        </Link>

        <p className="text-right font-medium absolute bottom-6 right-0 bg-white p-1">
          {product.price}
        </p>

        <p className="text-center">{product.name}</p>
      </div>
    </>
  );
}
