import React, { Component } from 'react';

class Post extends Component {
    state = {}

    retourArticles() {
        this.props.history.push("/articles");
        // react-router-dom
        // bien respecter les routes mentionnées dans le fichier App.js
    }

    render() {
        return (
            <div>
                <h1>article numéro {this.props.match.params.id}</h1>
                <p>lorem ipsum</p>
                <hr />
                <button className="btn btn-info" onClick={this.retourArticles.bind(this)}>Retour à la liste des articles</button>
            </div>);
    }
}

export default Post;