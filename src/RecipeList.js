import React, { Component } from 'react';
import './index.css';
import Recipe from './Recipe';
import RecipeForm from './RecipeForm';
import axios from 'axios';
const URL = 'http://localhost:3001/posts';


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
    axios.get(URL)
    .then(res => {
      this.setState({ data: res.data });
    })
  }

  handlePostSubmit(post) {
    let posts = this.state.data;
    let newPosts = posts.concat([post]);
    this.setState({ data: newPosts });
    axios.post(URL, post)
    .then(res => {
      this.setState({ data: posts });
    })
    .catch(err => {
      console.log(err);
    });
  }

  handlePostUpdate(id, post) {
    axios.put(URL + '/' + id, post)
    .then(res => {
      console.log('Post updated');
    })
    .catch(err => {
      console.log(err);
    });
  }

  handlePostDelete(id) {
    axios.delete(URL + '/' + id)
    .then(res => {
      console.log('Post deleted');
    })
    .catch(err => {
      console.log(err);
    });
  }

  componentDidMount() {
    this.getPosts();
    setInterval(this.getPosts, this.props.pollInterval);
  }

  render() {
    return (
      <div>
        <h2>Blog Posts</h2>
        <Recipe
        onPostUpdate={ this.handlePostUpdate }
        onPostDelete={ this.handlePostDelete }
        data={ this.state.data } />
        <RecipeForm onPostSubmit={ this.handlePostSubmit }/>
      </div>
    )
  }

}

export default RecipeList;
