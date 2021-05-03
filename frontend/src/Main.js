import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Scheduling from './Scheduling.js';
import TeacherReminder from './TeacherReminder.js';
import TeacherUploader from './TeacherUploader.js';
import Home from './Home.js';
import AcademicInfo from './AcademicInfo.js';
import Navigation from './Navigation.js';


const Main = () => {
  return (
    <div className="app">
      <div class="row">
        <div class="col-lg-2 col-md-0 col-sm-0 menu-bar align-items-end">
          <Navigation />
        </div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/academic-info'> <AcademicInfo /> </Route>
          <Route exact path='/scheduling'> <Scheduling /> </Route>
          <Route exact path='/teacher-reminder'> <TeacherReminder /> </Route>
          <Route exact path='/teacher-uploader'> <TeacherUploader /> </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Main;