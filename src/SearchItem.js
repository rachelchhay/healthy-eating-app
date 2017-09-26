import React, { Component } from 'react';
import './index.css';

class SearchItem extends Component {
  render() {
    let { recipe } = this.props;

    return (
      <div className="search-item">
        <div className="search-text">
          <a href={recipe.href} target="_blank">
            <h4>{recipe.title}</h4>
          </a>
          <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
        </div>

        <img
        src={recipe.thumbnail} alt={recipe.title} className="search-img"
        />
      </div>
    )
  }
}

export default SearchItem;
