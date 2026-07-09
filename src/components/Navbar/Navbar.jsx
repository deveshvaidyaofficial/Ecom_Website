import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-main">
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" width="100" height="50" alt="Adidas Logo" />
        </div>
        <br></br>
        <ul className="nav-links">
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
          <li>SPORTS</li>
          <li>LIFESTYLE</li>
          <li className="outlet">OUTLET</li>
        </ul>
        <div className="nav-icons">
          <span>🔍</span>
          <span>👤</span>
          <span>♡</span>
          <span>🛍️</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;