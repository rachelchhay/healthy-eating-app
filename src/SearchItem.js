import React, { Component } from 'react';
import './index.css';

class SearchItem extends Component {
  render() {
    let { recipe } = this.props;

    return (
      <div className="search-item">
        <div className="search-text">
          <a href={recipe.recipe.url} target="_blank">
            <h3>{recipe.recipe.label}</h3>
          </a>
          <p><strong>Servings:</strong> {recipe.recipe.yield}</p>
          <p><strong>Ingredients:</strong></p>
          {
            this.props.recipe.recipe.ingredientLines.map((ingredients, i) => {
              return (
                <p key={i}>{ingredients}</p>
              )
            })
          }

        </div>

        <img
        src={recipe.recipe.image} alt={recipe.recipe.label} className="search-img"
        />
      </div>
    )
  }
}

export default SearchItem;
