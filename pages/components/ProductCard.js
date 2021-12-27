import React from "react";

import Image from "next/image";
export default function ProductCard({ src, price, name }) {
  return (
    <div className="relative cursor-pointer mb-8 transition duration-200 delay-50 hover:scale-95">
      <Image
        src={src}
        className="e"
        alt="Leather Jacket"
        width="480"
        height="640"
        layout="responsive"
      />
      <p className="text-right font-medium absolute bottom-6 right-0 bg-white p-1">
        {price}
      </p>
      <p className="text-center">{name}</p>
    </div>
  );
}
