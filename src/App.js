import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './utils/Home'
import About from './utils/About'
import Navbar from './utils/Navbar'
import OrderSummary from './utils/OrderSummary'
import NoMatch from './utils/NoMatch'
import Products from './utils/Products'
import FeaturedProducts from './utils/FeaturedProducts';
import NewProducts from './utils/NewProducts';
import Users from './utils/Users';
import UserDetails from './utils/UserDetails';
import Admin from './utils/Admin';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='*' element={<NoMatch />} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        
      </Routes>
    </>
    
  );
}

export default App;
