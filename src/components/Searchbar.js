import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SearchStyle } from '../styles/elements';
import ironhack from '../img/ironhack.png';


class Searchbar extends Component {
  state = {
    search: '',
  }

  handleInput = e => {
    let { value } = e.target;
    // console.log(name, value);
    this.setState( { search: value });
    this.props.filterByTerm(value);
  }


  render() {
    return (
      <SearchStyle>
        <div className="top-logo">
          <img src={ironhack} />
        </div>
        <form>
          <input 
            placeholder="Search..."
            onChange={this.handleInput} 
            type="text" 
            name="search" 
            value={this.state.search} 
          />
        </form>
      </SearchStyle>
    ) 
  }    
}


export default withRouter(Searchbar);