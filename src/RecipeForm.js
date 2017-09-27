import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import './index.css';


class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      servings: '',
      time: '',
      ingredients: '',
      directions: '',
      author: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleServingsChange = this.handleServingsChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleDirectionsChange = this.handleDirectionsChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleSubmit(event) {
    event.preventDefault();
    this.props.onPostSubmit({
      title: this.state.title,
      servings: this.state.servings,
      time: this.state.time,
      ingredients: this.state.ingredients,
      directions: this.state.directions,
      author: this.state.author
    });
    this.setState({
      title: '',
      servings: '',
      time: '',
      ingredients: '',
      directions: '',
      author: ''
    });
  }

  render() {
    return (
      <div className="posts-form-container">

        <h2>Add A New Recipe</h2>

        <Form className="posts-form" onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>Title:</ControlLabel>
            <FormControl type="text" value={this.state.title} onChange={this.handleTitleChange}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Servings:</ControlLabel>
            <FormControl type="number" value={this.state.servings} onChange={this.handleServingsChange}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Time:</ControlLabel>
            <FormControl type="text"
              placeholder="1 hour and 30 mins" value={this.state.time} onChange={this.handleTimeChange}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Ingredients:</ControlLabel>
            <FormControl value={this.state.ingredients} onChange={this.handleIngredientsChange}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Directions:</ControlLabel>
            <FormControl value={this.state.directions} onChange={this.handleDirectionsChange}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Author:</ControlLabel>
            <FormControl
              type="text" value={this.state.author} onChange={this.handleAuthorChange}/>
          </FormGroup>

          <input bsStyle="info" type="submit" value="Submit" />
        </Form>

      </div>
    )
  }
}

export default RecipeForm;
