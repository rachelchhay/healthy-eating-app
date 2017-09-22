import React, { Component } from 'react';
import './index.css';
import Recipe from './Recipe';
import RecipeForm from './RecipeForm';
import axios from 'axios';


class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.getPosts = this.getPosts.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
  }

  getPosts() {
    axios.get('http://localhost:3100/posts')
    .then(res => {
      this.setState({ data: res.data });
    })
  }

  handlePostSubmit(post) {
    // Add POST request
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div>
        <h2>Blog Posts</h2>
        <Recipe data={ this.state.data } />
        <RecipeForm onPostSubmit={ this.handlePostSubmit }/>
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
