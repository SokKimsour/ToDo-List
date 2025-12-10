import { useState } from "react";

export default function TodoForm({ addTask, setSearchText }) {
  
  const [task, setTask] = useState("");
  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addTask(task);
    setTask("");
  };

  return (
    <form className="w-full h-auto flex flex-col px-5 pt-5">

      {/* Search Section */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-3 mb-8">
        <h1 className="text-2xl">Search:</h1>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search Task"
          className="w-full sm:w-3/5 bg-blue-50 border border-gray-500 shadow-lg rounded-lg pl-5 py-2.5"
        />
      </div>

      {/* Add Task Section */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-start sm:items-center gap-2.5 mb-8">
        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border border-gray-500 shadow-lg rounded-lg w-full sm:w-4/5 p-4 resize-none"
          placeholder="Enter Task..."
        />
        <button
          type="submit"
          onClick={handleAddTask}
          className="border border-gray-500 shadow-lg rounded-lg px-5 py-7 transition-all ease-in-out duration-300 hover:bg-blue-300 w-full sm:w-auto "
        >
          ADD
        </button>
      </div>

    </form>
  );
}
