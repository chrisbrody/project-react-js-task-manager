import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
	// grabs functions from ../context/TaskListContext.js
	const {addTask, clearList, editItem, editTask} = useContext(TaskListContext);

	// update title to empty using React useState
	const [title, setTitle] = useState("");

	// on input change
	const handleChange = e => {
		// store value fo input
		setTitle(e.target.value);
	}

	// on form subimt
	const handleSubmit = e => {
		// stop page refresh
		e.preventDefault();
		// if user is not editing then add task, other wise the user is editing 
		if(!editItem) {
			// add task to list
			addTask(title);
			// clears input
			setTitle("")
		} else {
			editTask(title, editItem.id)
		}
	}

	// React webhook - useEffect - watch for editItem value changing
	useEffect(() => {
		if(editItem) {
			setTitle(editItem.title)
		} else {
			setTitle("")
		}
	}, [editItem]);

	return (
		<form onSubmit={handleSubmit} className="form">
			<input 
				onChange = {handleChange}
				type="text"
				value={title}
				className="task-input"
				required
			/>
			<div className="buttons">
				<button 
					type="submit" 
					className="btn add-task-btn">
					{editItem ? 'Edit Task' : 'Add Task'}
				</button>
				<button  
					onClick={clearList}
					className="btn clear-btn">Clear
				</button>
			</div>
		</form>
	)
}

export default TaskForm