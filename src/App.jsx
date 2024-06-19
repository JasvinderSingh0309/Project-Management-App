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
    // console.log(clickedProject);

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
    console.log("Jasvidner");
    let proj = projects.projects.find(e => e.title === projects.projectId);
    console.log(proj);
    // here it gives proj as undefined, but in Sidebar projId is corretly displayed.
    content = <SelectedProj project={proj} />;
  }

  return (
    <>
      <Sidebar onAdd={handleProjectsState} projects={projects.projects} onSelect={showSelectedProjectDetails} projId={projects.projectId} />
      {content}      
    </>
  );
}

export default App;
