import React from 'react';
import { Link } from 'react-router-dom';

import './styles/home.scss';

const Home = (props) => {
  return (
    <div class="home bg-secondary d-flex">
      <div class="d-flex flex-column">
        <h1>Hi, I'm <span class="text-primary">Pam Bortnick</span></h1>
        <h1>I'm a Full-Stack Web Developer</h1>
        <h2>What? That's not enough about me?</h2>
        <h2 class="d-flex">Fine, &nbsp;<Link to="/about" class="flex-center no-underline border-primary">Learn More<i class="fe fe-arrow-right"/></Link></h2>
      </div>
    </div>
  )
}

export default Home;