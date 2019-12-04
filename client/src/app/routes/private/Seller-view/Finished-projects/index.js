import React from 'react';
import ProjectFinishedComponents from './ProjectFinishedComponents';

class FinishedProject extends React.Component {

  render() {
   return (
      <div className="app-wrapper">
        <div className="d-flex justify-content-center">
        Finished Project
       </div>
       <ProjectFinishedComponents />
   </div>
    );

  }
}

export default FinishedProject;