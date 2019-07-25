import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

//Pass empty array as second argument so useEffect only runs/gets cleaned-up once (on mount and unmount)
//(See 'Note' under 'Using the Effect Hook' in React docs)
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  //the useEffect here updates the state with user's token, isAuthenticated = true, loading = false, and populates the fields of the user object

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
