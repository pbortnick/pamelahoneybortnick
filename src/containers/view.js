import React, { Component } from 'react';

import Home from '../components/home';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';

class View extends Component {
  render() {
    let render_tab_content;

    switch (this.props.history.location.pathname) {
      case '':
        render_tab_content = Home;
        break;
      case '/about':
        render_tab_content = About;
        break;
      case '/projects':
        render_tab_content = Projects;
        break;
      case '/contact':
        render_tab_content = Contact;
        break;
      default:
        render_tab_content = Home;
    }
    
    return (
      <div>
        { render_tab_content() }
      </div>
    )
  }
}

export default View;