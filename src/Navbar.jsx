import React, { Component } from "react";

class Navbar extends Component {
    state = {
        urlLogo: "logo192.png"
    }
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-primary">
                <span className="navbar-brand">
                    <img src={this.state.urlLogo} alt="" style={{ width: 50 }} />
                </span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a href="/articles" className="nav-link">Articles</a>
                    </li>
                </ul>
            </nav>);
    }
}

export default Navbar;