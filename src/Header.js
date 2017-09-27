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
        <div className="header">
        <img className="pineapple" src='https://i.pinimg.com/originals/59/37/9c/59379cc43ead937fd57a0dc30a1d5c52.png' alt='cute pineapple' />
        <h1 className="title">Healthy Eating With Ease</h1>
        </div>

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
