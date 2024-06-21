import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";
import SelectedProj from "./components/SelectedProj";

import {useState} from "react";

function App() {
  let [projects, setProjects] = useState({
    projectId: undefined, // doing nothing.
    projects: [],
    tasks: []
  });

  function handleAddTask(todo) {
    setProjects(prev => {
      let newTask = {
        todo: todo,
        projectId: prev.projectId,
        id: Math.random(),
      }

      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      }
    });
  }

  function handleDeleteTask(id) {
    let projIn = projects.tasks.findIndex(e => e.id === id);
    projects.tasks.splice(projIn,1);

    setProjects(prev => {
      return {
        ...prev
      }
    })    
  }

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

  function deleteProject(id) {
    let projIn = projects.projects.findIndex(e => e.id === id);
    projects.projects.splice(projIn,1);

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
  }else{
    let proj = projects.projects.find(e => e.id === projects.projectId);
    let tasks = projects.tasks.filter(e => e.projectId === projects.projectId);

    content = <SelectedProj project={proj} onDelete={deleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={tasks} />;
  }

  return (
    <>
      <Sidebar onAdd={handleProjectsState} projects={projects.projects} onSelect={showSelectedProjectDetails} projId={projects.projectId} />
      {content}      
    </>
  );
}

export default App;
