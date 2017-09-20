import React, { Component } from 'react';

// add state
class Recipe extends Component {
  render() {
    let recipe = this.props.data.map((post, i) => {
      return (
        <div key={i}>
          <h2>{post.title}</h2>
          <h3>{post.servings}</h3>
          <h3>{post.time}</h3>
          <p>{post.ingredients}</p>
          <p>{post.directions}</p>
          <h4><i>{post.author}</i></h4>
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
