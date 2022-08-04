import "./NavBar.css";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">CESS</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          {/* <li>
            <Link to="blog">Blog</Link>
          </li>
           */}
          <li>
            <Link to="solutions">Solutions</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>
            <Link className="demo" to="demo">
              Schedule Demo
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;
