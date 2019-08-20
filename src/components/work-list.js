import React from "react";

import ProjectCard from './project-card';
import workListStyles from './work-list.module.scss';

const WorkList = ({projects}) => (
      <div className={workListStyles.workList}>
        <div className={workListStyles.grid}>
          {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
);

export default WorkList;
