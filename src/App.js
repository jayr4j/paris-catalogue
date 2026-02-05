import React, { useState } from 'react';
import projects from './projectsData';
import './index.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="container">
      <header className="header">
  <h1></h1> {/* Leave this empty */}
</header>
      
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="card" onClick={() => setSelectedProject(project)}>
            <img src={project.thumbnail} alt={project.title} />
            <div className="card-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProject.thumbnail} alt={selectedProject.title} style={{width: '100%', borderRadius: '10px'}} />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;