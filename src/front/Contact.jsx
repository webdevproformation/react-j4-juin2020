import React, { Component } from 'react';

class Contact extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>Nous Contacter</h1>
                <p>Plus d'informations sur notre activité, veuillez compléter le formulaire suivant :</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="commentaire">Commentaire</label>
                        <textarea name="commentaire" id="commentaire" className="form-control"></textarea>
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