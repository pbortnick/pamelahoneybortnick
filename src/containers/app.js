import React, { Component } from 'react';

import Header from '../components/header';
import View from '../containers/view';

import '../assets/bootswatch/united.scss';
import '../assets/feather/feather.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header history={this.props.history} />
        <View history={this.props.history} />
        <div class="footer-icon-credit">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    );
  }
}

export default App;
