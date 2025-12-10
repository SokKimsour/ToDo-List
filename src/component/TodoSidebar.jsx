import { useState } from "react"



export default function TodoSidebar({ groups, selectedGroup, setSelectedGroup, addGroup, deleteGroup }) {
    const [newGroup, setNewGroup] = useState("")

    //Add Group
    const handleAddGroup = () => {
        if (newGroup.trim() !== "") {
            addGroup(newGroup);
            setNewGroup("");
        }
    };


    return (
        <div className="w-full h-full flex flex-col items-center gap-2">
            <h1 className="bg-gray-300  w-full  py-5 border border-gray-200 font-bold text-2xl text-center shadow-sm rounded-lg ">TaskScrum</h1>
            <div className="w-full h-full border border-gray-200 shadow-lg rounded-lg bg-gray-300">
                <h1 className="font-bold text-2xl text-center py-3 border-b border-gray-500">Group</h1>
                <div className="flex flex-col items-center px-3 pt-3 gap-2.5">
                    {
                        groups.map((group) => {
                            const isActive = selectedGroup == group
                            const isProtect = group == "All" || group == "Complete"
                            return (
                                <div className="w-full flex items-center gap-2">
                                    <button
                                        className={`w-full border border-gray-500 shadow-lg rounded-lg py-3 transition-all ease-in-out duration-300 
                                            ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-300 hover:text-white"}
                                            `}
                                        key={group}
                                        onClick={() => {
                                            setSelectedGroup(group)
                                        }}><h1 className="text-2xl ">{group}</h1>
                                    </button>
                                    {!isProtect && (
                                        <button
                                            className="bg-white w-[20%] text-center border-gray-300 shadow-lg rounded-lg py-3 transition-transform ease-in-out duration-500 group"
                                            onClick={() => deleteGroup(group)}
                                        >
                                            <p className="font-bold text-lg transition duration-300 ease-in-out group-hover:scale-150">X</p>
                                        </button>
                                    )}

                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="border border-gray-200 shadow-lg rounded-lg w-full py-3 px-2 bg-gray-300">
                <h1 className="text-center pb-2.5 text-lg font-bold">Add New Group</h1>
                <div className="py-3 flex justify-around gap-2">
                    <input type="text"
                        onChange={(e) => setNewGroup(e.target.value)}
                        value={newGroup}
                        placeholder="Enter New Group Here" className="w-full border rounded-lg py-3 px-2" />
                    <button
                        onClick={handleAddGroup}
                        className="text-center border border-gray-500 shadow-sm rounded-lg py-3 px-2 transition-all ease-in-out duration-300 hover:bg-blue-300">Add</button>
                </div>
            </div>
        </div>
    )
}