import React, { useState } from "react";

function Tasks({ tasks, setTasks }) {


const [newTask, setNewTask] = useState("");

return (
    <div>

        <h1>Today's Tasks</h1>

        {tasks.map(function(task, index) {

            return (
                <div key={index}>

                    <input type="checkbox" />

                    <label>{task}</label>

                    <button
                        onClick={function() {
                            setTasks(
                                tasks.filter(function(_, i) {
                                    return i !== index;
                                })
                            );
                        }}
                    >
                        Remove
                    </button>

                </div>
            );

        })}

        <br />

        <input
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={function(event) {
                setNewTask(event.target.value);
            }}
        />

        <button
            onClick={function() {

                if (newTask.trim() !== "") {

                    setTasks([...tasks, newTask]);

                    setNewTask("");

                }

            }}
        >
            Add Task
        </button>

    </div>
);


}

export default Tasks;
