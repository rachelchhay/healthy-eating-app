import React, { Component }  from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import './index.css';


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
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    console.log('STATE:', this.state);
    console.log('URL:', url);
  }

  render() {
    return (
      <div className='search'>
        <h1>Find A Healthy Recipe</h1>

        <Form inline>
          <FormGroup>
            <ControlLabel>Ingredients:</ControlLabel>
            {' '}
            <FormControl
              type="text"
              placeholder="Ex. chicken, pasta"
              onChange={this.handleDishChange} />
          </FormGroup>
          {' '}
          <FormGroup>
            <ControlLabel>Dish:</ControlLabel>
            {' '}
            <FormControl
              type="text"
              placeholder="Ex. lasagna"
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

export default SearchRecipe;
