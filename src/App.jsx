import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";
import SelectedProj from "./components/SelectedProj";

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

  function showSelectedProjectDetails(event) {
    let clickedProject = projects.projects.find(e => e.title === event.target.innerText);
    setProjects(prev => {
      return {
        ...prev,
        projectId: clickedProject.id,
      }
    })
  }

  let content;
  if(projects.projectId === undefined) {
    content = <NoProject onAdd={handleProjectsState} />;
  }else if(projects.projectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  }else{
    let proj = projects.projects.find(e => e.id === projects.projectId);
    content = <SelectedProj project={proj} />;

    // it was my mistake and it should be e.id and not e.title .
    // or i can start from sidebar components as well, by passing id when clicked on a project.
  }

  return (
    <>
      <Sidebar onAdd={handleProjectsState} projects={projects.projects} onSelect={showSelectedProjectDetails} projId={projects.projectId} />
      {content}      
    </>
  );
}

export default App;
