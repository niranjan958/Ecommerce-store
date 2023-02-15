import React from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import {Router,Routes,Route} from "react-router-dom";


const Routing=({ cartItems, handleAddProduct, handleRemoveProduct,handleCartClear})=> {
  return (
    
    
      <div>
        <Routes>

        <Route path='/'exact element= {<Products
          // productItems={productItems}
          handleAddProduct={handleAddProduct}/>}/>
          
        <Route path="/cart" element={<Cart 
          cartItems={cartItems} 
          handleAddProduct={handleAddProduct} 
          handleRemoveProduct={handleRemoveProduct}
          handleCartClear={handleCartClear}/>}/>

        </Routes>
      </div>
  )
};

export default Routing;
