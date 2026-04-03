import optimizer from "../Images/OPTIMIZER.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={optimizer} />
      </div>
      <div className="nav-links">
        <a href="#">Features</a>
        <a href="#">How it Works</a>
        <a href="#">Use Case</a>
      </div>
      <div className="nav-btn">
        <button>Try Now</button>
      </div>
    </div>
  );
}
export default Navbar;
