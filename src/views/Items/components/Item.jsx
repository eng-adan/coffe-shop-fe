import React, { useContext } from 'react'
import { CartContext } from '../../../cartContext';

export default function Item(props) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className='col-3'>
      <div className='card mt-3'>
        <div className='card-header d-flex'>
          <h3>{props.item.attributes.name}</h3>
          {props.item.attributes['free?'] ? 
            <span className='ml-auto text-success'>Free</span> : <></>}
        </div>
        <div className='card-body'>
          <p>
            {
              props.item.attributes.discounted_price !== props.item.attributes.price ? (
                <span><s>${props.item.attributes.price}</s>  ${props.item.attributes.discounted_price}</span>
              ) : `$${props.item.attributes.price}`
            }
          </p>
          <div className='d-flex'>
            <p>Tax: {props.item.attributes.tax_rate}</p>
            <button className='ml-auto btn btn-primary' onClick={()=> addToCart(props.item)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
