import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Products from './products.json'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <>
    <Head>
      <title>Pose. | FREEDOM-focused Clothing brands</title>
    </Head>
    <h1 className="px-10 py-7 text-5xl text-green-600">EXPLORE YOUR FREEDOM.</h1>
    <p className="px-10 py-7 text-3xl text-gray-800">With this season’s collections, your imagination is endless. Explore our new collections starting from today.</p>

      {Products.map(product => {
        <div className="">
          {product}
        <ProductCard src={product.src} price={product.price} name={product.name}/>
        </div>
      })}

    <div className="grid grid-cols-3 gap-4 p-12 ">
    <ProductCard src="/products/1.jpeg" price="$59.99" name="Leather Jacket" />
    <ProductCard src="/products/2.jpg" price="$19.99" name="Slip-on" />
    <ProductCard src="/products/3.jpg" price="$9.99" name="Sleeveless Top" />
    <ProductCard src="/products/1.jpeg" price="$59.99" name="Leather Jacket" />
    <ProductCard src="/products/2.jpg" price="$19.99" name="Slip-on" />
    <ProductCard src="/products/3.jpg" price="$9.99" name="Sleeveless Top" />
    </div>
    </>
  )
}