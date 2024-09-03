import React, { useContext } from 'react';
import { CartContext } from '../../cartContext';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div>
      <div className='d-flex'>
        <h2>Cart</h2>
        <button className='mt-3 btn btn-danger ml-auto' onClick={clearCart}>Clear Cart</button>
      </div>
      
      
      {cartItems.map((item) => (
        <div className='card mt-3' key={item.itemId}>
          <div className='card-body'>
            <h4>Name: {item.name}</h4>
            <p>Quantity: {item.quantity}</p>
            <button className='btn btn-primary' onClick={() => addToCart({ id: item.itemId })}>Increase</button>
            <button className='btn btn-warning' onClick={() => removeFromCart(item.itemId)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
