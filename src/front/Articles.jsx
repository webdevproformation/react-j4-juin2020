import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Articles extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>liste des articles</h1>
                <ul>
                    <li>
                        <Link to="/articles/1">Voir article 1</Link>
                    </li>
                    <li>
                        <Link to="/articles/2">Voir article 2</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Articles;