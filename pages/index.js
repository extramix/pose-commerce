import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <>

    <h1 className="px-10 py-7 text-5xl text-green-600">EXPLORE YOUR FREEDOM.</h1>
    <p className="px-10 py-7 text-3xl text-gray-800">With this season’s collections, your imagination is endless. Explore our new collections starting from today.</p>

    <div className="grid grid-cols-3 gap-4 p-12 ">
    <div className="">
    <ProductCard src="/products/1.jpeg"/>
    </div>
    <div className="">
    <ProductCard src="/products/1.jpeg"/>
    </div>
    <div className="">
    <ProductCard src="/products/1.jpeg"/>
    </div>
    <div className="">
    <ProductCard src="/products/1.jpeg"/>
    </div>
    <div className="">
    <ProductCard src="/products/1.jpeg"/>
    </div>
    <div className="">
    <ProductCard src="/products/1.jpeg"/>
    </div>
    </div>
    </>
  )
}
