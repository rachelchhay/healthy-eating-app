import React, { Component }  from 'react';
import SearchRecipe from './SearchRecipe';
import SearchList from './SearchList';
import './index.css';

class Search extends Component {
  render() {
    return(
      <div className='search'>
        <h1>Find A Healthy Recipe</h1>
        <SearchRecipe />
        <SearchList />
      </div>
    )
  }
}

export default Search;
