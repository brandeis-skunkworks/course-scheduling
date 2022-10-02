import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Scheduling from './components/Scheduling/Scheduling';
import TeacherReminder from './TeacherReminder.js';
import TeacherUploader from './TeacherUploader.js';
import Home from './Home.js';
import AcademicInfo from './AcademicInfo.js';
import Navigation from './components/navigation/Navigation';
import TeacherRequirements from './TeacherRequirements.js'

const Main = () => {
  return (
    <div className="app">
      <div className="row">
        <div className="col-lg-2 col-md-0 col-sm-0 menu-bar align-items-end">
          <Navigation />
        </div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/academic-info'> <AcademicInfo /> </Route>
          <Route exact path='/scheduling'> <Scheduling /> </Route>
          <Route exact path='/teacher-reminder'> <TeacherReminder /> </Route>
          <Route exact path='/teacher-uploader'> <TeacherUploader /> </Route>
          <Route exact path='/teacher-requirements'> <TeacherRequirements /> </Route>
          <Route exact path='/about'> <div>Made with love by the Skunkworks Course Scheduling Team
            [link to website here]</div> </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Main;