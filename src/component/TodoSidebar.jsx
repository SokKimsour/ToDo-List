import { useState } from "react";

export default function TodoSidebar({
  groups,
  selectedGroup,
  setSelectedGroup,
  addGroup,
  deleteGroup,
}) {
  const [newGroup, setNewGroup] = useState("");

  const handleAddGroup = () => {
    if (newGroup.trim() !== "") {
      addGroup(newGroup);
      setNewGroup("");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-4">

      {/* App title */}
      <h1 className="w-full py-5 rounded-xl bg-white shadow-sm border border-slate-200 text-slate-800 text-2xl font-semibold text-center">
        TaskScrum
      </h1>

      {/* Group section */}
      <div className="w-full h-full bg-white rounded-xl shadow-md border border-slate-200 flex flex-col">
        <h1 className="text-xl font-semibold text-slate-700 text-center py-4 border-b border-slate-200">
          Groups
        </h1>

        <div className="px-4 py-3 flex flex-col gap-3 overflow-y-auto">
          {groups.map((group) => {
            const isActive = selectedGroup === group;
            const protectedGroup = group === "All" || group === "Complete";

            return (
              <div key={group} className="flex items-center gap-2">
                {/* Group Button */}
                <button
                  className={`w-full py-3 rounded-lg border border-slate-300 shadow-sm text-left px-4 
                    transition-all duration-200 text-slate-700
                    ${
                      isActive
                        ? "bg-indigo-500 text-gray-100 border-indigo-500 shadow-md"
                        : "hover:bg-indigo-100 "
                    }`}
                  onClick={() => setSelectedGroup(group)}
                >
                  <span className="text-lg ">{group}</span>
                </button>

                {/* Delete Button */}
                {!protectedGroup && (
                  <button
                    className="w-[22%] py-3 rounded-lg bg-white border border-slate-300 shadow-sm 
                      text-slate-600 font-bold transition-all duration-300 
                      hover:bg-red-100 hover:text-red-600 hover:shadow-md"
                    onClick={() => deleteGroup(group)}
                  >
                    ✕
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Add New Group */}
      <div className="w-full bg-white rounded-xl shadow-md border border-slate-200 p-4">
        <h1 className="text-center text-lg font-semibold text-slate-700 pb-2">
          Add New Group
        </h1>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={newGroup}
            onChange={(e) => setNewGroup(e.target.value)}
            placeholder="New group name"
            className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            onClick={handleAddGroup}
            className="px-4 py-2.5 rounded-lg border border-indigo-500 text-indigo-600 font-semibold 
              hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-sm"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
