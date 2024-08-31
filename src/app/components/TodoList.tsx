"use client"

import React, { useState } from "react"
import TodoItem from "./TodoItem";


const TodoList = () => {
    const [tasks, setTasks] = useState<Array<{task: string; complted: boolean}>>([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if(newTask.trim()){
            setTasks([...tasks, { task: newTask, complted: false}]);
            setNewTask('');
        }
    };

    const removeTask = (index: number)=>{
        const newTasks = [...tasks];
        newTasks.splice(index,1);
        setTasks(newTasks)
    }

    return(
        <div className="p-4">
            <input
                type="text"
                placeholder="Add a task"
                value={newTask}
                onChange={(e)=> setNewTask(e.target.value)}
                onKeyDown={(e)=> e.key === 'Enter' && addTask()}
                className="p-2 border rounded w-full mb-8"
            />
            <div>
                {tasks.map((task,index)=>(
                    <TodoItem
                        key={index}
                        task={task.task}
                        toggleCompletionL={()=>removeTask(index)}
                        />
                ))}
            </div>
        </div>
    );
}

export default TodoList;