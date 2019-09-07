import React from 'react';

const Header = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Pamela Honey Bortnick</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class={'nav-item' + (window.location.hash === '#' ? ' active' :  '')}>
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class={'nav-item' + (window.location.hash === '#about' ? ' active' :  '')}>
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class={'nav-item' + (window.location.hash === '#projects' ? ' active' :  '')}>
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class={'nav-item' + (window.location.hash === '#contact' ? ' active' :  '')}>
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;