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
    <div className="border p-3 rounded flex justify-between items-center bg-gray-50">

      {isEditing ? (
        <div className="flex-1 flex gap-2">
          <input
            className="flex-1 border p-2 rounded"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            onClick={save}
            className="bg-green-500 text-white px-3 rounded"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-300 px-3 rounded"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={todoTask.completed}
              onChange={() => completeTask(todoTask.id)}
              className="scale-200"
            />
            <p
              className={`${
                todoTask.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todoTask.text}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500  text-2xl"
            >
              Edit
            </button>

            <button
              onClick={() => deleteTask(todoTask.id)}
              className="text-red-500 font-bold text-2xl"
            >
              X
            </button>
          </div>
        </>
      )}

    </div>
  );
}
