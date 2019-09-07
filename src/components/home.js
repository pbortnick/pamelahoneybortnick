import React from 'react';
import { Link } from 'react-router-dom';

import './styles/home.scss';

const Home = (props) => {
  return (
    <div class="home bg-secondary d-flex">
      <div class="d-flex flex-column">
        <h1>Hi, I'm <span class="text-primary">Pam Bortnick</span></h1>
        <h1>I'm a Full-Stack Software Engineer</h1>
        <h1 class="d-flex">Not enough about me?&nbsp;<Link to="/about" class="flex-center no-underline border-primary">Learn More<i class="fe fe-arrow-right"/></Link></h1>
      </div>
    </div>
  )
}

export default Home;