import React from 'react'

import Image from 'next/image'
export default function ProductCard({src}) {
    return (
        <div className="relative cursor-pointer mb-8">
            <Image src={src} className="transition delay-50 duration-200 ease-in-out" alt="Leather Jacket" width="480" height="640" layout="responsive" />
            <p className="text-right font-medium absolute bottom-6 right-0 bg-white p-1">$59.99</p>
            <p className="text-center">Leather Jacket</p>   
        </div>
    )
}
