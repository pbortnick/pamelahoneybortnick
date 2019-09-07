import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Pamela Honey Bortnick</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class={'nav-item' + (props.history.location.pathname === '/' ? ' active' :  '')}>
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class={'nav-item' + (props.history.location.pathname === '/about' ? ' active' :  '')}>
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class={'nav-item' + (props.history.location.pathname === '/projects' ? ' active' :  '')}>
            <Link class="nav-link" to="/projects">Projects</Link>
          </li>
          <li class={'nav-item' + (props.history.location.pathname === '/contact' ? ' active' :  '')}>
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;