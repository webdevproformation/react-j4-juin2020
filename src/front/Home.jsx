import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Home extends Component {
    state = {
        contenu: [
            { id: 1, titre: "article 1", content: "lorem ipsum", url: "https://via.placeholder.com/400x200" },
            { id: 2, titre: "article 2", content: "lorem ipsum", url: "https://via.placeholder.com/400x200" },
            { id: 3, titre: "article 3", content: "lorem ipsum", url: "https://via.placeholder.com/400x200" },
            { id: 4, titre: "article 4", content: "lorem ipsum", url: "https://via.placeholder.com/400x200" },
        ]
    }
    // Pause => 15h30 
    // service => consommé par les composants notamment quand ils ont besoin de données 
    // 
    render() {
        return (
            <div>
                <h1>Bienvenue sur l'accueil</h1>
                <section className="row">
                    {this.state.contenu.map(
                        item =>
                            <article className="col">
                                <div className="card px-2">
                                    <h2>{item.titre}</h2>
                                    <img src={item.url} alt="" className="img-fluid" />
                                    <p>{item.content}</p>
                                    <p><Link to={"/articles/" + item.id} className="btn btn-info">Lire la suite</Link></p>
                                </div>

                            </article>
                    )}
                </section>
            </div>
        );
    }
}

export default Home;