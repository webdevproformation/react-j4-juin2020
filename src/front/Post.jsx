import React, { Component } from 'react';
import { findArticleById } from "../services/ArticlesFictifs";
class Post extends Component {
    state = {
        contenu: {}
    }
    retourArticles() {
        this.props.history.push("/articles");
        // react-router-dom
        // bien respecter les routes mentionnées dans le fichier App.js
    }
    componentDidMount() {
        const id = this.props.match.params.id; // récupérer l'id 
        this.setState({
            contenu: findArticleById(id)
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.contenu.titre}</h1>
                <img src={this.state.contenu.url + this.state.contenu.id} alt="" />
                <p>{this.state.contenu.content}</p>
                <hr />
                <button className="btn btn-info" onClick={this.retourArticles.bind(this)}>Retour à la liste des articles</button>
            </div>);
    }
}
export default Post;