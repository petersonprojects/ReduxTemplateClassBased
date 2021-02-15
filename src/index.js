import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import countReducer from './reducers/countReducer';

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

import App from './components/App';
import ViewCount from './components/ViewCount';
import BaseLayout from './components/layout/BaseLayout';

// Welcome to Redux 101

// our reducer and redux dev tools
const store = createStore(countReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>

      <Router>

        <BaseLayout>

          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/count" component={ViewCount}/>
          </Switch>

        </BaseLayout>

      </Router>

    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
