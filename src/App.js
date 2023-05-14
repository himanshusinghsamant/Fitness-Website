// import logo from './logo.svg';
import './App.css';
import Home from './Myroutes/Home';
import Videos from './Myroutes/Videos';
import Shop from './Myroutes/Shop';
import Workout from './Myroutes/Workout';
import Contact from './Myroutes/Contact';
import Cart from './Myroutes/Cart';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ShopContextProvider from './context/ShopContextPro'

function App() {
  return (
    <>
    <ShopContextProvider>
     <Router>
      <Routes>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/workout" element={<Workout/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
     </Router>
    </ShopContextProvider>
    </>
  );
}
export default App;
