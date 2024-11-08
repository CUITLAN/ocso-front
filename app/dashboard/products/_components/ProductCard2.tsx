import { Product } from '@/entities'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import React from 'react'

const ProductCard2 = ({product}: {product: Product}) => {
  return (
    <Card className='hover:scale-110 max-w-[350px] transition-transform'>
        <CardHeader>
            {product.productName}
        </CardHeader>
        <Divider/>
        <CardBody>
            <p>Nombre del Producto: {product?.productName}</p>
            <p>Precio del Producto: {product?.price}</p>
        </CardBody>
      
    </Card>
  )
}

export default ProductCard2
