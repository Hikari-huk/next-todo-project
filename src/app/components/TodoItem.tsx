import React from "react";

const TodoItem = (props: { task: string; toggleCompletionL :() => void;}) => {
    return(
        <div className="flex justify-between p-2 border-b bg-white mb-5">
            <span className="flex-1">{props.task}</span>
            <button onClick={props.toggleCompletionL} className="text-xl">☑️</button>
        </div>
    );
}

export default TodoItem;