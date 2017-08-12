import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Wrapper } from '../components/Shared/FullWrapper';
import { PrivateRoute } from '../components/Auth/private-route';
import { Login } from './Common/Login';
import { NoMatch } from './Common/NoMatch';
import { Home } from './Home';

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router >
        <Wrapper>
          <Switch>
            <PrivateRoute exact={true} path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}
