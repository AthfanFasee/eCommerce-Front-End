import React from 'react'
import DeleteButton from '../DeleteButton/DeleteButton';
import EditButton from '../EditButton/EditButton';


function Product({product}) {
  return (
    <div>
        <div>
            <p>{product.SKU}</p>
            <p>Image</p>
            <p>{product.name}</p>
            <p>$24.00</p>
            <DeleteButton product={product}/>
            <EditButton product={product}/>
            
        </div>
    </div>
  )
}

export default Product