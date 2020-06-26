import React, { Component } from 'react';
import { findArticleById } from "../services/ArticlesFictifs";
class Post extends Component {
    state = {
        contenu: {},
        form: {
            commentaire: ""
        },
        error: false,
        success: false
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

    traiterCommentaire(e) {
        e.preventDefault();
        const form = { ...this.state.form };

        if (form.commentaire == "") {
            // le champ du formulaire est vide 
            this.setState({
                error: true, // afficher le message d'erreur
                success: false // masquer le message de success
            })
        }
        else {
            this.setState({
                error: false, // masquer le message  d'erreur
                success: true // afficher le message de success
            })
        }
    }

    change(e) {
        const form = { ...this.state.form };
        form[e.target.name] = e.target.value;
        this.setState({
            form: form
        });
    }


    render() {
        return (
            <div>
                <h1>{this.state.contenu.titre}</h1>
                <img src={this.state.contenu.url + this.state.contenu.id} alt="" />
                <p>{this.state.contenu.content}</p>
                <hr />
                <h2>Laisser un commentaire :</h2>
                <form onSubmit={this.traiterCommentaire.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="commentaire">Commentaire</label>
                        <textarea
                            name="commentaire"
                            id="commentaire"
                            rows="5"
                            className="form-control"
                            placeholder="laisser un commentaire"
                            value={this.state.form.commentaire}
                            onChange={this.change.bind(this)}
                        ></textarea>
                    </div>
                    <div className="form-group d-flex">
                        <input type="submit" className="btn btn-outline-success" />
                        <button className="btn btn-info ml-auto" onClick={this.retourArticles.bind(this)}>Retour à la liste des articles</button>
                    </div>
                </form>

                {this.state.error && <p className="alert alert-danger">Veuillez compléter le champ commentaire</p>}
                {this.state.success && <p className="alert alert-success">Merci pour votre commentaire</p>}

            </div>);
    }
}
export default Post;