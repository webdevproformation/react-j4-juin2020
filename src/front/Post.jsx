import React, { Component } from 'react';

class Post extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>article numéro {this.props.match.params.id}</h1>
                <p>lorem ipsum</p>
            </div>);
    }
}

export default Post;