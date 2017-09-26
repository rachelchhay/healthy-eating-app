import React, { Component }  from 'react';
import './index.css';
import Nav from './Nav';
import RecipeList from './RecipeList';
import Search from './Search';
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;


class Header extends Component {
  render() {
    return (
      <div>
        <h1>Healthy Eating With Ease</h1>

        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path='/' component={RecipeList} />
              <Route path='/search' component={ Search } />
              <Route render={ () => {
                return <h1>Page Not Found</h1>
              }} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}



export default Header;
