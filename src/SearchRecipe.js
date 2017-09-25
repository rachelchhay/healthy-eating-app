import React, { Component }  from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import './index.css';


class SearchRecipe extends Component {
  render() {
    return (
      <div className='search'>
        <h1>Find A Healthy Recipe</h1>

        <Form inline>
          <FormGroup>
            <ControlLabel>Ingredients:</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="Ex. chicken, pasta" />
          </FormGroup>
          {' '}
          <FormGroup>
            <ControlLabel>Dish:</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="Ex. lasagna"></FormControl>
          </FormGroup>
          {' '}
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default SearchRecipe;
