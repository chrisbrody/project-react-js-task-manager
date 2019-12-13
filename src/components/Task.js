import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';


const Task = ({ task }) => {
	// grab functions [removeTask & findItem] from '../context/TaskListContext'
	const {removeTask, findItem} = useContext(TaskListContext)

	return (
		<li className="list-item">
			<span id={"task"+task.id}>{task.title}</span>
			<div>
				<button 
					onClick={() => removeTask(task.id)} 
					className="btn-delete task-btn"
				>
					<i className="fas fa-trash-alt"></i>
				</button>
				<button 
					onClick={() => findItem(task.id)} 
					className="btn-edit task-btn"
				>
					<i className="fas fa-pen"></i>
				</button>
			</div>
		</li>
	);
}

export default Task;