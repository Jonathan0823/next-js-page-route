import React from 'react'
import { useRouter } from 'next/router'

const ProductDetail = () => {
  const { query } = useRouter();
  return (
    <>
    <div>ProductDetail</div>
    <div>id: {query.id}</div>    
    </>
  )
}

export default ProductDetail