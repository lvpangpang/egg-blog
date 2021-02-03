import React, { Suspense } from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';

import history from './history';

const Main = React.lazy(() => import('@/layout/index'));
const Login = React.lazy(() => import('@/pages/login'));

export default function Index() {
  return (
    <Router history={history}>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/' component={Main} />
        </Switch>
      </Suspense>
    </Router>
  );
}