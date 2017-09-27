import React, { Component } from 'react';

class EditRecipe extends Component {
  constructor(props) {
    super(props);
    this.state= {
      update: false,
      title: '',
      servings: '',
      time: '',
      ingredients: '',
      directions: '',
      author: ''
    };

    this.deletePost = this.deletePost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleServingsChange = this.handleServingsChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleDirectionsChange = this.handleDirectionsChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handlePostUpdate = this.handlePostUpdate.bind(this);
  }

  // update functions
  updatePost(event) {
    event.preventDefault();
    this.setState(
      { update: !this.state.update }
    );
  }
  handlePostUpdate(event) {
    event.preventDefault();
    let id = this.props.uniqueID;
    this.props.onPostUpdate(id, {
      title: this.state.title,
      servings: this.state.servings,
      time: this.state.time,
      ingredients: this.state.ingredients,
      directions: this.state.directions,
      author: this.state.author
    });
    this.setState({
      update: !this.state.update,
      title: '',
      servings: '',
      time: '',
      ingredients: '',
      directions: '',
      author: ''
    });
  }

  // delete function
  deletePost(event) {
    event.preventDefault();
    let id = this.props.uniqueID;
    this.props.onPostDelete(id);
    console.log('Post deleted');
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleServingsChange(event) {
    this.setState({ servings: event.target.value });
  }
  handleTimeChange(event) {
    this.setState({ time: event.target.value });
  }
  handleIngredientsChange(event) {
    this.setState({ ingredients: event.target.value });
  }
  handleDirectionsChange(event) {
    this.setState({ directions: event.target.value });
  }
  handleAuthorChange(event) {
    this.setState({ author: event.target.value });
  }


  render() {
    return (
      <div className="individual-post">
        <h2>{this.props.title}</h2>
        <h3>Servings: {this.props.servings}</h3>
        <h3>Cooking Time: {this.props.time}</h3>
        <p><strong>Ingredients:</strong> {this.props.ingredients}</p>
        <p><strong>Directions:</strong> {this.props.directions}</p>
        <h4>Author: <i>{this.props.author}</i></h4>
        <button onClick={this.updatePost}>EDIT</button>
        <button onClick={this.deletePost}>DELETE</button>

        { (this.state.update) ?
          (<form onSubmit={ this.handlePostUpdate }>
            <label>
              Title:
              <input type="text"
              placeholder={this.props.title} value={this.state.title} onChange={this.handleTitleChange}/>
            </label>
            <br/>

            <label>
              Servings:
              <input type="number" placeholder={this.props.servings} value={this.state.servings} onChange={this.handleServingsChange}/>
            </label>
            <br/>

            <label>
              Time:
              <input type="text"
                placeholder={this.props.time} value={this.state.time} onChange={this.handleTimeChange}/>
            </label>
            <br/>

            <label>
              Ingredients:
              <textarea placeholder={this.props.ingredients} value={this.state.ingredients} onChange={this.handleIngredientsChange}/>
            </label>
            <br/>

            <label>
              Directions:
              <textarea placeholder={this.props.directions} value={this.state.directions} onChange={this.handleDirectionsChange}/>
            </label>
            <br/>

            <label>
              Author:
              <input type="text"
                placeholder={this.props.author} value={this.state.author} onChange={this.handleAuthorChange}/>
            </label>
            <br/>

            <input type="submit" value="Update Recipe" />
          </form>)
          : null
        }
      </div>
    )
  }
}

export default EditRecipe;
