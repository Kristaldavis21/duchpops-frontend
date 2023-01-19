import { Link } from "react-router-dom";
import "../navbar.css";

export default function Navbar() {
  
  return ( 
     
    <div>
      <nav>
        <Link to="/">Home</Link> &nbsp;
        <Link to="/shop">Shop</Link> &nbsp;
        <Link to="/book">Book</Link> &nbsp;
        <Link to="/contact">Contact</Link> &nbsp;
        <Link to="/blog">Blog</Link> &nbsp;
        <Link to="/cart">Cart</Link> &nbsp;
      </nav>
    </div>
  );
}



