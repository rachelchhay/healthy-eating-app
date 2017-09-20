import React, { Component } from 'react';
import './index.css';
import Data from './data';
import Recipe from './Recipe';


class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div>
        <h2>Blog Posts</h2>
        <Recipe data={Data} />
      </div>
    )
  }
  
}

export default RecipeList;

// let recipe = this.state.data.map((post, i) => {
//   return (
//     <Recipe key={i} title ={post.title} text= {post.text} author = {post.author}/>
//   )
// })
