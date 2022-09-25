import React, { Component } from 'react';
import {Link} from "@reach/router";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>  
        <li className="nav-item">
          <Link className="nav-link active" to="/login">Login</Link>
        </li>       
      </ul>
     
    </div>
  </div>
</nav>
            </div>
        );
    }
}

export default Navbar;