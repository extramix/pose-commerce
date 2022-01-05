import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//  import products from "./products.json";
import ProductCard from "../components/ProductCard";

import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";

import { promises as fs } from "fs";
import path from "path";

export default function Home({ products }) {
  const { currentUser } = useAuth();

  console.log(typeof products);
  console.log(products);
  //FIXME:
  const popProducts = () => {
    for (let i = 0; i < products.length; i++) {
      {
        [products].map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ));
      }
    }
  };

  return (
    <>
      <Head>
        <title>Pose. | FREEDOM-focused Clothing brands</title>
        <link rel="icon" href="/logo.svg" type="image/svg+xml"></link>
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
      {/* {popProducts()} */}
      <div className=" lg:mx-18 items-center justify-center mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {/* FIXME: */}
          {/* {products.map((product) => (
            
            
            <div key={product.id}>
              <ProductCard product={product} />
            </div>

          )

          )
          } */}

          {products.map((product) => {
            console.log("staticProps: " + product);
            return (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  // const res = await fetch("/products.json");
  // const products = JSON.parse(JSON.stringify(res));
  // console.log(products);
  // return {
  //   props: { products: products },
  // };
  const filePath = path.join(process.cwd(), "public", "products.json");
  // const filenames = await fs.readdir(postsDirectory)
  const fileContents = await fs.readFile(filePath, "utf8");
  const products = JSON.parse(fileContents);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products,
    },
  };
};
