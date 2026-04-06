import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <h2>🍔 FoodOrder</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/" style={{ color: "#fff" }}>Home</Link>
        <Link to="/cart" style={{ color: "#fff" }}>Cart</Link>
        <Link to="/orders" style={{ color: "#fff" }}>Orders</Link>
        <Link to="/login" style={{ color: "#fff" }}>Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;