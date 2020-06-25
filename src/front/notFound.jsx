import React, { Component } from 'react';

class NotFound extends Component {
    state = {}
    render() {
        return (
            <div className="text-center">
                <h1>404</h1>
                <p>Page introuvable</p>
            </div>
        );
    }
}

export default NotFound; // le nom du composant doit toujours commencer par une majucule
// vous pouvez mettre les nom du fichier avec des minuscules