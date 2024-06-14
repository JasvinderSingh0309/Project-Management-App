import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";

import {useState} from "react";

function App() {
  let [projects, setProjects] = useState({
    projectId: undefined, // doing nothing.
    projects: [],
  });

  function handleProjectsState() {
    setProjects(prev => {
      return {
        ...prev,
        projectId:null, // adding a new project.
      };
    });
  }

  function handleAddProject(projectData) {
    setProjects(prev => {
      let newProject = {
        ...projectData,
        id: Math.random(),
      }

      return {
        ...prev,
        projects: [...prev.projects, newProject],
        projectId: undefined,
      }
    });
  }

  function handleCancel() {
    setProjects(prev => {
      return {
        ...prev,
        projectId: undefined,
      }
    })
  }

  let content;
  if(projects.projectId === undefined) {
    content = <NoProject onAdd={handleProjectsState} />;
  }else if(projects.projectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  }

  return (
    <>
      <Sidebar onAdd={handleProjectsState} projects={projects.projects} />
      {content}      
    </>
  );
}

export default App;
