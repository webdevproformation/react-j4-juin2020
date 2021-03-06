import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    state = {
        urlLogo: "/logo192.png"
    }
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-primary"
                style={{ background: "url('font-menu.jpg')", "background-size": "cover" }}
            >
                <span className="navbar-brand">
                    <img src={this.state.urlLogo} alt="" style={{ width: 30 }} />
                </span>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link text-success" activeClassName="active" exact>Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/articles" className="nav-link text-success" activeClassName="active">Articles</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blog" className="nav-link text-success" activeClassName="active">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link text-success" activeClassName="active">Contact</NavLink>
                    </li>
                </ul>
            </nav>);
    }
}
export default Navbar;