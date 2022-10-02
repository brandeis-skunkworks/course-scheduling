import React from 'react';
import SideButton from './SideButton';
/**
 * Webpage navigation bar
 * @param {*} props 
 */
export default function Navigation() {
  return (
    <div>
      <h3><SideButton name="Course Scheduling Platform" link="/" /> <div /></h3>
      <SideButton name="Academic Info" link="/academic-info" /> <div />
      <SideButton name="Professor Info Uploading" link="/teacher-uploader" />
      <SideButton name="Professor's Requirements" link="/teacher-requirements" /> <div />
      <SideButton name="Professor Reminder" link="/teacher-reminder" />
      <SideButton name="Manual Scheduling" link="/scheduling" /> <div />
      <SideButton name="Automatic Scheduling (not implemented)" /> <div />
      <SideButton name="About" link="/about" /> <div />
    </div>
  );
}