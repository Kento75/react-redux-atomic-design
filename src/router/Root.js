import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import store from '../store';
import { NotificationListPage } from '../components/pages/NotificationListPage.js';

class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div>
            <Route exact path="/" component={ NotificationListPage } />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default hot(module)(Root);