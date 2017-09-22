import React, { Component } from 'react';

// add state
class Recipe extends Component {
  render() {
    let recipe = this.props.data.map((post, i) => {
      return (
        <div key={i}>
          <h2>{post.title}</h2>
          <h3>Servings: {post.servings}</h3>
          <h3>Cooking Time: {post.time}</h3>
          <p><strong>Ingredients:</strong> {post.ingredients}</p>
          <p><strong>Directions:</strong> {post.directions}</p>
          <h4>Author: <i>{post.author}</i></h4>
        </div>
      )
    });


    return (
      <div>
        { recipe }
      </div>
    )
  }
}

export default Recipe;

// <h3>{this.props.title}</h3>
// <p>{this.props.text}</p>
// <h4><i>{this.props.author}</i></h4>
