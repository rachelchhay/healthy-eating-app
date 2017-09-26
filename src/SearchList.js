import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import SearchItem from './SearchItem';

class SearchList extends Component {
  render() {
    console.log('THIS.PROPS: ', this.props);

    return (
      <div>
        {
          this.props.recipes.map((recipe, i) => {
            return (
              <SearchItem key={i} recipe={recipe} />
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(SearchList);
