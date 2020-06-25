import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { data } from "../services/ArticlesFictifs";


class Home extends Component {
    state = {
        contenu: []
    }
    // Pause => 15h32
    // service => consommé par les composants notamment quand ils ont besoin de données 
    // Au lieu de stocker les données directement dans le state du composant 
    // sortir ces données dans un autre fichier 
    // dans le dossier src => services 
    // dans ce dossier => créer un fichier ArticlesFictifs.js 
    // ce fichier va contenir nos données que nous avions stockées dans le state de Home

    // hook 
    // un fois que le composant est chargé => initiatialiser le state avec la valeur dans data
    // que l'on a importé ligne 3
    componentDidMount() {
        this.setState({
            contenu: data
        });
    }

    render() {
        return (
            <div>
                <h1>Bienvenue sur l'accueil</h1>
                <section className="row">
                    {this.state.contenu.map(
                        (item, index) =>
                            <article className="col" key={index}>
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