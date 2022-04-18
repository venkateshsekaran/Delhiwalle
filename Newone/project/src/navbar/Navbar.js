import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="./home" className="navbar-brand">
            Enjoy The Moment
          </Link>
          <div className="ml-auto">
            <ul className="navbar nav">
              <li className="nav-item">
                <Link to="./home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./signin" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
