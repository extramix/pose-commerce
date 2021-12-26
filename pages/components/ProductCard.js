import React from 'react'

import Image from 'next/image'
export default function ProductCard({src}) {
    return (
        <div>
            <Image src={src} alt="Leather Jacket" width="480" height="640" layout="responsive" />
            <p>$59.99</p>
            <p>Leather Jacket</p>   
        </div>
    )
}
