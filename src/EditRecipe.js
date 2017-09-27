import React, { Component } from 'react';
import './index.css';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';


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
        <h2><strong>{this.props.title}</strong></h2>
        <h4><strong>Servings:</strong> {this.props.servings}</h4>
        <h4><strong>Cooking Time:</strong> {this.props.time}</h4>
        <p><strong>Ingredients:</strong> {this.props.ingredients}</p>
        <p><strong>Directions:</strong> {this.props.directions}</p>
        <h4>Author: <i>{this.props.author}</i></h4>
        <Button className="button"  onClick={this.updatePost}>Edit</Button>
        <Button className="button"   onClick={this.deletePost}>Delete</Button>

        { (this.state.update) ?
          ( <div className="edit-form-container">
            <Form className="edit-form" onSubmit={ this.handlePostUpdate }>
            <FormGroup>
              <ControlLabel>Title:</ControlLabel>
              <FormControl type="text"
              placeholder={this.props.title} value={this.state.title} onChange={this.handleTitleChange}/>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Servings:</ControlLabel>
              <FormControl type="number" placeholder={this.props.servings} value={this.state.servings} onChange={this.handleServingsChange}/>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Time:</ControlLabel>
              <FormControl type="text"
                placeholder={this.props.time} value={this.state.time} onChange={this.handleTimeChange}/>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Ingredients:</ControlLabel>
              <textarea placeholder={this.props.ingredients} value={this.state.ingredients} onChange={this.handleIngredientsChange}/>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Directions:</ControlLabel>
              <textarea placeholder={this.props.directions} value={this.state.directions} onChange={this.handleDirectionsChange}/>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Author:</ControlLabel>
              <FormControl type="text"
                placeholder={this.props.author} value={this.state.author} onChange={this.handleAuthorChange}/>
            </FormGroup>

            <Button className="button" bsStyle="success" type="submit" value="Update Recipe" >Update Recipe</Button>
          </Form>
          </div>
        )
          : null
        }
      </div>
    )
  }
}

export default EditRecipe;
