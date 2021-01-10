import React from 'react';
import dataProject from 'src/data/project';

import Project from 'src/components/Project';

import './projects.scss';

// const Projects = ({ projects }) => {
//   const { id } = useParams();
//   const project = getProjectById(id, projects);

//   return (
//     <div
//       className="projects"
//     >
//       <Project
//         {...project}
//         key={project.id}
//       />
//     </div>
//   );
// };

export const Project1 = () => (
  <div className="projects">
    <Project
      {...dataProject[0]}
      key={dataProject[0].id}
    />

  </div>
);
export const Project2 = () => (
  <div className="projects">
    <Project
      {...dataProject[1]}
      key={dataProject[1].id}
    />

  </div>
);
export const Project3 = () => (
  <div className="projects">
    <Project
      {...dataProject[2]}
      key={dataProject[2].id}
    />

  </div>
);
