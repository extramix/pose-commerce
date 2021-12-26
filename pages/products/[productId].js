import React from 'react'
import { useRouter } from 'next/router'

const Product = () => {
    const router = useRouter()
    const { productId } = router.query
  
    return <p>Product: {productId}</p>
  }
  
  export default Product