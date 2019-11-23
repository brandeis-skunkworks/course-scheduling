import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Scheduling from './Scheduling.js';
import Admin from './Admin.js';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Scheduling}></Route>
      <Route exact path='/admin' component={Admin}></Route>
    </Switch>
  );
}

export default Main;