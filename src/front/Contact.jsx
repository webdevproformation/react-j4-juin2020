import React, { Component } from 'react';

class Contact extends Component {
    state = {
        contact: {
            email: "",
            commentaire: ""
        },
        errors: {}
    }
    traitementForm(e) {
        e.preventDefault();
        // permet de bloquer le chargement automatique de la page 
        // dans la balise form => attribut action=""
        // alert("je viens de cliquer sur le bouton");

        // récupérer les informations stockées dans le state
        const form = { ...this.state };
        //console.log(form);
        // vérification => est ce que les champs sont remplis => les deux soient remplis 
        // vider le formulaire 
        // Appeler API => // garde pour une autre page 
        if (form.contact.email.trim() == "") {
            form.errors.email = "Veuillez compléter l'email";
        }
        if (form.contact.commentaire.trim() == "") {
            form.errors.commentaire = "Veuillez compléter le commentaire";
        }
        if (form.contact.email.trim() != "" && form.contact.commentaire.trim() != "") {
            form.errors = {}
        }
        // email / blacklistage de server // si le serveur n'aime pas yahoo => gmail // paramétré 
        // email => ping vers la boitemail => 404 => message boitemail n'existe pas
        // NodeJS / PHP 
        console.log(form.errors);
        // si les deux champs sont remplis 
        if (Object.keys(form.errors).length === 0) {
            alert("merci d'avoir rempli le formulaire")
        } else {
            // sinon // message d'alerte => veuillez compléter les deux champs 
            alert("veuillez compléter les deux champs")
        }

    }

    change(e) {
        // pause => retour à 10h45 => je vous explique ces 3 lignes 
        // 1 la méthode change appeler sur les champs email et sur le champ textarea

        // clone de this.state.contact dans la variable contact
        const contact = { ...this.state.contact };

        // dans la variable clonée 
        // contact.email // méthode classique
        // let nom = "email"
        // contact[nom]
        contact[e.currentTarget.name] = e.currentTarget.value;
        // 
        this.setState({ contact: contact });
    }

    render() {
        return (
            <div>
                <h1>Nous Contacter</h1>
                <p>Plus d'informations sur notre activité, veuillez compléter le formulaire suivant :</p>
                <form onSubmit={this.traitementForm.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            name="email"
                            value={this.state.contact.email}
                            onChange={this.change.bind(this)}
                            placeholder="saisir email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="commentaire">Commentaire</label>
                        <textarea
                            name="commentaire"
                            id="commentaire"
                            className="form-control"
                            value={this.state.contact.commentaire}
                            onChange={this.change.bind(this)}
                            placeholder="saisir votre commentaire"
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-outline-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Contact;