import React, { Component } from 'react';
import './index.css';
import RecipeList from './RecipeList';
import Header from './Header';
// import RecipeForm from './RecipeForm';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RecipeList />
      </div>
    );
  }
}

export default App;
