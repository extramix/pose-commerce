import { useContext } from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { DataContext } from "../../store/GlobalState";
import { addToCart } from "../../store/Actions";

import products from "public/products.json";

const Product = ({ product }) => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Link href="/" passHref>
        <span className="cursor-pointer underline p-5">Back</span>
      </Link>

      <div className="grid grid-cols-2">
        <div className="mt-10 ml-10">
          <Image
            src={product.img}
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
            onClick={() => {
              dispatch(addToCart(product, cart));
              console.log(state.cart);
            }}
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

export async function getStaticPaths() {
  const paths = products.map((product) => {
    return {
      params: {
        productId: product.id.toString(),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const id = context.params.productId;
  const product = products.find((product) => product.id === parseInt(id));
  return {
    props: { product },
  };
};
