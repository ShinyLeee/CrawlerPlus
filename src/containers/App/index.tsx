import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import configureStore from 'redux/configureStore';
import NavBar from 'components/NavBar';
import HomePage from 'containers/HomePage';
import { NotFoundPage } from 'containers/ErrorPage';
import './App.css';

const initState = {};
const history = createHistory();
const store = configureStore(initState, history);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar isLoggedIn={false} />
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/404" component={NotFoundPage} />
              <Redirect to="/404" />
            </Switch>
          </ConnectedRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
