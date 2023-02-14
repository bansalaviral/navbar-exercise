import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="left">Logo</div>
      <div className="middle">
        <ul>
          <li>
            <a href="#home">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="btn-container">
          <button className="btn">
            <span>Sign Up</span>
          </button>
          <button className="btn">
            <span>Log In</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
