import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ironhack from '../img/ironhack.png';

import { Button, Container } from "../styles/elements";
import { ThemeSplash } from '../styles/themes';


class Splash extends Component {
  render() {
    return (
      <ThemeSplash>
        <Container>
            <div>
              <img src={ironhack} alt="Logo Ironhack" width="150"/>
            </div>

            <div className="splash-titles">
              <h1>Alumni Network</h1>
              <h2>Keep in touch !</h2>
            </div>
            
            <div className="splash-buttons">
              <Link to={'/signup'}>
                <Button splash>Signup</Button>
              </Link>
              <Link to={'/login'}>
                <Button splash>Login</Button>
              </Link>
            </div>
      </Container>
    </ThemeSplash>
    )
  }
}

export default Splash;