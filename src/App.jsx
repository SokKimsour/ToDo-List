import React, {useState} from 'react';
import TodoForm from './component/TodoForm';
import TodoSidebar from "./component/TodoSidebar";

import "./App.css";


function App() {
const [groups, setGroups] = useState(["All","Work","School","Personal"])
const [selectedGroup, setSelectedGroup] = useState("All")
const [todoTask, setTodoTask] = useState([])

//Add Task
const addTask = (taskText) => {
    if (taskText.trim() === "") return;
    setTodoTask(taskText)
}
  

//Add New Group
const addGroup = (groupName) => {
    if (groupName.trim() != "") {
      setGroups([...groups, groupName]);
    }
  }
  return (
    <div className="container max-w-[2560px] h-screen flex justify p-3 gap-3">
      <div className='w-[30%]'>
        <TodoSidebar
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup} 
        groups={groups}
        addGroup={addGroup}/>
      </div>
      <div className='w-[70%] p-5 border border-gray-200 shadow-lg rounded-lg flex flex-col gap-10'>
        <div>
          <h1 className='text-3xl font-bold '>{selectedGroup}</h1>
          <h1>{Date.now}</h1>
        </div>

        {/* Form for input and search */}
        <TodoForm/>

        {/* Render todo list */}
        <div>
          {
           
          }
        </div>
      </div>

    </div>
  );
}

export default App
