import { useState } from "react";

export default function TodoItem({ todoTask, completeTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoTask.text);

  const save = () => {
    if (editText.trim() === "") return;
    editTask(todoTask.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center justify-between transition-all">

      {isEditing ? (
        <div className="flex w-full gap-3 items-center">
          <input
            className="flex-1 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />

          <button
            onClick={save}
            className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold shadow-sm hover:bg-green-600"
          >
            Save
          </button>

          <button
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 rounded-lg bg-slate-200 text-slate-700 font-semibold hover:bg-slate-300"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          {/* Left Side */}
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={todoTask.completed}
              onChange={() => completeTask(todoTask.id)}
              className="w-5 h-5 accent-indigo-500 cursor-pointer"
            />

            <p className={`text-lg ${
              todoTask.completed ? "line-through text-slate-400" : "text-slate-700"
            }`}>
              {todoTask.text}
            </p>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsEditing(true)}
              className="text-indigo-500 hover:text-indigo-700 text-xl font-medium"
              title="Edit"
            >
              ✎
            </button>

            <button
              onClick={() => deleteTask(todoTask.id)}
              className="text-red-500 hover:text-red-700 text-xl font-bold"
              title="Delete"
            >
              ✕
            </button>
          </div>
        </>
      )}
    </div>
  );
}
