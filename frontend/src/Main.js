import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Scheduling from './Scheduling.js';
import TeacherReminder from './TeacherReminder.js';
import TeacherUploader from './TeacherUploader.js';
import Home from './Home.js';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/scheduling'> <Scheduling /> </Route>
      <Route exact path='/teacher-reminder'> <TeacherReminder /> </Route>
      <Route exact path='/teacher-uploader'> <TeacherUploader /> </Route>
    </Switch>
  );
}

export default Main;