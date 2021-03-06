import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import ironhack from '../img/ironhack.png';


class Splash extends Component {
  render() {
    return ( 
    <div className="container">
      <section className="section anon-pages">
      
        <div className="column is-flex is-horizontal-center">
          <figure className="image is-128x128">
            <img src={ironhack} alt="Ironhack logo" />
          </figure>
        </div>

        <div className="block has-text-centered">
          <h1 className="title is-1 has-text-white">Alumni<br /> Network</h1>
          <h4 className="subtitle is-4 has-text-white" style={{'margin-top': '2%'}}>Keep in touch !</h4>
        </div>

        <div className="columns" style={{'margin-top': '20%'}}>
          <div className="column">
            <Link to={'/signup'}>
              <button className="button is-large is-info is-rounded is-fullwidth">Signup</button>
            </Link>
          </div>
          <div className="column">
            <Link to={'/login'}>
              <button className="button is-large is-info is-rounded is-fullwidth">Login</button>
            </Link>
          </div>
        </div>
  
      </section>
    </div>
    )
  }
}

export default Splash;