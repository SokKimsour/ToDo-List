import TodoItem from "./TodoItem"

export default function TodoList({ 
    groupSelected, 
    completeTask, 
    searchText, 
    todoTask, 
    editTask, 
    deleteTask 
}) {

    const filteredTasks = todoTask.filter(task => {
        const isCompleteGroup = groupSelected === "Complete";
        const isAllGroup = groupSelected === "All";
        const isOtherGroup = !isAllGroup && !isCompleteGroup;

        // Complete group: only completed
        if (isCompleteGroup && !task.completed) return false;

        // Other groups: match group and must be incomplete
        if (isOtherGroup) {
            if (task.group !== groupSelected) return false;
            if (task.completed) return false;
        }

        // Search filter
        if (searchText.trim() !== "" &&
            !task.text.toLowerCase().includes(searchText.toLowerCase())
        ) {
            return false;
        }

        return true;
    });

    return (
        <>
            <div className="w-full h-auto mb-2.5 w-4/5">
                <div className="w-full h-10 border-b-2 px-5">
                    <h1 className="text-2xl font-bold">{groupSelected}</h1>
                </div>
            </div>

            <div className="w-full h-full flex flex-col gap-2.5">
                {filteredTasks.length === 0 ? (
                    <p className="text-gray-400 text-center py-5 text-5xl">
                        No tasks found
                    </p>
                ) : (
                    filteredTasks.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todoTask={todo}
                            completeTask={completeTask}
                            deleteTask={deleteTask}
                            editTask={editTask}
                        />
                    ))
                )}
            </div>
        </>
    );
}
