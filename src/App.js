import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { CartProvider } from './cartContext';
import Cart from './views/Cart/Index';
import Items from './views/Items/Index';
import Navbar from './views/Navbar/Index';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className='container mt-3'>
            <Routes>
              <Route exact path="/" element={<Items />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
