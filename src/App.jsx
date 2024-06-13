import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";

import {useState} from "react";

function App() {
  let [addingProject, setAddingProject] = useState(false);

  function handleAddProject() {
    setAddingProject(true);
  }

  return (
    <>
      <Sidebar onAdd={handleAddProject} />
      {addingProject? <NewProject /> :  <NoProject onAdd={handleAddProject} />}      
    </>
  );
}

export default App;
