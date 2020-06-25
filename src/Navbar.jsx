import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {
        urlLogo: "logo192.png"
    }
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-primary">
                <span className="navbar-brand">
                    <img src={this.state.urlLogo} alt="" style={{ width: 30 }} />
                </span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/articles" className="nav-link">Articles</Link>
                    </li>
                </ul>
            </nav>);
    }
}
export default Navbar;