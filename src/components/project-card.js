import { Link } from "gatsby";
// import PropTypes from "prop-types";
import React from "react";
import porjectCardStyles from './project-card.module.scss';

const ProjectCard = ({project}) => {
  const projectId = project.id;

  return(
  <div className={porjectCardStyles.card}>
    <Link to={`/projects/${projectId}`}>
      <div className={porjectCardStyles.image} id={project.id}><div className={porjectCardStyles[projectId]}></div></div>
      <div className={porjectCardStyles.container}>
        <h4 className={porjectCardStyles.title}>{project.title}</h4>
        <ul className={porjectCardStyles.tags}>
          {project.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </Link>
  </div>
  )
}

export default ProjectCard;
