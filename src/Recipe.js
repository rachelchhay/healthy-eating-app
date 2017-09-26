import React, { Component } from 'react';
import EditRecipe from './EditRecipe';

// add state
class Recipe extends Component {
  render() {
    let recipe = this.props.data.map((post, i) => {
      return (
        <EditRecipe
        title={post.title}
        servings={post.servings}
        time={post.time}
        ingredients={post.ingredients}
        directions={post.directions}
        author={post.author}
        uniqueID={ post['_id'] }
        key={ i }
        onPostDelete={ this.props.onPostDelete }
        onPostUpdate={ this.props.onPostUpdate } >
        </EditRecipe>
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
