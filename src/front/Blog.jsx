import React, { Component } from 'react';
import axios from "axios";

class Blog extends Component {
    state = {
        articles: []
    }

    async componentDidMount() {
        // appel en AJAX en GET sur l'adresse https://jsonplaceholder.typicode.com/posts
        /* 
        [
            {} ,{},{}
        ] JSON : JavaScript Object Notation*/
        // quand on fait un appel en AJAX => latence réseau 
        // entre le moment où vous appeler les données // et le moment où vous recevez les données => 5 millisecondes // 2 à 5 secondes
        // Promesse => 

        const reponseAJAX = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(reponseAJAX);
        this.setState({
            articles: reponseAJAX.data
        });
    }

    delete(item) {
        //console.log(item);
        const cloneArticles = [...this.state.articles];
        const result = cloneArticles.find(function (el) {
            return el.id === item.id
        });
        const index = cloneArticles.indexOf(result);
        cloneArticles.splice(index, 1); // compteur Like // cloneArticle[index].valeur--
        this.setState({
            articles: cloneArticles
        });
        // [1, 2 , 3].splice(0, 1) => [2,3]
        // [1, 2 , 3].splice(2, 1) => [1,2]
        // [1, 2 , 3].splice(1, 2) => [1]
        // 1er argument => index 
        // 2ème combien d'élément je dois supprimer  
    }
    render() {
        return (
            <div>
                <h1>Blog</h1>
                <table className="table table-striped">
                    <tr>
                        <td>numéro</td>
                        <td>titre</td>
                        <td>contenu</td>
                        <td>actions</td>
                    </tr>
                    <tbody>
                        {this.state.articles.map(
                            (item, index) => {
                                return <tr key={index}>
                                    <td>
                                        {item.id}
                                    </td>
                                    <td>
                                        {item.title}
                                    </td>
                                    <td>
                                        {item.body}
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-danger m-1"
                                            onClick={() => this.delete(item)}>
                                            supprimer
                                        </button>
                                        <button className="btn btn-sm btn-warning m-1">update</button>
                                    </td>
                                </tr>
                            }
                        )}
                    </tbody>
                </table>
            </div>


        );
    }
}

export default Blog;