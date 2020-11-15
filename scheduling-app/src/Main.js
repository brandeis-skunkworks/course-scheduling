import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Scheduling from './Scheduling.js';
import Reminder from './Reminder.js';
import Home from './Home.js';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/scheduling' component={Scheduling}></Route>
      <Route exact path='/reminder' component={Reminder}></Route>
    </Switch>
  );
}

export default Main;