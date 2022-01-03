import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Products from "./products.json";
import ProductCard from "./components/ProductCard";

import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <>
      <Head>
        <title>Pose. | FREEDOM-focused Clothing brands</title>
      </Head>
      {currentUser && (
        <h2 className="p-2 text-xl">Welcome!, {currentUser.email}</h2>
      )}
      <h1 className="px-10 py-7 text-5xl text-green-600">
        EXPLORE YOUR FREEDOM.
      </h1>
      <p className="px-10 py-7 text-2xl text-gray-800">
        With this season’s collections, your imagination is endless. Explore our
        new collections starting from today.
      </p>
      <div className=" lg:mx-18 items-center justify-center mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-12 ">
          {Products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
