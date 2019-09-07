import React, { Component } from 'react';

import Header from '../components/header';
import View from '../containers/view';

import '../assets/bootswatch/united.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header history={this.props.history} />
        <View history={this.props.history} />
      </div>
    );
  }
}

export default App;
