import React, { useState } from 'react';
import TodoForm from './component/TodoForm';
import TodoSidebar from "./component/TodoSidebar";
import TodoList from './component/TodoList';


function App() {
  const [groups, setGroups] = useState(["All", "Complete", "Work", "School", "Personal"]);
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [todoTask, setTodoTask] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Add Task
  const addTask = (taskText) => {
    if (taskText.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: taskText,
      group: selectedGroup,
      completed: false,
    };
    setTodoTask([...todoTask, newTask]);
  };

  // Add New Group
  const addGroup = (groupName) => {
    if (groupName.trim() !== "") {
      setGroups([...groups, groupName]);
    }
  };

  // Delete Group
  const deleteGroup = (groupName) => {
    setGroups((prev) => prev.filter((g) => g !== groupName));
    setTodoTask((prev) => prev.filter((t) => t.group !== groupName));
  };

  // Delete Task
  const deleteTask = (id) => {
    setTodoTask((prev) => prev.filter((t) => t.id !== id));
  };

  // Mark Task as Complete
  const completeTask = (id) => {
    setTodoTask(
      todoTask.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit Task
  const editTask = (id, newText) => {
    setTodoTask(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="container bg-[#f7f7f7] mx-auto max-w-[2560px] h-screen p-3 flex flex-col md:flex-row gap-3 bg-gray-50">

      {/* Hamburger Button for mobile */}
      <div className="md:hidden flex justify-between items-center mb-3">
        <h1 className="text-2xl font-bold text-slate-800">TaskScrum</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-3xl text-slate-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 z-50 h-full w-64 bg-white p-5 shadow-xl border-r border-slate-200 
  transition-transform transform rounded-2xl
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:w-[30%]`}>
        <TodoSidebar
          deleteGroup={deleteGroup}
          selectedGroup={selectedGroup}
          setSelectedGroup={setSelectedGroup}
          groups={groups}
          addGroup={addGroup} 
        />
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="w-full md:w-[72%] p-8 bg-white shadow-xl rounded-2xl border border-slate-100 flex flex-col gap-10 ml-auto">
        <div >
          <h1 className="text-3xl font-semibold text-slate-800">Welcome To TaskScrum</h1>
        </div>

        {/* Form for input and search */}
        <TodoForm
          addTask={addTask}
          setSearchText={setSearchText}
        />

        {/* Render todo list */}
        <TodoList
          todoTask={todoTask}
          groupSelected={selectedGroup}
          deleteTask={deleteTask}
          completeTask={completeTask}
          editTask={editTask}
          searchText={searchText}
        />
      </div>
    </div>
  );
}

export default App;
