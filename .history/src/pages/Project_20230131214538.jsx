import React from 'react'
import { useParams } from 'react-router-dom';

import ButtonGitHub from '../components/buttonGit/ButtonGitHub';
import { projects } from '../helpers/ProjectList';

const Project = () => {
  
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          <img src={project.imgBig} alt="" className="project-details__cover" />
          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>
          <ButtonGitHub link='/' />
        </div>
      </div>
    </main>
  );
};

export default Project