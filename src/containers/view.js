import React, { Component } from 'react';

import Home from '../components/home';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';

class View extends Component {
  render() {
    let render_hash_content;

    switch (this.props.history.location.hash) {
      case '':
        render_hash_content = Home;
        break;
      case '#about':
        render_hash_content = About;
        break;
      case '#projects':
        render_hash_content = Projects;
        break;
      case '#contact':
        render_hash_content = Contact;
        break;
      default:
        render_hash_content = Home;
    }
    
    return (
      <div>
        { render_hash_content() }
      </div>
    )
  }
}

export default View;