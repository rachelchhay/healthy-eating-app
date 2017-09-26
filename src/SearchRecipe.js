import React, { Component }  from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import './index.css';
import { connect } from 'react-redux';
import { setRecipes } from './actions';

class SearchRecipe extends Component {
  constructor() {
    super();

    this.state = {
      dish: ''
    };

    this.handleDishChange = this.handleDishChange.bind(this);
  }

  handleDishChange(event) {
    this.setState({ dish: event.target.value });
  }

  search() {
    let dish = this.state.dish;
    const url = 'https://api.edamam.com/search?q=' + dish + '&app_id=3a297cb6&app_key=fb0b19d078eac4a902644283d3a7ab1f&diet=low-fat'

    // const url = 'https://api.edamam.com/search?q=' + dish + '&app_id=' + process.env.API_ID + '&app_key=' + process.env.API_KEY + '&diet=low-fat'


    fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      this.props.setRecipes(json.hits)
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
          <Button onClick={() => {
            this.search()
          }}>Submit</Button>
        </Form>

      </div>

    )
  }
}

export default connect(null, { setRecipes }) (SearchRecipe);
