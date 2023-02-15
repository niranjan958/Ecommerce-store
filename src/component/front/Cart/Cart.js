import React from 'react'
import "./Card.css";

  const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClear}) => {

  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  return (
    <div className='cart-item'>
      
      <h2 className='cart-item-header'>Cart Items</h2>
      
      <div className='clearcart'>
        {cartItems.length >=1 && (
          <button className='clear-button' onClick={handleCartClear}>Clear cart</button>
        )}
      </div>
    
    {cartItems.length === 0 && (
      <div className='cart-item-empty'>No items are added </div>
    )}

    <div>
      {cartItems.map((item) => (
        <div key={item.id} className="card-item-list">
          
          <img className='card-item-image' src={item.image} alt={item.name} />

          <div className='cart-item-name'> {item.name} </div>

          <div className='cart-item-function'>
          <button className='cart-item-add' onClick={()=>handleAddProduct(item)}>+</button>
          <button className='cart-item-remove' onClick={()=>handleRemoveProduct(item)}>-</button>
          </div>

          <div className='cart-item-price'>
          {item.quantity} * ${item.price}
          </div>

          </div>
    ))}
    </div>
     
      <div className='card-item-total-price-name'>Total price
      
      <div className='card-item-total-price'>${totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;
