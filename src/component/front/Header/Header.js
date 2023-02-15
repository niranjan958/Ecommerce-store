import React from 'react';
import { Link } from 'react-router-dom';
import "./Title.css";

function Header( {cartItems}) {
  return (
   <header className='header'>

    <div>
        <h1>
            <Link to="/" className='leo'>Thunder Store</Link>
        </h1>
    </div>
    <div className='lego'>
    <ul>
        <li className='vijay'>
            <Link className="ajith" to="/">Home</Link>
        </li>
    </ul>
    
    <ul>
        <li className='vijay'>
            <Link className="thunivu" to="/cart">
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>

            <span className='cart-length'>
                {cartItems.length === 0 ? " " :cartItems.length}
            </span>
            </Link>
        </li>
    </ul>
    </div>
   </header>
  );
}

export default Header
