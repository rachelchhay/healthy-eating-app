import React, { Component }  from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import './index.css';
import { connect } from 'react-redux';
import { setRecipes } from './actions';


class SearchRecipe extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: '',
      dish: ''
    };

    this.handleDishChange = this.handleDishChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
  }

  handleDishChange(event) {
    this.setState({ dish: event.target.value });
  }
  handleIngredientsChange(event) {
    this.setState({ ingredients: event.target.value });
  }

  search() {
    let { ingredients, dish } = this.state;
    const url = `https://crossorigin.me/https://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;


    fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      this.props.setRecipes(json.results)
    });
  }

  render() {
    return (
      <div>

        <Form inline>
          <FormGroup>
            <ControlLabel>Ingredients:</ControlLabel>
            {' '}
            <FormControl
              type="text"
              placeholder="Ex. chicken, pesto"
              onChange={this.handleDishChange} />
          </FormGroup>
          {' '}
          <FormGroup>
            <ControlLabel>Dish:</ControlLabel>
            {' '}
            <FormControl
              type="text"
              placeholder="Ex. salad"
              onChange={this.handleIngredientsChange} />
          </FormGroup>
          {' '}
          <Button onClick={() => {
            this.search()
          }}>Submit</Button>
        </Form>

      </div>

    )
  }
}

export default connect(null, { setRecipes }) (SearchRecipe);

// const url = `https://crossorigin.me/https://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
