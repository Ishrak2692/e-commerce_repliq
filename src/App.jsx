import { BrowserRouter as Router,Route ,Routes} from "react-router-dom";
import Demo from "./Demo";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDasboard";
import AdminLogin from "./components/AdminLogin";
import AdminOrderList from "./components/AdminOrderList";




const App=()=>{
  return(
    
   
<Router>
  
  <Routes>
  
    <Route path="/" element ={<Home/>}  />
<Route path="/Login" element={<Login/>}  />
<Route path="/Cart" element={<Cart/>}  />
<Route path="/Product" element={<Product/>}  />
<Route path="/Register" element={<Register/>}  />
<Route path="/Productlist" element={<ProductList/>}  />
<Route path="/AdminDashboard" element={<AdminDashboard/>}  />
<Route path="/Admin" element={<AdminLogin/>}  />
<Route path="/Adminorder" element={<AdminOrderList/>}  />











</Routes>


</Router>


  );
  
 
  
}
export default App;
