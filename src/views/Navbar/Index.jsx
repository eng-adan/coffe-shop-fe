import React, { useContext } from 'react';
import { CartContext } from '../../cartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <Link to='/' className="navbar-brand">Coffee Shop</Link>
      
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span className="badge badge-pill badge-danger">{cartItems.length}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
