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

  let content;
  if(projects.projectId === undefined) {
    content = <NoProject onAdd={handleProjectsState} />;
  }else if(projects.projectId === null) {
    content = <NewProject />;
  }

  return (
    <>
      <Sidebar onAdd={handleProjectsState} />
      {content}      
    </>
  );
}

export default App;
