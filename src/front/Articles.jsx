import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getLastArticles } from '../services/ArticlesFictifs';

class Articles extends Component {
    state = {
        contenu: []

    }
    componentDidMount() {
        this.setState({
            contenu: getLastArticles(5)
        })
    }

    more(texte, max = 80) {
        return texte.slice(0, max)
    }

    render() {
        return (
            <div>
                <h1>liste des articles</h1>
                <section className="row">
                    {this.state.contenu.map(
                        (item, index) =>
                            <article className="col-3 mb-2" key={index}>
                                <div className="card px-2">
                                    <h2>{item.titre}</h2>
                                    <img src={item.url + item.id} alt="" className="img-fluid" />
                                    <p>{this.more(item.content)}</p>
                                    <p><Link to={"/articles/" + item.id} className="btn btn-info">Lire la suite</Link></p>
                                </div>

                            </article>
                    )}
                </section>
            </div>
        );
    }
}

export default Articles;