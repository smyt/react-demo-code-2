import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'
import App from './components/app'

import store from '../src/store'
// import './app.scss'

const MainApp = () => {

  return (
    <Provider store={store}>
      <main role="main">
        <Router>
          <Switch>
            <Route path="/" exact component={App} />
          </Switch>
        </Router>
      </main>
    </Provider>
  )
};

export default MainApp;